import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uaimais.com.br"),
  title: {
    default: "Uai+ | Onde tem Uai+, tem conexão",
    template: "%s | Uai+",
  },
  description: "A melhor operadora móvel do Brasil.",
  keywords: [
    "operadora móvel",
    "telefonia móvel",
    "planos de celular",
    "internet móvel",
    "Minas Gerais",
    "Rio de Janeiro",
    "São paulo",
    "Bahia",
    "5G",
    "operadora regional",
    "cobertura móvel",
    "planos baratos",
    "internet limitada",
    "portabilidade",
    "recarga",
    "Uai+",
    "0800 735 9501",
  ],
  authors: [{ name: "Uai+", url: "https://www.uaimais.com.br" }],
  creator: "Uai+",
  publisher: "Uai+",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.uaimais.com.br",
    languages: {
      "pt-BR": "https://www.uaimais.com.br",
    },
  },
  openGraph: {
    title: "Uai+ | Onde tem Uai+, tem conexão",
    description: "A melhor operadora móvel do Brasil.",
    url: "https://www.uaimais.com.br",
    siteName: "Uai+",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uai+ - Operadora Móvel ",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "SEU_CODIGO_DO_SEARCH_CONSOLE_AQUI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/Icons/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="canonical" href="https://www.uaimais.com.br" />

        <link rel="alternate" hrefLang="pt-br" href="https://www.uaimais.com.br" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uaimais.com.br" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uai+",
              url: "https://www.uaimais.com.br",
              logo: "https://www.uaimais.com.br/Icons/logo.svg",
              description: "Operadora móvel com cobertura em todo o Brasil.",
              address: {
                "@type": "PostalAddress",
                addressRegion: "MG",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-31-08007359501",
                contactType: "Customer Service",
                areaServed: "BR",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://facebook.com/uaiplus",
                "https://instagram.com/uaiplus",
                "https://twitter.com/uaiplus",
              ],
            }),
          }}
        />
      </head>

      <body className={`${poppins.className} antialiased bg-white text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}