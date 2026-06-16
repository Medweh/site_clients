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
    <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' && (
        <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-float">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-white">Demande envoyée !</h3>
          <p className="text-gray-300 max-w-md text-sm leading-relaxed">
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
              className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
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
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
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
                className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ex: youssef@entreprise.com"
                className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Numéro de Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ex: +212 600 000 000"
                className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Company / Sector */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
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
                  className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                />
                <input
                  type="text"
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  placeholder="Ex: Industrie / Santé"
                  className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Type */}
            <div className="space-y-2">
              <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Type de besoin *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white outline-none transition-all duration-200"
              >
                <option value="" disabled className="bg-[#0b0f19]">--- Sélectionnez une option ---</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0b0f19]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Canal de contact préféré
              </label>
              <div className="grid grid-cols-3 gap-3 h-[46px]">
                {['email', 'whatsapp', 'phone'].map((channel) => (
                  <label
                    key={channel}
                    className={`flex items-center justify-center rounded-lg border text-xs font-medium cursor-pointer transition-all duration-200 capitalize ${
                      formData.preferredContact === channel
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                        : 'border-white/10 bg-[#050b14]/60 text-gray-400 hover:text-white'
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
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Budget Approximatif
            </label>
            <div className="flex flex-wrap gap-2.5">
              {budgetOptions.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => handleSelectBudget(range)}
                  className={`px-4 py-2 rounded-lg border text-xs font-medium transition-all duration-200 ${
                    formData.budgetRange === range
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md'
                      : 'border-white/5 bg-[#050b14]/40 text-gray-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
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
              className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
      <div className="glass-panel rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
      </div>
    }>
      <FormContent />
    </Suspense>
  )
}
