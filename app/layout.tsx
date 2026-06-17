import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappBubble from "@/components/whatsapp-bubble";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DigitalService | Ingénierie & Solutions Digitales Premium",
    template: "%s | DigitalService"
  },
  description: "Ingénieur développeur spécialisé en applications métiers, supervision industrielle et solutions digitales sur mesure au Maroc. مهندس مطور متخصص في تطوير التطبيقات المهنية، المراقبة الصناعية والحلول الرقمية بالمغرب.",
  keywords: [
    "développement application web Maroc",
    "développement logiciel industriel Maroc",
    "GMAO PME Maroc",
    "application gestion cabinet médical Maroc",
    "application gestion hôtel Maroc",
    "supervision industrielle Maroc",
    "DigitalService",
    "Ingénieur développeur",
    "Modbus TCP",
    "Dashboard industriel",
    "Next.js Maroc",
    "تطوير تطبيقات الويب المغرب",
    "برمجة الأنظمة الصناعية المغرب",
    "نظام إدارة الصيانة GMAO المغرب",
    "تطبيق عيادة طبية المغرب",
    "تطبيق إدارة الفنادق المغرب",
    "المراقبة الصناعية المغرب",
    "برمجيات مخصصة للمغرب",
    "لوحة تحكم صناعية"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigitalService | Ingénierie & Solutions Digitales Premium",
    description: "Je transforme vos problèmes métiers en applications simples, professionnelles et rentables.",
    url: "/",
    siteName: "DigitalService Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  verification: {
    google: "AXf-21uLxAiYkImNGuaiO0kDt_kXoPnpHcS25PINyfM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-slate-800 selection:bg-[#002FA7]/20 selection:text-[#002FA7]">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsappBubble />
      </body>
    </html>
  );
}
