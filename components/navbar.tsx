'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2, Cpu, Activity, User, Phone, CheckSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Avoid showing navbar on login or dashboard page
  const isAdminPage = pathname?.startsWith('/admin')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isAdminPage) return null

  const navigation = [
    { name: 'Services', href: '/services', icon: Code2 },
    { name: 'Solutions Industrielles', href: '/solutions-industrielles', icon: Cpu },
    { name: 'Maintenance 4.0 & GMAO', href: '/gmao', icon: CheckSquare },
    { name: 'IoT', href: '/iot', icon: Cpu },
    { name: 'Cabinet Médical', href: '/cabinet-medical', icon: Activity },
    { name: 'Hôtel', href: '/hotel', icon: User },
    { name: 'Réalisations', href: '/realisations', icon: Code2 },
    { name: 'À propos', href: '/about', icon: User },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled
          ? 'bg-[#060b24]/85 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              DS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-tight tracking-wide group-hover:text-indigo-400 transition-colors duration-200">
                DigitalService
              </span>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                Ingénierie & Solutions Digitales
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative',
                    isActive
                      ? 'text-cyan-400 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[73px] bottom-0 z-40 bg-[#060b24] border-t border-white/5 px-4 pt-4 pb-6 transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="space-y-1 py-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center space-x-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200',
                  isActive
                    ? 'text-cyan-400 bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                <item.icon className="h-5 w-5 text-gray-400" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
        <div className="mt-6 px-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center px-5 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  )
}
