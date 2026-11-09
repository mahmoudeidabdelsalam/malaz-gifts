import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo-font",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal-font",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.homeTitle,
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.homeTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ar_EG",
    type: "website",
    images: site.logoAvailable
      ? [{ url: site.logoPath, alt: site.logoAlt }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: site.homeTitle,
    description: site.description,
    images: site.logoAvailable ? [site.logoPath] : undefined,
  },
  alternates: {
    canonical: site.links.home,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${cairo.variable} ${tajawal.variable} h-full antialiased`}
      dir="rtl"
      lang="ar"
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
