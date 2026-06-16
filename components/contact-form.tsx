'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'

// Wrap inside a inner component to use searchParams safely in Next.js static pages
function FormContent() {
  const searchParams = useSearchParams()
  const supabase = createClient()

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    sector: '',
    serviceType: '',
    budgetRange: '',
    message: '',
    preferredContact: 'email',
    honeypot: '', // anti-spam
  })

  // UI State
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')

  // Pre-fill serviceType from query parameter
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceType: serviceParam }))
    }
  }, [searchParams])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectBudget = (range: string) => {
    setFormData((prev) => ({ ...prev, budgetRange: range }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    // Basic Validation
    if (!formData.fullName.trim() || !formData.message.trim() || !formData.serviceType) {
      setStatus('error')
      setErrorMessage('Veuillez remplir tous les champs obligatoires (*).')
      setLoading(false)
      return
    }

    // Honeypot validation
    if (formData.honeypot) {
      // Spam detected, pretend success
      setTimeout(() => {
        setStatus('success')
        setLoading(false)
      }, 1000)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Erreur lors de l’envoi de la demande.')
      }

      // Generate WhatsApp pre-filled text
      const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212679515074'
      const serviceLabel = serviceOptions.find(o => o.value === formData.serviceType)?.label || formData.serviceType
      const waText = `Bonjour DigitalService,\nJe viens d'envoyer une demande de projet :\n\n• Nom : ${formData.fullName}\n• Email : ${formData.email || 'Non précisé'}\n• Téléphone : ${formData.phone || 'Non précisé'}\n• Service : ${serviceLabel}\n• Message : ${formData.message}`
      setWhatsappLink(`https://wa.me/${rawNumber.replace(/\D/g, '')}?text=${encodeURIComponent(waText)}`)

      setStatus('success')
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        company: '',
        sector: '',
        serviceType: '',
        budgetRange: '',
        message: '',
        preferredContact: 'email',
        honeypot: '',
      })
    } catch (err: any) {
      console.error('Error submitting form:', err)
      setStatus('error')
      setErrorMessage(
        err.message || "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer."
      )
    } finally {
      setLoading(false)
    }
  }

  const budgetOptions = [
    'Moins de 2 000 DH',
    '2 000 DH - 5 000 DH',
    '5 000 DH - 15 000 DH',
    '15 000 DH - 30 000 DH',
    'Plus de 30 000 DH',
  ]

  const serviceOptions = [
    { value: 'web-app', label: 'Application Web Métier' },
    { value: 'android-app', label: 'Application Mobile Android' },
    { value: 'desktop-app', label: 'Application PC / Bureau' },
    { value: 'website', label: 'Site Web Professionnel' },
    { value: 'gmao', label: 'Solution GMAO / Maintenance' },
    { value: 'supervision', label: 'Supervision Industrielle / Dashboard' },
    { value: 'medical', label: 'Gestion de Cabinet Médical' },
    { value: 'hotel', label: 'Gestion Hôtelière' },
    { value: 'stock-prod', label: 'Gestion Production / Stock / Maintenance' },
    { value: 'custom', label: 'Autre Application Métier sur mesure' },
  ]

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden bg-white">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#002FA7]/5 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' && (
        <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-float">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Demande envoyée !</h3>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            Merci pour votre intérêt. Votre demande a été enregistrée avec succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-emerald-500/10"
              >
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.002-2.63-1.023-5.102-2.884-6.964a9.774 9.774 0 0 0-6.974-2.88C6.413 1.913 1.99 6.331 1.988 11.76c-.001 1.516.425 2.993 1.233 4.287L2.245 19.9l4.402-1.156L6.647 19.15z"/>
                </svg>
                Envoyer sur WhatsApp
              </a>
            )}
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200/80 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Honeypot field (hidden from users) */}
          <div className="hidden">
            <label htmlFor="honeypot">Ne rien saisir ici</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Nom Complet *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Ex: Youssef Alami"
                required
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ex: youssef@entreprise.com"
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Numéro de Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ex: +212 600 000 000"
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
              />
            </div>

            {/* Company / Sector */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Entreprise & Secteur
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Ex: Innov SARL"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                />
                <input
                  type="text"
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  placeholder="Ex: Industrie / Santé"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Type */}
            <div className="space-y-2">
              <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Type de besoin *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200"
              >
                <option value="" disabled className="bg-white text-slate-900">--- Sélectionnez une option ---</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white text-slate-900">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Canal de contact préféré
              </label>
              <div className="grid grid-cols-3 gap-3 h-[46px]">
                {['email', 'whatsapp', 'phone'].map((channel) => (
                  <label
                    key={channel}
                    className={`flex items-center justify-center rounded-lg border text-xs font-semibold cursor-pointer transition-all duration-200 capitalize ${
                      formData.preferredContact === channel
                        ? 'bg-[#002FA7]/10 border-[#002FA7] text-[#002FA7]'
                        : 'border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      value={channel}
                      checked={formData.preferredContact === channel}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    {channel === 'phone' ? 'Téléphone' : channel}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Budget Range selection */}
          <div className="space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Budget Approximatif
            </label>
            <div className="flex flex-wrap gap-2.5">
              {budgetOptions.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => handleSelectBudget(range)}
                  className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all duration-200 ${
                    formData.budgetRange === range
                      ? 'bg-[#002FA7]/10 border-[#002FA7] text-[#002FA7] shadow-md shadow-[#002FA7]/5'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Description de votre projet *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Décrivez votre besoin métier, vos objectifs et vos contraintes techniques..."
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 shadow-lg shadow-[#002FA7]/15 hover:shadow-[#002FA7]/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Traitement en cours...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Envoyer ma demande de devis
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}

export default function ContactForm() {
  return (
    <Suspense fallback={
      <div className="glass-panel rounded-2xl p-8 flex items-center justify-center min-h-[400px] bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-[#002FA7]" />
      </div>
    }>
      <FormContent />
    </Suspense>
  )
}
