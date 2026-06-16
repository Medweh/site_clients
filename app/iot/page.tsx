import Link from 'next/link'
import { Cpu, Wifi, Activity, Sparkles, ArrowRight, Laptop, HelpCircle } from 'lucide-react'

export const metadata = {
  title: 'Ingénierie IoT & Sport Connecté',
  description: 'Solutions IoT sur mesure au Maroc. Acquisition de capteurs physiologiques, protocoles BLE/ANT+, algorithmes d’estimation de puissance et passerelles microcontrôleurs (ESP32).',
}

export default function IotPage() {
  const iotFeatures = [
    {
      title: 'Communication & Protocoles Sans Fil',
      description: 'Interfaçage direct avec vos capteurs corporels et sportifs via les protocoles standard BLE (Bluetooth Low Energy) et ANT+ pour récupérer la Fréquence Cardiaque, la Cadence et la Vitesse.',
      icon: Wifi,
    },
    {
      title: 'Algorithmes de Puissance Virtuelle',
      description: 'Estimation et calcul de puissance (Watts) en temps réel par corrélation de données (courbes de résistance vitesse/cadence). Évitez l’achat de capteurs physiques onéreux grâce à nos modèles d’estimation.',
      icon: Activity,
    },
    {
      title: 'Intégration Matérielle (Microcontrôleurs)',
      description: 'Conception de passerelles IoT physiques basées sur ESP32, STM32 ou Raspberry Pi durcis pour la collecte, le filtrage local et le transfert des données physiques vers vos serveurs.',
      icon: Cpu,
    },
    {
      title: 'Dashboard HMI & Export de Données',
      description: 'Conception de logiciels de bureau et applications web fluides pour visualiser l’effort, découper les séances en zones de puissance (Z1 à Z5) et exporter vos fichiers de session pour analyse.',
      icon: Laptop,
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
          <span>Interfaçage de capteurs & Intelligence logicielle</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
          Ingénierie IoT & Sport Connecté
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Je conçois des architectures matérielles et logicielles pour connecter des capteurs physiques, traiter les signaux en direct et créer des indicateurs d'aide à la décision.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {iotFeatures.map((feat, idx) => (
          <div key={idx} className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 space-y-4 bg-white">
            <div className="w-12 h-12 rounded-xl bg-[#002FA7]/10 text-[#002FA7] border border-[#002FA7]/20 flex items-center justify-center">
              <feat.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{feat.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>

      {/* Case Study Training Monitor */}
      <div className="space-y-12 mb-20 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cas Réel : Solution d'Entraînement Connectée "Training Monitor"
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Découvrez le prototype logiciel complet d'acquisition de données physiologiques et d'estimation de puissance pour Home Trainer (vélo d'appartement).
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-8 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 gap-4">
            <div className="space-y-1">
              <span className="text-[10px] bg-[#002FA7]/10 text-[#002FA7] px-2.5 py-1 rounded font-semibold uppercase tracking-wider">
                Prototype Logiciel & IoT
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Training Monitor — Logiciel d'entraînement et estimation de puissance (W)
              </h3>
            </div>
            <span className="text-[10px] bg-slate-50 text-slate-600 border border-slate-200/80 px-2.5 py-1 rounded-full flex items-center font-semibold">
              <HelpCircle className="h-3.5 w-3.5 mr-1 text-[#D95D39]" /> Alternative Économique aux Capteurs de Puissance Physiques
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Cette application résout une friction majeure pour les cyclistes : le coût élevé des capteurs de puissance physiques. En interfaçant des capteurs de vitesse, cadence et fréquence cardiaque de base, le logiciel utilise des modèles de puissance virtuelle pour estimer en temps réel l'effort fourni (Watts).
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2.5 text-xs">
                <span className="font-bold text-slate-900 block">Détails de l'intégration logicielle :</span>
                <ul className="space-y-1.5 text-slate-600">
                  <li>• **Appairage Bluetooth & ANT+** : Scanner sans fil et connexion instantanée de capteurs d'entraînement.</li>
                  <li>• **Estimation de puissance** : Formules calibrées sur la courbe de résistance physique du home trainer.</li>
                  <li>• **Calcul de charge (TSS/IF/Zones)** : Analyse de la fatigue accumulée et découpage en zones de puissance (Z1 à Z5) et Watts/kg.</li>
                  <li>• **Coaching & Amélioration de Performance** : Conseils personnalisés en temps réel (cadence optimale, zones d'effort) pour une progression physique sur-mesure.</li>
                  <li>• **Mode Simulation** : Console intégrée permettant de tester et valider le logiciel sans équipements physiques.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['BLE / ANT+', 'Estimation de Puissance', 'Sport Connecté', 'ESP32 / IoT', 'Python / GUI'].map((tag) => (
                  <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200/60 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group bg-slate-50 border border-slate-200/80">
                <div className="aspect-[21/9] bg-white rounded-lg overflow-hidden relative border border-slate-200/60">
                  <img
                    src="/images/home_trainer_setup.png"
                    alt="Configuration physique du Home Trainer connecté"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                  />
                </div>
                <h4 className="font-bold text-slate-800 text-[11px] px-1 font-mono">Installation Physique & Capteurs Connectés</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group bg-slate-50 border border-slate-200/80">
                  <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden relative border border-slate-200/60">
                    <img
                      src="/images/training_monitor_1.png"
                      alt="Training Monitor - État initial et appairage"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                    />
                  </div>
                  <h4 className="font-bold text-slate-800 text-[11px] px-1 font-mono">Connexion des Capteurs & Initialisation</h4>
                </div>

                <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group bg-slate-50 border border-slate-200/80">
                  <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden relative border border-slate-200/60">
                    <img
                      src="/images/training_monitor_2.png"
                      alt="Training Monitor - Session active et puissance estimée"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                    />
                  </div>
                  <h4 className="font-bold text-slate-800 text-[11px] px-1 font-mono">Séance Active & Analyse de Puissance</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center bg-gradient-to-tr from-[#002FA7]/5 to-[#D95D39]/5 border-[#002FA7]/10 space-y-6 bg-white">
        <h2 className="text-2xl font-bold text-slate-900">Vous avez un projet IoT ou de matériel connecté ?</h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Que ce soit pour interfacer des capteurs de santé, créer un boîtier électronique sur-mesure (ESP32) ou concevoir un logiciel de pilotage, nous étudions votre projet pour y apporter une solution sur-mesure fiable.
        </p>
        <div>
          <Link
            href="/contact?service=iot"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#002FA7] to-[#D95D39] hover:from-[#002FA7]/90 hover:to-[#D95D39]/90 transition-all duration-200"
          >
            Discuter de votre projet IoT
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
