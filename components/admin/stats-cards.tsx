'use client'

import { Mail, Calendar, BarChart3, Clock } from 'lucide-react'

interface Lead {
  id: string
  full_name: string
  phone: string | null
  email: string | null
  company: string | null
  sector: string | null
  service_type: string
  budget_range: string | null
  message: string
  preferred_contact: string | null
  status: string
  created_at: string
}

interface StatsCardsProps {
  leads: Lead[]
}

export default function StatsCards({ leads }: StatsCardsProps) {
  const totalLeads = leads.length

  // Calculate leads this week (last 7 days)
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const leadsThisWeek = leads.filter((lead) => new Date(lead.created_at) >= oneWeekAgo).length

  // Calculate leads this month (last 30 days)
  const oneMonthAgo = new Date()
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
  const leadsThisMonth = leads.filter((lead) => new Date(lead.created_at) >= oneMonthAgo).length

  // Calculate distribution by status
  const newLeads = leads.filter((lead) => lead.status === 'new').length

  const stats = [
    {
      name: 'Total Demandes',
      value: totalLeads,
      icon: Mail,
      colorClass: 'text-[#002FA7] bg-[#002FA7]/10 border-[#002FA7]/20',
      description: 'Total historique des leads',
    },
    {
      name: 'Cette Semaine',
      value: leadsThisWeek,
      icon: Calendar,
      colorClass: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Reçus ces 7 derniers jours',
    },
    {
      name: 'Ce Mois',
      value: leadsThisMonth,
      icon: Clock,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'Reçus ces 30 derniers jours',
    },
    {
      name: 'À Traiter (Nouveau)',
      value: newLeads,
      icon: BarChart3,
      colorClass: 'text-[#D95D39] bg-[#D95D39]/10 border-[#D95D39]/20',
      description: 'Demandes non encore contactées',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="glass-panel bg-white/70 rounded-2xl p-5 border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.name}</span>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${stat.colorClass}`}>
              <stat.icon className="h-4.5 w-4.5" />
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">{stat.value}</span>
            <p className="text-[10px] text-slate-500 font-medium">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
