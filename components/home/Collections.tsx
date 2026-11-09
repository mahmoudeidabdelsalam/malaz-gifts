import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/site";

export function Collections() {
  return (
    <section className="py-16 md:py-20" id="collections">
      <div className="page-shell">
        <SectionTitle label={site.collectionsLabel} title={site.collectionsHeading} />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {site.collections.map((collection) => (
            <Link
              className="soft-card group overflow-hidden transition-transform hover:-translate-y-1"
              href={site.links.contact}
              key={collection.title}
            >
              <ImagePlaceholder
                aspect="landscape"
                alt={collection.title}
                image={collection.image}
                label={site.placeholderCollectionImage}
              />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-cairo text-lg font-bold text-plum-dark">
                    {collection.title}
                  </h3>
                  <Icon
                    name="chevron"
                    className="size-5 shrink-0 rotate-180 text-plum transition-transform group-hover:-translate-x-1"
                  />
                </div>
                <p className="text-sm leading-6 text-body-muted">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
