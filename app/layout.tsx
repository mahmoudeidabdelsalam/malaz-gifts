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
  robots: { index: true, follow: true },
  openGraph: {
    siteName: site.name,
    locale: "ar_EG",
    type: "website",
    images: site.logoAvailable
      ? [{ url: site.logoPath, alt: site.logoAlt }]
      : undefined,
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
