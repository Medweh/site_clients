import ContactForm from '@/components/contact-form'
import { Mail, Clock, MessageSquareText, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Demander un Devis ou un Cahier des Charges',
  description: 'Prenez contact avec DigitalService pour évaluer le budget de votre projet d’application web, Android, PC ou de supervision industrielle.',
}

export default function ContactPage() {
  // WhatsApp Link Config
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212679515074'
  const whatsappUrl = `https://wa.me/${rawNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Bonjour DigitalService, je souhaite discuter d’un projet d’application / site web / solution industrielle.'
  )}`

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow decorator */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gradient leading-tight">
              Parlons de Votre Projet
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Remplissez le formulaire de cahier des charges ou contactez-moi directement sur WhatsApp pour échanger sur vos problématiques métiers et estimer le budget nécessaire.
            </p>
          </div>

          <div className="space-y-5">
            {/* Item 1 */}
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Réactivité Garantie</h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                  Analyse de vos exigences et retour par e-mail ou téléphone sous 24h à 48h maximum.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Confidentialité Totale</h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                  Toutes les informations partagées restent confidentielles et couvertes par le secret professionnel.
                </p>
              </div>
            </div>

            {/* Direct contact info card */}
            <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
              <h3 className="font-bold text-white text-sm">Canaux Directs</h3>
              <div className="space-y-3">
                <a
                  href="mailto:mohamed.essahafi@um6p.ma"
                  className="flex items-center space-x-3 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="h-4.5 w-4.5 text-cyan-500" />
                  <span>mohamed.essahafi@um6p.ma</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-xs text-gray-300 hover:text-[#25D366] transition-colors"
                >
                  <MessageSquareText className="h-4.5 w-4.5 text-[#25D366]" />
                  <span>Discussion WhatsApp Directe</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
