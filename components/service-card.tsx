'use client'

import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  benefits: string[]
  iconName: keyof typeof LucideIcons
  serviceType: string
  linkHref?: string
}

export default function ServiceCard({
  title,
  description,
  benefits,
  iconName,
  serviceType,
  linkHref,
}: ServiceCardProps) {
  // Dynamically resolve icon component
  const IconComponent = LucideIcons[iconName] as React.ComponentType<{ className?: string }>

  const queryParam = encodeURIComponent(serviceType)
  const targetHref = linkHref || `/contact?service=${queryParam}`

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Glow Effect */}
      <div className="absolute -right-10 -top-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />
      
      <div>
        {/* Icon & Title */}
        <div className="flex items-center space-x-4 mb-5">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/10 to-blue-600/15 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
            {IconComponent ? <IconComponent className="h-6 w-6" /> : <LucideIcons.HelpCircle className="h-6 w-6" />}
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

        {/* Benefits list */}
        <ul className="space-y-2.5 mb-8">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start text-xs text-gray-300">
              <Check className="h-4 w-4 text-cyan-500 mr-2 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-auto pt-2">
        <Link
          href={targetHref}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-200"
        >
          Demander cette solution
        </Link>
      </div>
    </div>
  )
}
