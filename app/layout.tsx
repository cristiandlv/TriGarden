import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";

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
    default: "TriGarde — Desarrollo Web Profesional",
    template: "%s | TriGarde",
  },
  description:
    "Creamos sitios web modernos, rápidos y orientados a resultados. Diseño UI/UX, desarrollo web y soluciones digitales a medida.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "páginas web profesionales",
    "frontend",
    "next.js",
    "react",
    "ui ux",
    "agencia web argentina",
  ],
  authors: [{ name: "TriGarde Studio" }],
  creator: "TriGarde Studio",
  metadataBase: new URL("https://trigarde.com.ar"),
  openGraph: {
    title: "TriGarde — Desarrollo Web Profesional",
    description:
      "Diseñamos y desarrollamos experiencias web modernas, rápidas y orientadas a convertir.",
    url: "https://trigarde.com.ar",
    siteName: "TriGarde",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        {children}

        <WhatsAppButton />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TriGarde",
              url: "https://trigarde.com.ar",
              logo: "https://trigarde.com.ar/TriGarde.svg",
              description:
                "Estudio de desarrollo web especializado en diseño UI/UX, sitios modernos, landing pages y soluciones digitales a medida.",
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              sameAs: [
                "https://www.instagram.com/trigarde",
                "https://www.linkedin.com/company/trigarde",
              ],
              email: "contacto@trigarde.com.ar",
              serviceType: [
                "Desarrollo Web",
                "Diseño UI UX",
                "Landing Pages",
                "E-commerce",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
