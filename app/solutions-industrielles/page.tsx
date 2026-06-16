import Link from 'next/link'
import { Cpu, Terminal, Network, ShieldCheck, Zap, AlertTriangle, ArrowRight, Activity, Database } from 'lucide-react'

export const metadata = {
  title: 'Supervision & Solutions Industrielles sur Mesure',
  description: 'Ingénierie de supervision industrielle au Maroc. Interfaçage Modbus TCP, acquisition capteurs, dashboards de contrôle locaux et alertes automatiques.',
}

export default function SolutionsIndustriellesPage() {
  const technicalPillars = [
    {
      title: 'Communication & Protocoles',
      description: 'Connexion directe avec vos automates programmables (Siemens, Schneider, Omron), compteurs énergétiques et modules de relais IP.',
      points: [
        'Interfaçage Modbus TCP / RTU natif',
        'Acquisition de données capteurs 4-20mA / 0-10V via convertisseurs IP',
        'Intégration d’API industrielles',
      ],
      icon: Network,
    },
    {
      title: 'Dashboard de Supervision Locale',
      description: 'Développement d’écrans de contrôle locaux (IHM sur PC industriel) fluides et modernes, évitant les licences SCADA hors de prix.',
      points: [
        'Affichage des mesures physiques en temps réel (débits, températures, pressions)',
        'Graphiques de tendances historiques pour analyse comportementale',
        'Contrôle à distance d’actionneurs (vannes, moteurs, pompes) sécurisé',
      ],
      icon: Cpu,
    },
    {
      title: 'Gestion des Alertes & Notifications',
      description: 'Surveillance continue des seuils de tolérance et envoi instantané de notifications en cas d’anomalie machine ou process.',
      points: [
        'Déclenchement d’alarmes sonores ou lumineuses locales',
        'Envoi instantané d’alertes par SMS, Email ou WhatsApp',
        'Log complet des évènements pour audit ultérieur',
      ],
      icon: AlertTriangle,
    },
    {
      title: 'Efficacité Énergétique',
      description: 'Suivi rigoureux des indicateurs de consommation d’eau, électricité et carburant pour identifier les pertes et optimiser les coûts.',
      points: [
        'Indexation de compteurs d’impulsion ou compteurs intelligents Modbus',
        'Calcul automatique de l’Intensité Énergétique de production',
        'Exportation de rapports d’audit énergétique périodiques',
      ],
      icon: Zap,
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow effects */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4 mr-1.5" />
          <span>Double expertise : Électromécanique & Software</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
          Supervision Industrielle & Acquisition de Données
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Ingénieur électromécanique et docteur, je conçois des applications robustes pour connecter vos équipements physiques, historiser vos données terrain et piloter vos processus.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {technicalPillars.map((pillar, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <pillar.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{pillar.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
            <ul className="space-y-2 pt-2">
              {pillar.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start text-xs text-gray-300 font-medium">
                  <span className="text-cyan-500 mr-2 font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Code / Architecture Panel Demo */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border-white/5 space-y-6 mb-20">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center space-x-2.5">
            <Terminal className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-white font-mono">architecture_modbus_reader.py</span>
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Exemple D'acquisition</span>
        </div>
        
        <p className="text-xs text-gray-400 leading-relaxed">
          Pour garantir la robustesse, j'écris des scripts d'acquisition optimisés s'exécutant sur des passerelles industrielles (Raspberry Pi durci, PC industriel) qui lisent les registres d'automates et les envoient en local ou sur votre base cloud.
        </p>

        <pre className="bg-[#050912] rounded-lg p-4 font-mono text-xs text-cyan-400/90 overflow-x-auto border border-white/5 whitespace-pre">
{`import pyModbusTCP.client as modbus
import time, requests

# Connexion à l'automate Siemens sur site
plc = modbus.ModbusClient(host="192.168.1.50", port=502, auto_open=True)

def read_sensors():
    regs = plc.read_holding_registers(100, 4) # Lit température, débit, pression
    if regs:
        temp = regs[0] / 10.0 # Conversion 1/10°C
        debit = regs[1] * 0.05 # Facteur échelle m3/h
        print(f"Temp: {temp}°C | Débit: {debit} m3/h")
        payload = {"temp": temp, "flow": debit}
        requests.post("http://localhost:3000/api/industrial-log", json=payload)`}
        </pre>
      </div>

      {/* Real Case Study: Relais F650 */}
      <div className="space-y-8 mb-20 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <span>Cas Réel - Poste Électrique PSF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Supervision & Acquisition Relais F650
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Visualisation de l'application de diagnostic développée pour la lecture des registres de mesures (courants, tensions, puissances active/réactive) via Modbus TCP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-xl overflow-hidden border-white/5 space-y-3 p-3 group">
            <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
              <img
                src="/images/relais_f650_3.jpg"
                alt="Supervision Courbes Relais F650"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
              />
            </div>
            <div className="px-2 pb-1">
              <h4 className="font-bold text-white text-sm">Visualisation Graphique (Tendances)</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">Tracé en temps réel des courbes de courant (Ia, Ib, Ic) et tensions primaires (Va, Vb, Vc).</p>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden border-white/5 space-y-3 p-3 group">
            <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
              <img
                src="/images/industrial_5ha_layout_map.png"
                alt="Plan 5ha - Postes Électriques PSF"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
              />
            </div>
            <div className="px-2 pb-1">
              <h4 className="font-bold text-white text-sm">Plan de Zone — 5 Hectares (Postes PSF)</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">Cartographie schématique locale avec l'implantation des postes de distribution électrique PSF et des transformateurs.</p>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden border-white/5 space-y-3 p-3 group">
            <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
              <img
                src="/images/relais_f650_1.jpg"
                alt="Lecture Paramètres Relais F650"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
              />
            </div>
            <div className="px-2 pb-1">
              <h4 className="font-bold text-white text-sm">Menu Diagnostics & Connexions</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">Configuration des paramètres de connexion (IP Relais, Port, Unit ID, Timeout) pour acquisition.</p>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden border-white/5 space-y-3 p-3 group">
            <div className="aspect-[16/9] bg-[#0d1746] rounded-lg overflow-hidden relative border border-white/5">
              <img
                src="/images/relais_f650_2.jpg"
                alt="Suivi Paramètres en temps réel"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
              />
            </div>
            <div className="px-2 pb-1">
              <h4 className="font-bold text-white text-sm">Supervision Globale & Puissances</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">Calcul et surveillance en direct de la tension auxiliaire, des harmoniques et du facteur de puissance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center bg-gradient-to-tr from-indigo-950/20 to-blue-950/10 border-indigo-500/20 space-y-6">
        <h2 className="text-2xl font-bold text-white">Besoin d'interfacer vos machines ou de suivre vos consommations ?</h2>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Discutons de vos protocoles de communication, du nombre de points d'acquisition et de vos besoins d'écrans de contrôle locaux pour concevoir une architecture fiable et pérenne.
        </p>
        <div>
          <Link
            href="/contact?service=supervision"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition-all duration-200"
          >
            Demander une étude de faisabilité
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
