import Link from 'next/link'
import { Award, BookOpen, Factory, Code, Heart, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'À Propos | DigitalService',
  description: 'Découvrez l’expertise de DigitalService, cabinet de développement d’applications fondé par Mohamed Essahafi, ingénieur électromécanique, docteur et développeur full-stack.',
}

export default function AboutPage() {
  const experiences = [
    {
      title: 'Ingénierie Électromécanique & Industrie',
      description: 'Une solide formation et pratique de terrain en systèmes industriels, instrumentation de mesures physiques, électricité industrielle et gestion de parcs machines.',
      icon: Factory,
    },
    {
      title: 'Doctorat & Enseignement Technique',
      description: 'Docteur spécialisé en ingénierie énergétique et modélisation. Une rigueur scientifique appliquée à la structuration des données et à la résolution d’algorithmes complexes.',
      icon: BookOpen,
    },
    {
      title: 'Développement Logiciel Full-Stack',
      description: 'Expertise moderne avec Next.js, TypeScript, Node.js et Supabase/PostgreSQL. Capable de construire des dashboards performants et sécurisés connectés à vos bases.',
      icon: Code,
    },
  ]

  const workflowSteps = [
    {
      title: '1. Analyse & Immersion terrain',
      description: 'J’analyse vos problématiques réelles en discutant directement avec vos techniciens, secrétaires ou gérants. Je ne me contente pas de suivre un cahier des charges abstrait.',
    },
    {
      title: '2. Prototypage rapide',
      description: 'Je conçois rapidement une maquette visuelle et une base de données simplifiée pour valider l’expérience utilisateur et les flux opérationnels clés.',
    },
    {
      title: '3. Développement rigoureux',
      description: 'J’écris du code robuste, commenté et typé avec TypeScript, en intégrant des schémas de sécurité stricts (RLS) sur Supabase PostgreSQL.',
    },
    {
      title: '4. Tests & Déploiement',
      description: 'Validation de l’application en conditions de travail réelles, puis mise en production optimisée sur Vercel avec suivi post-déploiement.',
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow decorator */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section About */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="h-4 w-4 mr-1.5" />
            <span>Profil Unique</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient leading-tight">
            DigitalService
          </h1>
          
          <h2 className="text-base font-bold text-gray-300 font-mono">
            Fondé par Mohamed Essahafi — Ingénieur Électromécanique, Docteur & Concepteur Logiciel
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Ma double casquette d’ingénieur de terrain et de docteur en sciences physiques me permet d’avoir une compréhension immédiate de vos problématiques opérationnelles (qu’il s’agisse de maintenance d'usine, d'indexation énergétique ou de gestion logistique).
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            Je traduis vos processus métiers concrets en applications logicielles réactives, fluides et faciles d’utilisation pour vos équipes, tout en assurant une structure de données ultra-sécurisée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/10 transition-colors"
            >
              Me contacter pour un projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          {/* Visual Avatar Card mockup */}
          <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl" />
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                ME
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Mohamed Essahafi</h3>
                <span className="text-xs text-cyan-400 font-mono">Consultant Indépendant</span>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
                <span>Expertise Next.js & Supabase</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
                <span>Rigueur de modélisation académique</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
                <span>Compréhension des équipements physiques</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Details */}
      <div className="space-y-8 mb-20">
        <h2 className="text-2xl font-bold text-white text-center">Mes Piliers de Compétence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                <exp.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{exp.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Methodology */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white text-center">Ma Méthodologie d’Accompagnement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-5 border-white/5 space-y-3">
              <h3 className="font-bold text-white text-sm">{step.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
