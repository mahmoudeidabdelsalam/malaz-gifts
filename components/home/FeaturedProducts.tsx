import Link from "next/link";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { site } from "@/lib/site";

export function FeaturedProducts() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="page-shell">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 font-cairo text-sm font-bold text-gold-text">
              {site.featuredLabel}
            </p>
            <h2 className="section-title">{site.featuredHeading}</h2>
          </div>
          <Link
            className="mb-1 border-b border-gold-text pb-1 font-cairo text-sm font-bold text-plum hover:text-rose-deep"
            href={site.links.contact}
          >
            {site.customOrderLink}
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {site.products.map((product) => (
            <article
              className="soft-card overflow-hidden"
              key={product.name}
            >
              <div className="relative">
                <ImagePlaceholder
                  image={product.image}
                  alt={product.name}
                  label={site.productImagePlaceholder}
                />
                <span className="absolute end-3 top-3 rounded-full bg-plum px-3 py-1 text-xs font-bold text-white">
                  {product.tag}
                </span>
              </div>
              <div className="flex min-h-[82px] items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="font-cairo text-sm font-bold text-plum-dark">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-cairo text-sm font-extrabold text-plum">
                    {product.price} ج.م
                  </p>
                </div>
                <Button
                  className="min-h-10 shrink-0 bg-rose px-4 py-2 text-sm text-[#3E1F2E] hover:bg-[#d97b75]"
                  href={site.links.contact}
                >
                  {site.orderAction}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
