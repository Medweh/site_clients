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
    { name: 'Gestion GMAO', href: '/gmao' },
  ]

  const solutions = [
    { name: 'Cabinet Médical', href: '/cabinet-medical' },
    { name: 'Gestion Hôtelière', href: '/hotel' },
    { name: 'Supervision Modbus', href: '/solutions-industrielles' },
    { name: 'Gestion Stocks & Maintenance', href: '/gmao' },
  ]

  const navLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact & Devis', href: '/contact' },
  ]

  return (
    <footer className="bg-[#02050e] border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center rounded bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 text-white font-bold">
                DS
              </div>
              <span className="font-bold text-white text-lg tracking-wide">
                DigitalService
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ingénieur électromécanique, docteur et développeur full-stack. Concepteur d'applications métiers, supervision industrielle et solutions de gestion sur-mesure.
            </p>
            <div className="flex flex-col space-y-2.5 pt-2 text-sm text-gray-400">
              <a href="mailto:mohamed.essahafi@um6p.ma" className="flex items-center space-x-2.5 hover:text-cyan-400 transition-colors">
                <Mail className="h-4.5 w-4.5 text-cyan-500" />
                <span>mohamed.essahafi@um6p.ma</span>
              </a>
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-cyan-500" />
                <span>Maroc</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Solutions Secteurs</h3>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Col */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Liens</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admin/login" className="inline-flex items-center space-x-1.5 text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Espace Admin</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {currentYear} DigitalService. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-cyan-400 cursor-default">Solutions Métiers Innovantes</span>
            <span>•</span>
            <span className="hover:text-cyan-400 cursor-default">Supervision & GMAO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
