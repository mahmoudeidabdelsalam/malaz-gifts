import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/site";

export function SchoolActivities() {
  const content = site.schoolGifts;

  return (
    <section
      className="border-y border-border bg-white py-16 md:py-20"
      id="school-gifts"
    >
      <div className="page-shell">
        <SectionTitle label={content.label} title={content.heading} />
        <p className="mx-auto mt-4 max-w-2xl text-center leading-8 text-body-muted">
          {content.description}
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {content.items.map((item) => (
            <article
              className="soft-card flex flex-col items-start overflow-hidden"
              key={item.title}
            >
              <Image
                alt={item.title}
                className="max-h-[600px] w-full object-cover"
                height={600}
                src={item.image}
                width={800}
              />
              <div className="flex flex-1 flex-col items-start p-6">
                <span className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-blush-50 text-plum">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="font-cairo text-lg font-bold text-plum-dark">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-body-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href={site.links.contact}>{content.action}</Button>
        </div>
      </div>
    </section>
  );
}
