'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import StatsCards from '@/components/admin/stats-cards'
import LeadsTable from '@/components/admin/leads-table'
import { AlertTriangle, Loader2 } from 'lucide-react'

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

interface DashboardClientProps {
  initialLeads: Lead[]
}

export default function DashboardClient({ initialLeads }: DashboardClientProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const supabase = createClient()

  // Handle status update
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id)
    setErrorMsg('')

    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      // Update local state
      setLeads((prev) =>
        prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
      )
    } catch (err: any) {
      console.error('Error updating status:', err)
      setErrorMsg("Une erreur est survenue lors de la mise à jour du statut.")
    } finally {
      setUpdatingId(null)
    }
  }

  // Handle delete lead
  const handleDeleteLead = async (id: string) => {
    setErrorMsg('')

    try {
      const { error } = await supabase.from('leads').delete().eq('id', id)

      if (error) throw error

      // Remove from local state
      setLeads((prev) => prev.filter((lead) => lead.id !== id))
    } catch (err: any) {
      console.error('Error deleting lead:', err)
      setErrorMsg("Une erreur est survenue lors de la suppression de la demande.")
    }
  }

  return (
    <div className="space-y-8">
      {errorMsg && (
        <div className="flex items-center space-x-2 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
          <AlertTriangle className="h-4.5 w-4.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {updatingId && (
        <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-[#101944] border border-cyan-500/20 text-cyan-400 px-4 py-2.5 rounded-lg shadow-xl text-xs">
          <Loader2 className="h-4 w-4 animate-spin text-cyan-500" />
          <span>Synchronisation Supabase...</span>
        </div>
      )}

      {/* Stats Summary cards */}
      <StatsCards leads={leads} />

      {/* Main Leads Table */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight">Liste des Demandes</h2>
        <LeadsTable
          leads={leads}
          onUpdateStatus={handleUpdateStatus}
          onDeleteLead={handleDeleteLead}
        />
      </div>
    </div>
  )
}
