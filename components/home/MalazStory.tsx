import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function MalazStory() {
  const story = site.schoolStory;

  return (
    <section className="py-16 md:py-20">
      <div className="page-shell grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[28px] border border-border bg-white p-2 shadow-[0_20px_50px_rgba(138,74,104,.14)]">
          <Image
            alt={story.imageAlt}
            className="h-auto w-full rounded-[22px]"
            height={768}
            sizes="(max-width: 1024px) 90vw, 560px"
            src={story.image}
            width={768}
          />
        </div>

        <div>
          <p className="mb-3 inline-flex items-center gap-2 font-cairo text-sm font-bold text-gold-text">
            <Icon name="heart" className="size-5" />
            {story.label}
          </p>
          <h2 className="section-title">{story.heading}</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-body-muted md:text-lg">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button className="mt-6" href={site.links.contact}>
            {story.action}
          </Button>
        </div>
      </div>
    </section>
  );
}
