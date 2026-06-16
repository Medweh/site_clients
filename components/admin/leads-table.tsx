'use client'

import { useState } from 'react'
import { MessageSquare, Trash2, Search, Filter, Mail, Phone, Calendar, Building, HelpCircle } from 'lucide-react'

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

interface LeadsTableProps {
  leads: Lead[]
  onUpdateStatus: (id: string, status: string) => void
  onDeleteLead: (id: string) => void
}

const STATUS_LABELS: Record<string, string> = {
  new: 'Nouveau',
  contacted: 'Contacté',
  in_discussion: 'En discussion',
  quote_sent: 'Devis envoyé',
  won: 'Gagné',
  lost: 'Perdu',
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  contacted: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  in_discussion: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  quote_sent: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  won: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  lost: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

const SERVICE_LABELS: Record<string, string> = {
  'web-app': 'App Web Métier',
  'android-app': 'App Android',
  'desktop-app': 'App PC / Bureau',
  website: 'Site Web Pro',
  gmao: 'GMAO / Maintenance',
  supervision: 'Supervision / Modbus',
  medical: 'Cabinet Médical',
  hotel: 'Gestion Hôtelière',
  'stock-prod': 'Gestion Production',
  custom: 'Sur Mesure',
}

export default function LeadsTable({ leads, onUpdateStatus, onDeleteLead }: LeadsTableProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.email && lead.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (lead.company && lead.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.message.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleOpenWhatsApp = (lead: Lead) => {
    if (!lead.phone) return
    const cleanPhone = lead.phone.replace(/\D/g, '')
    const serviceName = SERVICE_LABELS[lead.service_type] || lead.service_type
    const message = encodeURIComponent(
      `Bonjour ${lead.full_name}, c'est Mohamed Essahafi. J'ai bien reçu votre demande de projet concernant : "${serviceName}". Je serai ravi d'en discuter avec vous.`
    )
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank')
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="space-y-4">
      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher un lead..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none transition-all duration-200"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="h-4 w-4 text-gray-500 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-auto bg-[#050b14]/60 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-2 text-xs text-white outline-none transition-all duration-200"
          >
            <option value="all" className="bg-[#0b0f19]">Tous les statuts</option>
            {Object.entries(STATUS_LABELS).map(([val, label]) => (
              <option key={val} value={val} className="bg-[#0b0f19]">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/5 bg-[#060b13] text-gray-400 font-semibold uppercase tracking-wider">
                <th className="px-6 py-4">Client / Entreprise</th>
                <th className="px-6 py-4">Détails Besoin</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-[#0b0f19]/30">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    Aucune demande trouvée.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    {/* Client details */}
                    <td className="px-6 py-4 space-y-1">
                      <div className="font-bold text-white text-sm">{lead.full_name}</div>
                      <div className="space-y-0.5 text-gray-400">
                        {lead.email && (
                          <div className="flex items-center space-x-1.5">
                            <Mail className="h-3 w-3 text-cyan-500" />
                            <span>{lead.email}</span>
                          </div>
                        )}
                        {lead.phone && (
                          <div className="flex items-center space-x-1.5">
                            <Phone className="h-3 w-3 text-cyan-500" />
                            <span>{lead.phone}</span>
                          </div>
                        )}
                        {lead.company && (
                          <div className="flex items-center space-x-1.5">
                            <Building className="h-3 w-3 text-cyan-500" />
                            <span>
                              {lead.company} {lead.sector ? `(${lead.sector})` : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Service & Budget & Date */}
                    <td className="px-6 py-4 space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-medium font-mono text-[10px]">
                        {SERVICE_LABELS[lead.service_type] || lead.service_type}
                      </span>
                      {lead.budget_range && (
                        <div className="text-gray-300 font-medium">Budget: {lead.budget_range}</div>
                      )}
                      <div className="flex items-center space-x-1 text-gray-500 text-[10px]">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(lead.created_at)}</span>
                      </div>
                      <div className="text-[10px] text-gray-400">
                        Pref. contact : <span className="capitalize text-cyan-400 font-semibold">{lead.preferred_contact || 'Non spécifié'}</span>
                      </div>
                    </td>

                    {/* Message content */}
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-gray-300 leading-relaxed break-words line-clamp-3 hover:line-clamp-none transition-all duration-300 cursor-help" title={lead.message}>
                        {lead.message}
                      </p>
                    </td>

                    {/* Status Dropdown */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select
                          value={lead.status}
                          onChange={(e) => onUpdateStatus(lead.id, e.target.value)}
                          className={`appearance-none border rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-cyan-500/30 cursor-pointer pr-8 ${
                            STATUS_COLORS[lead.status] || 'bg-white/5 text-white border-white/10'
                          }`}
                        >
                          {Object.entries(STATUS_LABELS).map(([val, label]) => (
                            <option key={val} value={val} className="bg-[#0b0f19] text-white">
                              {label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </td>

                    {/* Actions column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {lead.phone && (
                          <button
                            onClick={() => handleOpenWhatsApp(lead)}
                            title="Contacter sur WhatsApp"
                            className="p-2 rounded bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] transition-colors cursor-pointer"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => {
                            if (confirm('Voulez-vous vraiment supprimer cette demande ?')) {
                              onDeleteLead(lead.id)
                            }
                          }}
                          title="Supprimer la demande"
                          className="p-2 rounded bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
