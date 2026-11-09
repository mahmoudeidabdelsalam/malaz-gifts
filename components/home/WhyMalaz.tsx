import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function WhyMalaz() {
  return (
    <section className="py-16 md:py-20" id="why">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <div className="text-start">
            <p className="mb-2 font-cairo text-sm font-bold text-gold-text">
              {site.whyLabel}
            </p>
            <h2 className="section-title">
              {site.whyHeading}
              <br />
              {site.whyHeadingSecondLine}
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-8 text-body-muted md:text-lg">
            {site.whyDescription}
          </p>
          <Button className="mt-6" href={site.links.contact}>
            {site.startOrderAction}
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {site.benefits.map((benefit) => (
            <article
              className="soft-card flex flex-col items-start p-4 md:min-h-44 md:p-5"
              key={benefit.title}
            >
              <span className="mb-3 inline-flex size-11 items-center justify-center rounded-xl bg-blush-200 text-plum">
                <Icon name="star" />
              </span>
              <h3 className="font-cairo text-sm font-bold text-plum-dark md:text-base">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-body-muted md:text-sm">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
