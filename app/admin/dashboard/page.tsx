import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardClient from './dashboard-client'
import { ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Dashboard Administration Leads',
  description: 'Gérez et suivez les demandes clients qualifiées.',
}

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  // 1. Verify Authentication
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // 2. Verify Admin Role in Profiles table
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('role, full_name')
    .eq('id', user.id)
    .single()

  if (profileError || !profile || profile.role !== 'admin') {
    // Access Denied Screen
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
          <ShieldCheck className="h-10 w-10 text-rose-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Accès Refusé</h1>
        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
          Votre compte est authentifié ({user.email}) mais vous ne disposez pas des droits d'administration requis pour accéder à cette interface.
        </p>
        <form action="/auth/logout" method="POST">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            Se déconnecter
          </button>
        </form>
      </div>
    )
  }

  // 3. Fetch initial Leads list
  const { data: initialLeads, error: leadsError } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (leadsError) {
    console.error('Leads fetching error:', leadsError)
  }

  return (
    <div className="relative py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/5 pb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Administration
          </h1>
          <p className="text-xs text-gray-400">
            Connecté en tant que <span className="text-cyan-400 font-semibold">{profile.full_name || user.email}</span>
          </p>
        </div>

        {/* Real HTML form targeting /auth/logout handler */}
        <form action="/auth/logout" method="POST">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-transparent transition-all duration-200 cursor-pointer"
          >
            Se déconnecter
          </button>
        </form>
      </div>

      {/* Mount Interactivity Client */}
      <DashboardClient initialLeads={initialLeads || []} />
    </div>
  )
}
