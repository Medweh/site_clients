'use client'

import { usePathname } from 'next/navigation'
import { MessageSquareText } from 'lucide-react'

export default function WhatsappBubble() {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  if (isAdminPage) return null

  // Fetch number from environment, default to a generic Moroccan indicator
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212600000000'
  // Clean number to keep only digits
  const whatsappNumber = rawNumber.replace(/\D/g, '')

  const message = encodeURIComponent(
    'Bonjour Mohamed, je souhaite discuter d’un projet d’application / site web / solution industrielle.'
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-110 transition-all duration-300 group hover:-rotate-6"
      title="Discuter sur WhatsApp"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageSquareText className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      <span className="absolute right-16 bg-[#0B0F19] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
        Discuter sur WhatsApp
      </span>
    </a>
  )
}
