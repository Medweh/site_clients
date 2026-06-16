import Link from 'next/link'
import { ShieldCheck, Cpu, Code, CheckCircle2, ArrowRight, Lightbulb, Users, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'À Propos | DigitalService',
  description: 'Découvrez DigitalService, cabinet spécialisé dans la conception d’applications métiers, le développement de sites web sur mesure et l’intégration de solutions de supervision industrielle pour les PME au Maroc.',
}

export default function AboutPage() {
  const experiences = [
    {
      title: 'Ingénierie & Supervision Industrielle',
      description: 'Acquisition de données physiques, protocoles Modbus TCP/RTU, suivi énergétique et interfaçage avec vos automates et relais (type GE Multilin).',
      icon: Cpu,
    },
    {
      title: 'Développement d’Applications Métiers',
      description: 'Conception de plateformes SaaS sur mesure : GMAO, CRM, gestion de cabinets médicaux, réservation hôtelière et automatisation de processus.',
      icon: Code,
    },
    {
      title: 'Architecture & Rigueur Logicielle',
      description: 'Développement avec Next.js et TypeScript, hébergement edge sécurisé sur Vercel et bases de données SQL robustes sous Supabase (avec politiques RLS).',
      icon: ShieldCheck,
    },
  ]

  const workflowSteps = [
    {
      title: '1. Cadrage & Immersion Métier',
      description: 'Nous analysons vos flux réels sur le terrain en discutant directement avec vos collaborateurs pour cerner vos points de friction.',
      icon: Lightbulb,
    },
    {
      title: '2. Prototypage & Conception',
      description: 'Création rapide d’une maquette visuelle et d’une structure de base de données pour valider le parcours utilisateur.',
      icon: Users,
    },
    {
      title: '3. Développement & Sécurisation',
      description: 'Codage robuste, typé et sécurisé avec TypeScript, en intégrant des règles de restriction d’accès strictes aux bases de données.',
      icon: Code,
    },
    {
      title: '4. Déploiement & Suivi',
      description: 'Mise en production optimisée sur Vercel avec chargement ultra-rapide et suivi post-déploiement pour assurer la stabilité.',
      icon: BarChart3,
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow decorator */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#002FA7]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section About */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#002FA7]/10 border border-[#002FA7]/20 text-[#002FA7] text-xs font-semibold uppercase tracking-wider">
            <span>Cabinet d'Ingénierie Logicielle</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gradient leading-tight">
            DigitalService
          </h1>
          
          <h2 className="text-lg font-bold text-slate-700">
            Des solutions informatiques et industrielles sur mesure pour digitaliser vos processus
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            DigitalService combine une double expertise en ingénierie des systèmes physiques et en technologies logicielles modernes. Notre mission est de transformer les processus papier, les tableaux Excel saturés ou les données industrielles isolées en applications simples, connectées et hautement rentables pour votre entreprise.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Nous intervenons sur toute la chaîne de valeur : du capteur physique (via protocole Modbus) jusqu'au tableau de bord cloud interactif accessible sur mobile et PC, en passant par des logiciels métiers dédiés (GMAO, dossiers médicaux, réservations).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 shadow-lg shadow-[#002FA7]/15 transition-colors cursor-pointer"
            >
              Nous contacter pour un projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          {/* Visual Avatar Card mockup representing corporate identity */}
          <div className="glass-panel rounded-2xl p-6 space-y-6 relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#002FA7]/5 rounded-full blur-xl" />
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#002FA7] to-[#D95D39] flex items-center justify-center text-white font-bold text-2xl">
                DS
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">DigitalService</h3>
                <span className="text-xs text-[#002FA7] font-semibold font-mono">Solutions Digitales Premium</span>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#D95D39] shrink-0" />
                <span>Expertise Next.js & bases Supabase/PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#D95D39] shrink-0" />
                <span>Rigueur de modélisation de données complexes</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#D95D39] shrink-0" />
                <span>Supervision de protocoles et automates industriels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Details */}
      <div className="space-y-8 mb-20">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Nos Domaines de Compétence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 space-y-4 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#002FA7]/10 text-[#002FA7] border border-[#002FA7]/20 flex items-center justify-center">
                <exp.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">{exp.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Methodology */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Notre Méthodologie d’Accompagnement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-5 space-y-3 bg-white">
              <div className="w-8 h-8 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center mb-2">
                <step.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
