'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Lock, Loader2, AlertCircle, CheckCircle } from 'lucide-react'

export default function ResetPasswordPage() {
  const router = useRouter()
  const supabase = createClient()

  // Form states
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    // Validate passwords
    if (password.length < 6) {
      setErrorMsg('Le mot de passe doit contenir au moins 6 caractères.')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setErrorMsg('Les mots de passe ne correspondent pas.')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) throw error

      setSuccess(true)
      setTimeout(() => {
        router.push('/admin/login')
      }, 3000)
    } catch (err: any) {
      console.error('Password update error:', err)
      setErrorMsg(err.message || 'Une erreur est survenue lors de la réinitialisation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="absolute w-72 h-72 rounded-full bg-[#002FA7]/5 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#002FA7]/10 to-[#D95D39]/15 border border-[#002FA7]/20 text-[#002FA7]">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Réinitialisation de mot de passe</h1>
          <p className="text-xs text-slate-500 font-medium">Saisissez votre nouveau mot de passe sécurisé</p>
        </div>

        <div className="glass-panel bg-white/95 rounded-2xl p-6 md:p-8 border-slate-200/60 shadow-xl">
          {success ? (
            <div className="flex flex-col items-center justify-center text-center py-6 space-y-3 animate-float">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
              <h3 className="text-lg font-bold text-slate-900">Mot de passe mis à jour !</h3>
              <p className="text-xs text-slate-600">
                Votre mot de passe a été réinitialisé. Redirection vers la page de connexion...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="flex items-start space-x-2.5 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                  <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5 text-rose-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Password field */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                />
              </div>

              {/* Confirm password field */}
              <div className="space-y-1.5">
                <label htmlFor="confirmPassword" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 shadow-md shadow-[#002FA7]/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Enregistrement...
                  </>
                ) : (
                  'Mettre à jour le mot de passe'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
