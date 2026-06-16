import Link from 'next/link'
import { HeartPulse, Calendar, Users, MessageSquareText, Shield, Sparkles, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Gestion de Cabinet Médical & Agenda Patients',
  description: 'Application sur mesure pour cabinets médicaux au Maroc. Planification des rendez-vous, dossier patient informatisé, rôles médecin/secrétaire et rappels WhatsApp.',
}

export default function CabinetMedicalPage() {
  const medicalFeatures = [
    {
      title: 'Calendrier Interactif & Visites',
      description: 'Un agenda partagé en temps réel pour planifier rapidement les consultations, urgences et contrôles périodiques.',
      icon: Calendar,
    },
    {
      title: 'Dossier Patient Numérique',
      description: 'Accédez à l’historique des visites, antécédents médicaux, notes cliniques et ordonnances archivées en toute sécurité.',
      icon: Users,
    },
    {
      title: 'Double Compte (Médecin & Secrétaire)',
      description: 'La secrétaire gère la salle d’attente et les paiements tandis que le médecin consulte le dossier clinique et saisit l’ordonnance.',
      icon: Shield,
    },
    {
      title: 'Rappels WhatsApp Automatisés',
      description: 'Réduisez le taux d’absentéisme en envoyant automatiquement des notifications de rappel la veille des rendez-vous par WhatsApp.',
      icon: MessageSquareText,
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow effects */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#002FA7]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D95D39]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#002FA7]/10 border border-[#002FA7]/20 text-[#002FA7] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-4 w-4 mr-1.5 animate-pulse" />
          <span>Optimisation de la salle d'attente</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
          Gestion de Cabinet Médical Moderne
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Simplifiez le secrétariat médical, offrez un parcours fluide à vos patients et gardez une traçabilité rigoureuse de vos dossiers cliniques au quotidien.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {medicalFeatures.map((feat, idx) => (
          <div key={idx} className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 space-y-4 bg-white">
            <div className="w-12 h-12 rounded-xl bg-[#002FA7]/10 text-[#002FA7] border border-[#002FA7]/20 flex items-center justify-center">
              <feat.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{feat.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>

      {/* Patient Record Demo */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 max-w-4xl mx-auto space-y-6 mb-20 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-2">
            <HeartPulse className="h-5 w-5 text-[#002FA7]" />
            <span className="text-sm font-bold text-slate-900 font-mono">dossier_patient_maquette</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Dossier Actif</span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center bg-[#002FA7]/5 p-4 rounded-xl border border-[#002FA7]/10">
            <div>
              <span className="text-xs text-slate-500 uppercase">Patient</span>
              <h4 className="text-base font-bold text-slate-900">Ahmed Mansouri (42 ans)</h4>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded font-mono font-semibold">Dossier No: 2026-042</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
              <span className="text-xs text-slate-500 uppercase">Dernier Diagnostic (14/05/2026)</span>
              <p className="text-xs text-slate-700">Hypertension artérielle légère. Recommandation d'un régime hyposodé et contrôle sous 3 semaines.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
              <span className="text-xs text-slate-500 uppercase">Traitement Prescrit</span>
              <p className="text-xs text-slate-700 font-mono">1. Amlodipine 5mg (1 comprimé/jour le matin)<br />2. Contrôle de tension hebdomadaire</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center bg-gradient-to-tr from-[#002FA7]/5 to-[#D95D39]/5 border-[#002FA7]/10 space-y-6 bg-white">
        <h2 className="text-2xl font-bold text-slate-900">Prêt à digitaliser votre cabinet médical ?</h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Rencontrons-nous (ou planifions un appel Zoom) pour analyser vos besoins d'agenda, vos fiches d'historique patient et évaluer l'option de notifications WhatsApp.
        </p>
        <div>
          <Link
            href="/contact?service=medical"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 transition-all duration-200"
          >
            Demander une étude pour mon cabinet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
