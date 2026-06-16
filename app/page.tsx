'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Code,
  Laptop,
  Smartphone,
  Cpu,
  Database,
  TrendingUp,
  Clock,
  AlertOctagon,
  ArrowRight,
  MessageSquareText,
  Activity,
  User,
  Factory,
  ChevronRight,
  TrendingDown,
  Lock,
  Layers,
  HeartPulse,
  Coffee,
  Workflow
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'industries' | 'medical' | 'hotel' | 'pme'>('industries')

  // WhatsApp Link Config
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212679515074'
  const whatsappUrl = `https://wa.me/${rawNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Bonjour DigitalService, je souhaite discuter d’un projet d’application / site web / solution industrielle.'
  )}`

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-[800px] grid-bg opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full radial-glow animate-pulse-slow pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] rounded-full radial-glow-blue animate-pulse-slow pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#002FA7]/10 border border-[#002FA7]/20 text-[#002FA7] text-xs font-semibold tracking-wider uppercase">
            <span>Ingénierie Electromécanique & Solutions Logicielles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient">
            Applications métiers, sites web et solutions industrielles sur mesure
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Je développe des applications web, Android et PC pour digitaliser vos processus, gérer vos données et connecter vos équipements industriels.
          </p>

          <p className="text-sm text-[#D95D39] font-semibold tracking-wide">
            "Je transforme vos problèmes métiers en applications simples, professionnelles et rentables."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#002FA7]/15 hover:shadow-[#002FA7]/25 cursor-pointer"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-[#25D366] bg-[#25D366]/5 border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all duration-200 cursor-pointer"
            >
              <MessageSquareText className="mr-2 h-5 w-5" />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        {/* Floating Mockup Preview Card */}
        <div className="mt-16 md:mt-20 glass-panel rounded-2xl p-2.5 max-w-5xl mx-auto shadow-2xl relative">
          <div className="bg-white rounded-xl overflow-hidden aspect-[16/9] flex flex-col border border-slate-200/60 relative">
            {/* Header bar */}
            <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] text-slate-500 font-mono tracking-wider">Supervision & Dashboard Métier v2.1</div>
              <div className="w-10" />
            </div>
            {/* Mock Dashboard Area */}
            <div className="flex-1 p-4 md:p-6 grid grid-cols-3 gap-4 font-sans text-xs">
              <div className="col-span-3 md:col-span-1 bg-slate-50/50 rounded-lg border border-slate-200/80 p-4 space-y-4">
                <div className="text-slate-500 uppercase text-[10px] tracking-wider font-semibold">Statut Équipements</div>
                <div className="flex justify-between items-center bg-[#002FA7]/5 p-2.5 rounded border border-[#002FA7]/20 text-[#002FA7]">
                  <span className="font-medium">Pompe Principale</span>
                  <span className="text-[10px] bg-[#002FA7]/10 px-2 py-0.5 rounded font-mono">ON / 1450 RPM</span>
                </div>
                <div className="flex justify-between items-center bg-[#D95D39]/5 p-2.5 rounded border border-[#D95D39]/20 text-[#D95D39]">
                  <span className="font-medium">Vanne D'alimentation</span>
                  <span className="text-[10px] bg-[#D95D39]/10 px-2 py-0.5 rounded font-mono">OUVERTE (92%)</span>
                </div>
                <div className="flex justify-between items-center bg-slate-100 p-2.5 rounded border border-slate-200 text-slate-500">
                  <span className="font-medium">Compresseur Secondaire</span>
                  <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">VEILLE</span>
                </div>
              </div>
              <div className="col-span-3 md:col-span-2 bg-slate-50/50 rounded-lg border border-slate-200/80 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 uppercase text-[10px] tracking-wider font-semibold">Indicateurs de Performance (KPI)</span>
                  <span className="text-[#D95D39] text-[10px] bg-[#D95D39]/10 px-2 py-0.5 rounded font-mono flex items-center font-semibold">
                    <TrendingUp className="h-3 w-3 mr-1" /> OEE: 94.2%
                  </span>
                </div>
                {/* Visual Fake chart */}
                <div className="h-28 md:h-36 flex items-end space-x-1.5 md:space-x-3 pt-2">
                  <div className="w-full bg-[#002FA7]/10 hover:bg-[#002FA7]/20 transition-colors h-[40%] rounded-t" />
                  <div className="w-full bg-[#002FA7]/10 hover:bg-[#002FA7]/20 transition-colors h-[60%] rounded-t" />
                  <div className="w-full bg-[#002FA7]/10 hover:bg-[#002FA7]/20 transition-colors h-[50%] rounded-t" />
                  <div className="w-full bg-[#002FA7]/20 hover:bg-[#002FA7]/30 transition-colors h-[80%] rounded-t" />
                  <div className="w-full bg-gradient-to-t from-[#002FA7] to-[#D95D39] h-[95%] rounded-t relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white bg-[#002FA7] px-1 py-0.5 rounded border border-[#002FA7]/30">Max</span>
                  </div>
                  <div className="w-full bg-[#002FA7]/10 hover:bg-[#002FA7]/20 transition-colors h-[75%] rounded-t" />
                  <div className="w-full bg-[#002FA7]/10 hover:bg-[#002FA7]/20 transition-colors h-[85%] rounded-t" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-3">
                  <span>08:00</span>
                  <span>10:00</span>
                  <span>12:00</span>
                  <span>14:00</span>
                  <span>16:00 (Actuel)</span>
                  <span>18:00</span>
                  <span>20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEMS SECTION */}
      <section className="py-20 border-t border-slate-200/50 bg-[#F5F0E6]/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frustré par les limites des outils génériques ?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Excel montre ses limites, le papier se perd, les données sont dispersées et vous perdez un temps précieux chaque jour.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="bg-white border border-rose-500/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex items-center space-x-3 text-rose-600">
                <TrendingDown className="h-6 w-6" />
                <h3 className="text-lg font-bold text-slate-900">L'approche classique et inefficace</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-sm text-slate-600">
                  <AlertOctagon className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                  <span><strong>Fichiers Excel saturés :</strong> Formules cassées, lenteurs, erreurs de saisie et risques de pertes de données.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <AlertOctagon className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                  <span><strong>Absence de reporting :</strong> Impossible d'avoir une vision en temps réel, rapports générés manuellement.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <AlertOctagon className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                  <span><strong>Données déconnectées :</strong> Vos équipements industriels ou vos équipes terrain travaillent en silos.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <AlertOctagon className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                  <span><strong>Perte de temps admin :</strong> Double saisie, recherche de documents papier, gestion manuelle de plannings.</span>
                </li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="bg-white border border-[#002FA7]/10 bg-gradient-to-tr from-[#002FA7]/5 to-[#D95D39]/5 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex items-center space-x-3 text-[#002FA7]">
                <TrendingUp className="h-6 w-6" />
                <h3 className="text-lg font-bold text-slate-900">La solution applicative sur mesure</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-sm text-slate-700">
                  <Code className="h-5 w-5 text-[#002FA7] mr-3 shrink-0 mt-0.5" />
                  <span><strong>Interface Centralisée :</strong> Accès sécurisé PC, web et mobile. Une seule source de vérité pour vos données.</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <Cpu className="h-5 w-5 text-[#002FA7] mr-3 shrink-0 mt-0.5" />
                  <span><strong>Reporting & Supervision :</strong> Tableaux de bord automatiques avec indicateurs clés (MTBF, chiffre d'affaires, taux de remplissage).</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <Layers className="h-5 w-5 text-[#D95D39] mr-3 shrink-0 mt-0.5" />
                  <span><strong>Automatisation des flux :</strong> Rappels automatiques, synchronisation des bases de données et contrôle des machines.</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <Lock className="h-5 w-5 text-[#002FA7] mr-3 shrink-0 mt-0.5" />
                  <span><strong>Autonomie & Robustesse :</strong> Base de données Postgres sécurisée sur Supabase et hébergement robuste sur Vercel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Mes Domaines d'Intervention</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Une double expertise unique en développement informatique moderne et ingénierie industrielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Applications Web Métiers</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Logiciels cloud en temps réel pour gérer vos activités, CRM, GMAO, ou systèmes de réservation d'hôtels.
            </p>
            <Link href="/services" className="inline-flex items-center text-xs font-semibold text-[#002FA7] hover:text-[#D95D39]">
              Voir l'offre <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20">
              <Laptop className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Applications PC / Bureau</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Logiciels Windows robustes fonctionnant en local pour l'acquisition de données et le pilotage d'équipements.
            </p>
            <Link href="/services" className="inline-flex items-center text-xs font-semibold text-[#002FA7] hover:text-[#D95D39]">
              Voir l'offre <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Applications Mobiles</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Solutions Android connectées pour les techniciens de maintenance, le suivi logistique ou le personnel de terrain.
            </p>
            <Link href="/services" className="inline-flex items-center text-xs font-semibold text-[#002FA7] hover:text-[#D95D39]">
              Voir l'offre <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* Service 4 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Supervision Industrielle</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Interfaçage capteurs, protocoles Modbus TCP, suivi énergétique et tableaux de bord de supervision locale.
            </p>
            <Link href="/solutions-industrielles" className="inline-flex items-center text-xs font-semibold text-[#002FA7] hover:text-[#D95D39]">
              Voir l'offre <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTOR SOLUTIONS TABS */}
      <section className="py-20 bg-[#F5F0E6]/30 border-t border-b border-slate-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Des Solutions Verticales Dédiées</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Des réponses logicielles précises à des exigences métiers spécifiques.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto bg-[#F5F0E6]/80 p-1.5 rounded-xl border border-slate-200/80">
            {[
              { id: 'industries', label: 'Industrie & Énergie', icon: Factory },
              { id: 'medical', label: 'Cabinet Médical', icon: HeartPulse },
              { id: 'hotel', label: 'Hôtellerie', icon: Coffee },
              { id: 'pme', label: 'PME & Gestion', icon: Layers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  'flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-[#002FA7] text-white shadow-lg shadow-[#002FA7]/15'
                    : 'text-slate-600 hover:text-[#002FA7] hover:bg-[#002FA7]/5'
                )}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'industries' && (
              <div className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Supervision Locale & Automatisme</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Connectez vos automates, compteurs d'énergie et relais Modbus. Centralisez les alertes critiques de pompes, moteurs et transformateurs sur un écran de contrôle unique.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">• Acquisition en temps réel via Modbus TCP</li>
                    <li className="flex items-center">• Base de données locale pour historique et reporting</li>
                    <li className="flex items-center">• Alertes automatiques (Email/SMS/WhatsApp)</li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/solutions-industrielles"
                      className="inline-flex items-center text-xs font-bold text-[#002FA7] hover:text-[#D95D39]"
                    >
                      En savoir plus sur les solutions industrielles <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 space-y-4">
                  <div className="text-xs text-slate-500 font-mono flex justify-between items-center">
                    <span>Modbus TCP Logger</span>
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-semibold">ACTIVE</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#002FA7]/5 p-2.5 rounded text-[11px] font-mono text-[#002FA7] flex justify-between border border-[#002FA7]/10">
                      <span>IP: 192.168.1.50:502</span>
                      <span className="font-semibold">345.6 kWh</span>
                    </div>
                    <div className="bg-[#002FA7]/5 p-2.5 rounded text-[11px] font-mono text-[#002FA7] flex justify-between border border-[#002FA7]/10">
                      <span>IP: 192.168.1.51:502</span>
                      <span className="font-semibold">64.2 °C</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'medical' && (
              <div className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Gestion de Cabinet Médical</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Permettez à votre secrétaire médicale de gérer efficacement la salle d'attente, l'historique des dossiers patients et l'agenda des visites dans une interface simple et réactive.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">• Planification d'agendas complexes</li>
                    <li className="flex items-center">• Dossier patient numérique complet</li>
                    <li className="flex items-center">• Rappels de rendez-vous configurables</li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/cabinet-medical"
                      className="inline-flex items-center text-xs font-bold text-[#002FA7] hover:text-[#D95D39]"
                    >
                      Découvrir la solution cabinet médical <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 space-y-4">
                  <div className="text-xs text-slate-500 font-mono">Prochains Rendez-vous</div>
                  <div className="space-y-2">
                    <div className="bg-[#002FA7]/5 p-2.5 rounded text-[11px] flex justify-between items-center text-slate-700 border border-[#002FA7]/10">
                      <div>
                        <span className="font-bold block text-slate-900">Fatima Zahra</span>
                        <span className="text-[10px] text-slate-500">Consultation Générale</span>
                      </div>
                      <span className="text-[10px] bg-[#002FA7]/10 text-[#002FA7] px-2 py-0.5 rounded font-mono font-semibold">09:30</span>
                    </div>
                    <div className="bg-[#002FA7]/5 p-2.5 rounded text-[11px] flex justify-between items-center text-slate-700 border border-[#002FA7]/10">
                      <div>
                        <span className="font-bold block text-slate-900">Rachid Alami</span>
                        <span className="text-[10px] text-slate-500">Contrôle</span>
                      </div>
                      <span className="text-[10px] bg-[#002FA7]/10 text-[#002FA7] px-2 py-0.5 rounded font-mono font-semibold">10:15</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hotel' && (
              <div className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Gestion de Réservation & Chambres</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Automatisez le check-in, le check-out, le calendrier des disponibilités et la facturation simple pour les hôtels de taille moyenne ou maisons d'hôtes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">• Grille des disponibilités interactive</li>
                    <li className="flex items-center">• Gestion des clients et factures PDF</li>
                    <li className="flex items-center">• Statistiques de taux d'occupation mensuels</li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/hotel"
                      className="inline-flex items-center text-xs font-bold text-[#002FA7] hover:text-[#D95D39]"
                    >
                      Découvrir la solution hôtelière <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 space-y-3">
                  <div className="text-xs text-slate-500 font-mono">Chambres Libres / Totales</div>
                  <div className="flex gap-2.5">
                    <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                      <span className="block text-2xl font-bold text-emerald-700 font-mono">14</span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider">Libres</span>
                    </div>
                    <div className="flex-1 bg-[#002FA7]/5 border border-[#002FA7]/10 rounded-lg p-3 text-center">
                      <span className="block text-2xl font-bold text-[#002FA7] font-mono">28</span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider">Totales</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pme' && (
              <div className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">GMAO, Gestion Stocks & Production</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Optimisez la planification préventive, le suivi des correctifs, la gestion des stocks de pièces de rechange et vos indicateurs MTBF/MTTR pour vos équipements industriels.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">• Ordres de travail électroniques</li>
                    <li className="flex items-center">• Alertes sur pièces critiques en rupture</li>
                    <li className="flex items-center">• Suivi analytique de la maintenance</li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/gmao"
                      className="inline-flex items-center text-xs font-bold text-[#002FA7] hover:text-[#D95D39]"
                    >
                      Découvrir la solution GMAO <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 space-y-3">
                  <div className="text-xs text-slate-500 font-mono">Indicateurs de Maintenance</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#002FA7]/5 border border-[#002FA7]/10 p-2.5 rounded text-center">
                      <span className="block font-bold text-[#002FA7] font-mono">148h</span>
                      <span className="text-[9px] text-slate-500 uppercase">MTBF</span>
                    </div>
                    <div className="bg-[#D95D39]/5 border border-[#D95D39]/10 p-2.5 rounded text-center">
                      <span className="block font-bold text-[#D95D39] font-mono">2.4h</span>
                      <span className="text-[9px] text-slate-500 uppercase">MTTR</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW METHOD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Méthodologie de Travail</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Une approche structurée de bout en bout pour garantir la rentabilité et le succès de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#002FA7]/5 via-[#002FA7]/20 to-[#002FA7]/5 -z-10" />

          {/* Step 1 */}
          <div className="glass-panel rounded-2xl p-6 text-center space-y-4 relative bg-white">
            <div className="w-12 h-12 rounded-full bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20 mx-auto font-mono font-bold text-lg">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Cadrage & Analyse</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Étude approfondie de vos processus métiers actuels, de vos problématiques de données et de vos objectifs business.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel rounded-2xl p-6 text-center space-y-4 relative bg-white">
            <div className="w-12 h-12 rounded-full bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20 mx-auto font-mono font-bold text-lg">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Prototypage & Conception</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Création d'une maquette fonctionnelle rapide pour valider l'expérience utilisateur (UI/UX) et les flux opérationnels clés.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-panel rounded-2xl p-6 text-center space-y-4 relative bg-white">
            <div className="w-12 h-12 rounded-full bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center border border-[#002FA7]/20 mx-auto font-mono font-bold text-lg">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Développement & Tests</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Développement itératif avec TypeScript, Tailwind CSS, et intégration sécurisée Supabase. Tests rigoureux en environnement réel.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D95D39]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient">
          Prêt à digitaliser votre activité ?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Planifions ensemble une consultation ou discutons de votre cahier des charges pour concevoir l'application qui vous fera gagner du temps et de l'argent.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 transition-all duration-200"
          >
            Obtenir une estimation de budget
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-[#25D366] bg-[#25D366]/5 border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all duration-200"
          >
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
