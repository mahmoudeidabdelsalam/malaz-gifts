import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/site";

export function Occasions() {
  return (
    <section
      className="border-y border-border bg-white py-14 md:py-16"
      id="occasions"
    >
      <div className="page-shell">
        <SectionTitle title={site.occasionsHeading} />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {site.occasions.map((occasion) => (
            <Link
              className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-[#E9B9AE] bg-blush-50 px-5 py-2 font-cairo text-sm font-bold text-[#6B2F4A] transition-colors hover:bg-blush-200 md:px-7 md:text-lg"
              href={`${site.links.contact}?occasion=${encodeURIComponent(occasion)}`}
              key={occasion}
            >
              {occasion}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
