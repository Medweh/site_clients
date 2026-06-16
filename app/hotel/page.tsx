import Link from 'next/link'
import { Bed, CalendarRange, Users2, CreditCard, Sparkles, Star, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Logiciel de Gestion Hôtelière & Réservations',
  description: 'Logiciel sur mesure pour hôtels et riads au Maroc. Suivi des chambres, grille graphique des réservations, facturation simplifiée et rapports d’occupation.',
}

export default function HotelPage() {
  const hotelFeatures = [
    {
      title: 'Planning Visuel des Réservations',
      description: 'Une grille interactive pour visualiser d’un coup d’œil l’occupation de vos chambres par jour et par semaine.',
      icon: CalendarRange,
    },
    {
      title: 'Check-in & Check-out Simplifié',
      description: 'Enregistrez l’arrivée de vos clients, scannez leurs pièces d’identité et clôturez leur séjour en émettant la facture finale en 30 secondes.',
      icon: Bed,
    },
    {
      title: 'Fiches Clients & Historiques',
      description: 'Conservez une fiche complète de vos clients (préférences, allergies, historique de séjours) pour personnaliser leur accueil.',
      icon: Users2,
    },
    {
      title: 'Facturation & Extra-services',
      description: 'Gérez facilement la facturation de la chambre combinée aux extras (restauration, SPA, transferts aéroport).',
      icon: CreditCard,
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Star className="h-4 w-4 mr-1.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Gestion de séjours et riads haut de gamme</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
          Gestion Hôtelière Fluide & Moderne
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Optimisez le taux d’occupation de votre établissement, réduisez le temps administratif et offrez une expérience haut de gamme à vos clients avec un outil adapté.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {hotelFeatures.map((feat, idx) => (
          <div key={idx} className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <feat.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{feat.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>

      {/* Riad occupancy preview card */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border-white/5 space-y-6 mb-20">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <span className="text-sm font-bold text-white font-mono">calendrier_chambres_riad</span>
          <span className="text-[10px] text-gray-500 font-mono">Aujourd'hui: 16 Juin 2026</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#0e1626] border border-white/5">
            <div className="flex items-center space-x-3">
              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded font-semibold font-mono">Chambre 101 (Suite Atlas)</span>
              <span className="text-xs text-gray-400">Jean Dupont (France)</span>
            </div>
            <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded font-mono font-medium">Occupée (Check-out demain)</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#0e1626] border border-white/5">
            <div className="flex items-center space-x-3">
              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded font-semibold font-mono">Chambre 102 (Standard)</span>
              <span className="text-xs text-gray-400">-</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-medium">Disponible (Nettoyée)</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#0e1626] border border-white/5">
            <div className="flex items-center space-x-3">
              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded font-semibold font-mono">Chambre 201 (Suite Royale)</span>
              <span className="text-xs text-gray-400">Sarah Alami (Maroc)</span>
            </div>
            <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded font-mono font-medium">Occupée</span>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center bg-gradient-to-tr from-cyan-950/20 to-blue-950/10 border-cyan-500/20 space-y-6">
        <h2 className="text-2xl font-bold text-white">Prêt à simplifier vos réservations ?</h2>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Planifions un appel pour évaluer votre modèle de facturation, votre politique de check-in et les options de reporting dont vous avez besoin pour suivre la rentabilité de vos chambres.
        </p>
        <div>
          <Link
            href="/contact?service=hotel"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200"
          >
            Discuter de mon projet d'hôtel / riad
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
