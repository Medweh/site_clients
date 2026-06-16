import Link from 'next/link'
import { Settings, CheckSquare, Wrench, BarChart3, AlertTriangle, Smartphone, ShieldCheck, ArrowRight, FileDown } from 'lucide-react'

export const metadata = {
  title: 'Solution GMAO sur Mesure pour PME Industrielles',
  description: 'Logiciel GMAO personnalisé au Maroc. Suivi d’équipements, interventions correctives, planning préventif, stocks de rechange et KPIs MTBF/MTTR.',
}

export default function GMAOPage() {
  const gmaoFeatures = [
    {
      title: 'Fiches Équipements & Registres',
      description: 'Centralisez l’ensemble de vos machines, outils, pompes, et véhicules dans un registre numérique propre avec historique complet.',
      icon: Settings,
    },
    {
      title: 'Interventions Correctives',
      description: 'Déclarez une panne en 1 clic. Suivez sa prise en charge, attribuez-la à un technicien et qualifiez la nature du problème.',
      icon: Wrench,
    },
    {
      title: 'Planning Préventif automatique',
      description: 'Configurez vos cycles de maintenance périodiques (mensuels, semestriels) et laissez la GMAO générer les ordres de travail.',
      icon: CheckSquare,
    },
    {
      title: 'Pièces de Rechange & Stocks',
      description: 'Associez vos articles en stock à des équipements. Soyez alerté lorsque le stock minimum de sécurité est atteint.',
      icon: AlertTriangle,
    },
    {
      title: 'Indicateurs MTBF / MTTR',
      description: 'Calculez automatiquement le temps moyen entre pannes et le temps moyen de réparation pour cibler les machines critiques.',
      icon: BarChart3,
    },
    {
      title: 'Portail Technicien Mobile',
      description: 'Une interface Android allégée pour que vos techniciens puissent clore les interventions directement sur le terrain.',
      icon: Smartphone,
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glowing gradients */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4 mr-1.5" />
          <span>GMAO simplifiée pour PME et ateliers</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
          Une GMAO Intuitive et Sur Mesure
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Oubliez les logiciels de maintenance lourds et inadaptés. Je conçois des GMAO légères, réactives et alignées avec vos méthodes de travail sur le terrain.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {gmaoFeatures.map((feat, idx) => (
          <div key={idx} className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <feat.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">{feat.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>

      {/* GMAO PRO Case Study Showcase */}
      <div className="space-y-12 mb-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <span>Étude de Cas : GMAO PRO — Pompe Centrifuge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Exemple de Solution de Maintenance Opérationnelle
            </h2>
          </div>
          <a
            href="/images/gmao_report.pdf"
            download
            className="w-full md:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#6366f1] hover:bg-[#5053e3] transition-colors shrink-0"
          >
            <FileDown className="h-4 w-4 mr-2" />
            Télécharger le Rapport (PDF)
          </a>
        </div>

        <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
          Aperçu de l'application GMAO PRO développée pour la gestion de maintenance d'une pompe centrifuge (PUMP001). Elle permet de calculer en direct les KPIs de disponibilité et de générer des rapports PDF automatiques.
        </p>

        {/* First section: Dashboard & Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-4 space-y-4 group">
            <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
              <img
                src="/images/gmao_dashboard.png"
                alt="Tableau de Bord GMAO PRO"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-sm">Tableau de Bord & Indicateurs KPIs</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Suivi des informations de la pompe centrifuge (débit 150m³/h, HMT 45m). Calcul en direct de la disponibilité opérationnelle (99.86%), du MTBF (4580.5h) et du MTTR (6.5h).
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-4 space-y-4 group">
            <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
              <img
                src="/images/gmao_reports_menu.png"
                alt="Génération de Rapports PDF GMAO"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-sm">Module d'Export de Rapports PDF</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Interface simple d'exportation. Générez instantanément des rapports complets de maintenance, des analyses KPIs détaillées, l'état des stocks de pièces ou des ordres de travail (OT).
              </p>
            </div>
          </div>
        </div>

        {/* Second section: PDF Pages Preview */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight font-mono text-center md:text-left">Exemple de Rapport PDF Généré (Page 1 & 2)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-4 space-y-4 group">
              <div className="aspect-[3/4] bg-[#142260] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/gmao_pdf_page1.png"
                  alt="Rapport PDF Page 1"
                  className="max-h-full object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="px-2">
                <h5 className="font-semibold text-white text-xs">Page 1 : Fiche d'Équipement & KPIs</h5>
                <p className="text-[10px] text-gray-500 mt-0.5">Synthèse automatique des caractéristiques nominales de puissance/vitesse et validation des KPIs.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-4 space-y-4 group">
              <div className="aspect-[3/4] bg-[#142260] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/gmao_pdf_page2.png"
                  alt="Rapport PDF Page 2"
                  className="max-h-full object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="px-2">
                <h5 className="font-semibold text-white text-xs">Page 2 : Historique des Interventions</h5>
                <p className="text-[10px] text-gray-500 mt-0.5">Registre chronologique des interventions préventives et correctives avec durée et coûts de pièces associés.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third section: Graphs & Analyses */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight font-mono text-center md:text-left">Courbes Analytiques & Décisionnelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-4 space-y-4 group">
              <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src="/images/gmao_chart_costs.png"
                  alt="Courbe des Coûts de Pertes Cumulés"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white text-sm">Évolution des Coûts de Pertes Cumulés</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Graphique d'évaluation financière des arrêts de production. Permet d'analyser l'impact budgétaire sur l'année pour cibler les actions préventives les plus rentables.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-4 space-y-4 group">
              <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src="/images/gmao_chart_downtime.png"
                  alt="Temps d'arrêt mensuel"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white text-sm">Temps d'Arrêt Mensuel (heures)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Histogramme des heures d'indisponibilité. Clé pour identifier la saisonnalité des pannes et valider la réactivité des équipes techniques de maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center bg-gradient-to-tr from-indigo-950/20 to-blue-950/10 border-indigo-500/20 space-y-6">
        <h2 className="text-2xl font-bold text-white">Prêt à fiabiliser vos équipements industriels ?</h2>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Nous pouvons planifier une courte démonstration à partir d'un prototype GMAO de base pour estimer les modules nécessaires à votre activité (planning, stocks, code-barres, etc.).
        </p>
        <div>
          <Link
            href="/contact?service=gmao"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition-all duration-200"
          >
            Demander une démonstration GMAO
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
