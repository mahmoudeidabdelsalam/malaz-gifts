import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.contactPage.pageTitle,
  description: site.contactPage.metaDescription,
  keywords: [...site.keywords],
  alternates: { canonical: site.links.contact },
  openGraph: {
    title: site.contactPage.pageTitle,
    description: site.contactPage.metaDescription,
    url: `${site.url}${site.links.contact}`,
    siteName: site.name,
    locale: "ar_EG",
    type: "website",
    images: site.logoAvailable
      ? [{ url: site.logoPath, alt: site.logoAlt }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: site.contactPage.pageTitle,
    description: site.contactPage.metaDescription,
    images: site.logoAvailable ? [site.logoPath] : undefined,
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero-gradient px-4 py-14 text-center md:py-16">
        <p className="mb-3 font-cairo text-sm font-bold text-gold-text">
          {site.contactPage.heroLabel}
        </p>
        <h1 className="font-cairo text-[clamp(34px,4.6vw,56px)] font-extrabold leading-tight text-plum-dark">
          {site.contactPage.heroHeading}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-body-muted">
          {site.contactPage.heroDescription}
        </p>
        <div aria-hidden="true" className="gold-bar mt-5" />
      </section>

      <section className="page-shell grid gap-6 py-10 md:grid-cols-[1.2fr_0.9fr] md:gap-8 md:py-12">
        <ContactForm />
        <ContactInfo />
      </section>
    </main>
  );
}
