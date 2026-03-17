import type { Metadata } from "next";
import { Manrope, Crimson_Pro, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cout-chauffage-energie.fr'),
  title: "Coût Chauffage Énergie 2026 — Prix, Devis & Installateurs",
  description: "Comparez les prix d'installation de géothermie, chauffe-eau, VMC, chaudière bois et chauffe-eau thermodynamique. Devis gratuits d'artisans certifiés RGE partout en France.",
  openGraph: {
    title: "Coût Chauffage Énergie 2026 — Prix, Devis & Installateurs",
    description: "Géothermie, chauffe-eau, VMC, chaudière bois — comparez les prix et obtenez des devis gratuits d'installateurs RGE.",
    url: 'https://www.cout-chauffage-energie.fr',
    siteName: 'Cout-Chauffage-Energie.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Coût Chauffage Énergie 2026 — Prix, Devis & Installateurs",
    description: "Géothermie, chauffe-eau, VMC, chaudière bois — comparez les prix et obtenez des devis gratuits d'installateurs RGE.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cout-Chauffage-Energie.fr",
  "url": "https://www.cout-chauffage-energie.fr",
  "logo": "https://www.cout-chauffage-energie.fr/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cout-Chauffage-Energie.fr",
  "url": "https://www.cout-chauffage-energie.fr",
  "description": "Guide indépendant : prix et installateurs pour géothermie, chauffe-eau, VMC, chaudière bois et chauffe-eau thermodynamique en France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${crimsonPro.variable} ${firaCode.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
        {/* Bottom padding on mobile for sticky CTA */}
        <div className="h-16 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
