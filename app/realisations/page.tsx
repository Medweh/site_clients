import Link from 'next/link'
import { CheckCircle2, FileDown, Eye, HelpCircle, ArrowRight, BookOpen, Factory, Calendar, GraduationCap, Laptop } from 'lucide-react'

export const metadata = {
  title: 'Mes Réalisations & Cas d’Usage Industriels',
  description: 'Explorez mes projets réels et prototypes d’ingénierie et de développement : Suivi Pédagogique BTS, GMAO Pro, Supervision Modbus Relais F650 OCP Benguerir.',
}

export default function RealisationsPage() {
  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient">
          Projets Réalisés & Études de Cas
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Découvrez des exemples concrets de solutions logicielles et industrielles robustes intégrant l'acquisition de données, le suivi de production, la maintenance et les portails de gestion métier.
        </p>
      </div>

      {/* CASE STUDY 1: SUIVI PEDAGOGIQUE */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-8 border-indigo-500/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider">
              <GraduationCap className="h-3.5 w-3.5 mr-1" />
              <span>Secteur : Éducation / Formation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Tableau de Bord de Suivi Pédagogique BTS
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Projet Réel Validé
            </span>
            <a
              href="/images/pedago_guide.pdf"
              download
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-semibold text-white bg-[#6366f1] hover:bg-[#5053e3] transition-colors"
            >
              <FileDown className="h-3.5 w-3.5 mr-1" /> Télécharger le Guide (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              Développement d'une application hybride (APK Android pour les formateurs et interface Web pour la direction) pour numériser le cahier de texte, le pointage des absences et le suivi individuel d'avancement des étudiants BTS.
            </p>
            <div className="bg-[#0d1746] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-white block">Modules & Fonctionnalités :</span>
              <ul className="space-y-1.5 text-gray-400">
                <li>• <strong>Cahier de progression :</strong> Remplissage pédagogique en temps réel.</li>
                <li>• <strong>Pointage rapide :</strong> Présent/Absent/Retard avec saisie simplifiée.</li>
                <li>• <strong>Génération d'emploi du temps :</strong> Calendrier individuel des formateurs.</li>
                <li>• <strong>KPIs formateur :</strong> Nombre de séances saisies, heures réalisées, absences.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Android APK', 'Next.js', 'PostgreSQL', 'Supabase Auth', 'PDF Export'].map((tag) => (
                <span key={tag} className="text-[10px] bg-[#192556] text-gray-400 px-2 py-1 rounded border border-white/5 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Gallery grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/pedago_emploi.png"
                  alt="Emploi individuel formateur"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Génération d'Emplois du temps</h4>
                <p className="text-[9px] text-gray-500">Vue grille hebdomadaire par matière, salle et filière.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/pedago_absences.png"
                  alt="Suivi absences étudiants"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Absences étudiants</h4>
                <p className="text-[9px] text-gray-500">Filtres par filière, groupe et créneau horaire.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/pedago_dashboard.png"
                  alt="Dashboard APK consultation"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Interface APK mobile</h4>
                <p className="text-[9px] text-gray-500">Portail allégé de synchronisation et de pointage formateurs.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/pedago_login.png"
                  alt="Page connexion APK consultation"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Écran de Connexion Sécurisé</h4>
                <p className="text-[9px] text-gray-500">Vérification et restriction d'accès selon la filière autorisée.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY 2: CALCULATEUR DE NOTES (NOTESSAV) */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-8 border-indigo-500/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider">
              <GraduationCap className="h-3.5 w-3.5 mr-1" />
              <span>Secteur : Éducation / Gestion Académique</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              NotesSav — Calculateur & Portail de Saisie des Notes Étudiants
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Projet Réel Validé
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              Conception d'une application web ergonomique dédiée aux formateurs pour centraliser la saisie des notes scolaires, automatiser le calcul des moyennes pondérées selon les coefficients de contrôle continu (Coeff SS), et sécuriser les saisies par un système de verrouillage.
            </p>
            <div className="bg-[#0d1746] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-white block">Atouts de la Solution :</span>
              <ul className="space-y-1.5 text-gray-400">
                <li>• <strong>Saisie Intuitive :</strong> Grille de saisie par matière avec calcul instantané de la moyenne de l'étudiant.</li>
                <li>• <strong>Identifiants Standards :</strong> Intégration transparente des codes Massar et support complet des noms en arabe.</li>
                <li>• <strong>Gestion des Attributions :</strong> Visualisation des matières assignées par formateur et par créneau (ex: S11.1, S11.3).</li>
                <li>• <strong>Sécurisation & Cadenas :</strong> Verrouillage des notes après validation finale pour empêcher les modifications accidentelles.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js', 'PostgreSQL', 'Supabase Database', 'Role-Based Auth', 'Arabic Unicode Support'].map((tag) => (
                <span key={tag} className="text-[10px] bg-[#192556] text-gray-400 px-2 py-1 rounded border border-white/5 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Gallery grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_login.png"
                  alt="Page d'accueil NotesSav"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Portail de Connexion</h4>
                <p className="text-[9px] text-gray-500">Accès sécurisé par profil avec option de récupération de compte.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_dashboard.png"
                  alt="Mon espace formateur"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Espace Formateur</h4>
                <p className="text-[9px] text-gray-500">Grille des matières assignées, coefficients et état de validation.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_table.png"
                  alt="Saisie des notes"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Saisie de Notes & Cadenas</h4>
                <p className="text-[9px] text-gray-500">Entrée rapide, codes Massar, noms arabes et verrouillage.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_admin_dashboard.png"
                  alt="Espace administration"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Console d'Administration</h4>
                <p className="text-[9px] text-gray-500">Statistiques en direct (formateurs, étudiants, notes saisies).</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_consolidation.png"
                  alt="Tableau de consolidation"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Tableau de Consolidation</h4>
                <p className="text-[9px] text-gray-500">Moyennes pondérées et progression globales des étudiants par matière.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_structure.png"
                  alt="Gestion des structures et coefficients"
                  className="max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Coefficients & Modules</h4>
                <p className="text-[9px] text-gray-500">Configuration de l'arborescence des unités et des sous-savoirs.</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border-white/5 p-2 space-y-2 group sm:col-span-3">
              <div className="aspect-[16/6] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
                <img
                  src="/images/notes_pv_pdf.png"
                  alt="Procès-verbal de délibérations"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-350"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-[11px]">Export Procès-Verbal (PV) de Délibérations</h4>
                <p className="text-[9px] text-gray-500">Génération automatique au format officiel bilingue pour signature jury et archivage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY 3: GMAO PRO */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-8 border-indigo-500/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider">
              <Factory className="h-3.5 w-3.5 mr-1" />
              <span>Secteur : Maintenance / Production</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              GMAO PRO — Gestion de Maintenance Pompe Centrifuge
            </h2>
          </div>
          
          <span className="text-[10px] bg-white/5 text-gray-400 border border-white/10 px-2.5 py-1 rounded-full flex items-center font-semibold">
            <HelpCircle className="h-3.5 w-3.5 mr-1" /> Exemple de Solution
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              Conception d'une application de GMAO légère et robuste centrée sur l'utilisateur terrain. Évite la lourdeur des ERP d'usines en se concentrant sur les ordres de travail (OT), le planning préventif périodique et le stock de sécurité des pièces de rechange.
            </p>
            <div className="bg-[#0d1746] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-white block">Indicateurs clés historisés :</span>
              <ul className="space-y-1.5 text-gray-400">
                <li>• calcul de l'efficacité d'exploitation (disponibilité 99.86%).</li>
                <li>• surveillance des coûts de pertes cumulés liés à l'indisponibilité.</li>
                <li>• planification visuelle et rapports d'interventions PDF.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['WPF / C#', 'Next.js', 'PostgreSQL', 'Python charts', 'PDF Engine'].map((tag) => (
                <span key={tag} className="text-[10px] bg-[#192556] text-gray-400 px-2 py-1 rounded border border-white/5 font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <Link href="/gmao" className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                Voir l'étude de cas GMAO complète <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src="/images/gmao_dashboard.png"
                  alt="GMAO PRO Dashboard"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <h4 className="font-bold text-white text-[11px] px-1">Tableau de Bord & KPIs</h4>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src="/images/gmao_chart_costs.png"
                  alt="Évolution des coûts de pertes"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <h4 className="font-bold text-white text-[11px] px-1">Analyse des Coûts de Pertes</h4>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY 4: MODBUS RELAIS F650 */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-8 border-indigo-500/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider">
              <Laptop className="h-3.5 w-3.5 mr-1" />
              <span>Secteur : Supervision Industrielle / Réseau</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Supervision Modbus TCP — Relais F650 (OCP Benguerir PSF)
            </h2>
          </div>
          
          <span className="text-[10px] bg-white/5 text-gray-400 border border-white/10 px-2.5 py-1 rounded-full flex items-center font-semibold">
            <HelpCircle className="h-3.5 w-3.5 mr-1" /> Exemple de Solution
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              Solution d'acquisition de mesures physiques en temps réel via protocole Modbus TCP avec les relais GE Multilin F650. L'application extrait les tensions, intensités et puissances du réseau industriel pour surveiller les harmoniques et la consommation globale.
            </p>
            <div className="bg-[#0d1746] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-white block">Points d'intégration :</span>
              <ul className="space-y-1.5 text-gray-400">
                <li>• Adressage direct holding registers par socket TCP.</li>
                <li>• Courbes d'analyses d'intensités et de cos phi.</li>
                <li>• Journalisation automatique des événements de surcharge.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Modbus TCP', 'Relais F650', 'Python Modbus', 'IHM locale', 'OCP Benguerir'].map((tag) => (
                <span key={tag} className="text-[10px] bg-[#192556] text-gray-400 px-2 py-1 rounded border border-white/5 font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <Link href="/solutions-industrielles" className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                Voir les détails de supervision Modbus <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src="/images/relais_f650_3.jpg"
                  alt="Relais F650 supervision"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <h4 className="font-bold text-white text-[11px] px-1">Tracé de Mesures (Tendances)</h4>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden p-2 space-y-2 group">
              <div className="aspect-[16/10] bg-[#111c4e] rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src="/images/relais_f650_4.png"
                  alt="Mappage Modbus Relais F650"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                />
              </div>
              <h4 className="font-bold text-white text-[11px] px-1">Registres Modbus Actifs</h4>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center bg-gradient-to-tr from-indigo-950/20 to-blue-950/10 border-indigo-500/20 space-y-6">
        <h2 className="text-2xl font-bold text-white">Prêt à lancer votre application sur-mesure ?</h2>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Que ce soit pour un portail de gestion administrative, une solution HMI de supervision ou une interface mobile d'acquisition, nous étudions votre projet pour y apporter une réponse simple, rapide et rentable.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition-all duration-200"
          >
            Lancer un prototype pilote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
