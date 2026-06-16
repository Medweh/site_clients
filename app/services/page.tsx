import ServiceCard from '@/components/service-card'
import * as LucideIcons from 'lucide-react'

export const metadata = {
  title: 'Services & Solutions Digitales',
  description: 'Découvrez mes services de développement d’applications web, Android, PC et solutions industrielles sur-mesure pour PME, industries et professionnels de la santé.',
}

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'Application Web Métier',
      description: 'Développement d’applications web SaaS accessibles par navigateur pour centraliser vos processus, gérer vos clients et stocker vos bases de données en toute sécurité.',
      benefits: [
        'Accès universel sécurisé (PC, tablette, mobile)',
        'Synchronisation en temps réel multi-utilisateurs',
        'Base de données robuste hébergée sur Supabase',
        'Reporting analytique et exports Excel/PDF faciles'
      ],
      iconName: 'Code' as const,
      serviceType: 'web-app',
    },
    {
      title: 'Application Mobile Android',
      description: 'Développement d’applications mobiles Android natives ou hybrides pour les équipes sur le terrain, la maintenance ou la logistique.',
      benefits: [
        'Optimisation pour smartphones et tablettes',
        'Mode hors-ligne avec synchronisation ultérieure',
        'Accès aux fonctionnalités physiques (Appareil photo, GPS)',
        'Connexion directe aux API de vos outils de gestion'
      ],
      iconName: 'Smartphone' as const,
      serviceType: 'android-app',
    },
    {
      title: 'Application PC / Bureau',
      description: 'Logiciels locaux performants pour les tâches intensives, l’acquisition de données locales ou la communication directe avec des équipements série ou réseau.',
      benefits: [
        'Exécution rapide en local sous Windows',
        'Accès direct au matériel et ports de communication',
        'Aucune dépendance permanente à Internet',
        'Fichiers de données locaux ou synchronisation cloud'
      ],
      iconName: 'Laptop' as const,
      serviceType: 'desktop-app',
    },
    {
      title: 'Site Web Professionnel',
      description: 'Création de sites internet vitrines premium et optimisés pour le référencement naturel (SEO) afin d’attirer des clients qualifiés.',
      benefits: [
        'Design ultra premium orienté conversion client',
        'Performance ultra-rapide (technologie Next.js)',
        'Optimisation complète pour les moteurs de recherche',
        'Intégration d’outils marketing et formulaires dynamiques'
      ],
      iconName: 'Globe' as const,
      serviceType: 'website',
    },
    {
      title: 'Mini-GMAO Personnalisée',
      description: 'Logiciel de Gestion de Maintenance Assistée par Ordinateur calibré sur vos besoins précis, sans la complexité des ERP traditionnels.',
      benefits: [
        'Fiches d’équipements et suivi historique de pannes',
        'Planning préventif automatique et ordres de travail',
        'Gestion simplifiée des stocks de pièces de rechange',
        'Calcul des indicateurs industriels MTBF et MTTR'
      ],
      iconName: 'Settings' as const,
      serviceType: 'gmao',
      linkHref: '/gmao',
    },
    {
      title: 'Supervision & Acquisition Industrielle',
      description: 'Interfaçage de capteurs, relais Ethernet, automates programmables et compteurs énergétiques via Modbus TCP ou autres protocoles.',
      benefits: [
        'Tableaux de bord de supervision locale en temps réel',
        'Acquisition et enregistrement des données physiques',
        'Alertes automatiques en cas de dysfonctionnement',
        'Suivi de consommation énergétique (eau, électricité)'
      ],
      iconName: 'Cpu' as const,
      serviceType: 'supervision',
      linkHref: '/solutions-industrielles',
    },
    {
      title: 'Gestion Cabinet Médical',
      description: 'Solution simple et sécurisée pour organiser l’agenda du médecin, la salle d’attente de la secrétaire et les dossiers patients.',
      benefits: [
        'Calendrier interactif des visites et rendez-vous',
        'Fiches patients avec historique clinique et ordonnances',
        'Rappels automatiques de rendez-vous configurables',
        'Statistiques de fréquentation et facturation simple'
      ],
      iconName: 'HeartPulse' as const,
      serviceType: 'medical',
      linkHref: '/cabinet-medical',
    },
    {
      title: 'Gestion Hôtelière',
      description: 'Logiciel de gestion d’établissements hôteliers de taille moyenne, riads, et maisons d’hôtes pour suivre l’activité commerciale quotidienne.',
      benefits: [
        'Planning graphique interactif des disponibilités',
        'Enregistrement check-in / check-out rapide',
        'Fiches clients détaillées et facturation automatisée',
        'Reporting financier et taux d’occupation en temps réel'
      ],
      iconName: 'Bed' as const,
      serviceType: 'hotel',
      linkHref: '/hotel',
    },
    {
      title: 'Gestion Production & Stock',
      description: 'Suivi de la chaîne de production, entrées/sorties de marchandises, inventaires réguliers et seuils d’alerte de réapprovisionnement.',
      benefits: [
        'Suivi des flux de stocks en temps réel',
        'Gestion de lots et alertes sur seuil critique de sécurité',
        'Traçabilité complète des mouvements de matériel',
        'Génération automatique de bons d’entrée / sortie'
      ],
      iconName: 'BarChart3' as const,
      serviceType: 'stock-prod',
    },
  ]

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D95D39]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center space-y-4 mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient">
          Services & Solutions Digitales
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Je conçois des solutions sur-mesure pour digitaliser vos flux opérationnels, optimiser votre gestion et connecter vos outils industriels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            iconName={service.iconName}
            serviceType={service.serviceType}
            linkHref={service.linkHref}
          />
        ))}
      </div>
    </div>
  )
}
