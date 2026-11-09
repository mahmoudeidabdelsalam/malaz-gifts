import type { Metadata } from "next";
import { Collections } from "@/components/home/Collections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { GroupCta } from "@/components/home/GroupCta";
import { Hero } from "@/components/home/Hero";
import { Occasions } from "@/components/home/Occasions";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyMalaz } from "@/components/home/WhyMalaz";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.homeTitle,
  description: site.description,
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
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Collections />
      <FeaturedProducts />
      <Occasions />
      <WhyMalaz />
      <GroupCta />
    </main>
  );
}
