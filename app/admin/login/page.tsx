'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Lock, Mail, Loader2, AlertCircle, Sparkles } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const supabase = createClient()

  // Form states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [resetSent, setResetSent] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Veuillez saisir votre e-mail et votre mot de passe.')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Redirect to dashboard on success
      router.push('/admin/dashboard')
      router.refresh()
    } catch (err: any) {
      console.error('Login error:', err)
      setErrorMsg(err.message || 'Identifiants invalides. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      setErrorMsg('Veuillez saisir votre adresse email dans le champ ci-dessus pour réinitialiser votre mot de passe.')
      return
    }

    setLoading(true)
    setErrorMsg('')

    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${siteUrl}/auth/reset-password`,
      })

      if (error) throw error

      setResetSent(true)
    } catch (err: any) {
      console.error('Password reset error:', err)
      setErrorMsg(err.message || 'Erreur lors de la demande de réinitialisation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-12">
      {/* Background Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#002FA7]/5 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#002FA7]/10 to-[#D95D39]/15 border border-[#002FA7]/20 text-[#002FA7]">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Espace Administration</h1>
          <p className="text-xs text-slate-500">Connectez-vous pour accéder au dashboard des leads</p>
        </div>

        <div className="glass-panel bg-white/95 rounded-2xl p-6 md:p-8 border-slate-200/60 shadow-xl space-y-6">
          {errorMsg && (
            <div className="flex items-start space-x-2.5 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs">
              <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {resetSent && (
            <div className="flex items-start space-x-2.5 p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
              <Sparkles className="h-4.5 w-4.5 shrink-0 mt-0.5 text-emerald-600" />
              <span>Lien de réinitialisation envoyé à {email}. Veuillez consulter votre boîte de réception.</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Adresse Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@exemple.com"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Mot de passe
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[10px] font-semibold text-[#002FA7] hover:text-[#002FA7]/80 hover:underline outline-none cursor-pointer"
                >
                  Mot de passe oublié ?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]/20 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 shadow-md shadow-[#002FA7]/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Connexion...
                </>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
