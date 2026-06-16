'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  if (isAdminPage) return null

  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Applications Web', href: '/services' },
    { name: 'Applications Bureau PC', href: '/services' },
    { name: 'Applications Android', href: '/services' },
    { name: 'Supervision Industrielle', href: '/solutions-industrielles' },
    { name: 'Maintenance 4.0 & GMAO', href: '/gmao' },
    { name: 'IoT & Objets Connectés', href: '/iot' },
  ]

  const solutions = [
    { name: 'Cabinet Médical', href: '/cabinet-medical' },
    { name: 'Gestion Hôtelière', href: '/hotel' },
    { name: 'Supervision Modbus', href: '/solutions-industrielles' },
    { name: 'IoT Sport / Santé', href: '/iot' },
    { name: 'Gestion Stocks & Maintenance', href: '/gmao' },
  ]

  const navLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact & Devis', href: '/contact' },
  ]

  return (
    <footer className="bg-[#F5F0E6]/60 border-t border-slate-200/80 pt-16 pb-8 mt-auto backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center rounded bg-gradient-to-tr from-[#002FA7] to-[#D95D39] text-white font-bold">
                DS
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-wide">
                DigitalService
              </span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ingénieur électromécanique, docteur et développeur full-stack. Concepteur d'applications métiers, supervision industrielle et solutions de gestion sur-mesure.
            </p>
            <div className="flex flex-col space-y-2.5 pt-2 text-sm text-slate-600">
              <a href="mailto:med.essahafi@gmail.com" className="flex items-center space-x-2.5 hover:text-[#002FA7] transition-colors">
                <Mail className="h-4.5 w-4.5 text-[#002FA7]" />
                <span>med.essahafi@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#D95D39]" />
                <span>Maroc</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-[#002FA7] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-5">Solutions Secteurs</h3>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-[#002FA7] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Col */}
          <div>
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-5">Liens</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-[#002FA7] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admin/login" className="inline-flex items-center space-x-1.5 text-sm text-slate-500 hover:text-[#002FA7] transition-colors">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Espace Admin</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/80 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} DigitalService. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-[#002FA7] cursor-default">Solutions Métiers Innovantes</span>
            <span>•</span>
            <span className="hover:text-[#002FA7] cursor-default">Supervision & GMAO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
