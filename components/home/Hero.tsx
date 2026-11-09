import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-gradient overflow-hidden">
      <div className="page-shell grid items-center gap-10 py-14 md:grid-cols-2 md:gap-14 md:py-16 lg:py-[72px]">
        <div className="order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E6B96A] bg-white px-4 py-2 font-cairo text-sm font-bold text-gold-text">
            <Icon name="star" className="size-4" />
            {site.hero.badge}
          </div>
          <h1 className="max-w-3xl font-cairo text-[clamp(36px,5.2vw,68px)] font-extrabold leading-[1.25] text-plum-dark">
            {site.hero.headlineStart}
            <br />
            {site.hero.headlineMiddle}{" "}
            <span className="text-rose-text">{site.hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.9] text-body-muted md:text-xl">
            {site.hero.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={site.links.collections}>{site.hero.primaryAction}</Button>
            <Button href={site.links.contact} variant="secondary">
              {site.hero.secondaryAction}
            </Button>
          </div>
        </div>
        <div className="order-2 mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center rounded-full border-[6px] border-gold bg-white shadow-[0_30px_60px_rgba(138,74,104,.18)]">
          <div className="flex size-[82%] items-center justify-center rounded-full border-2 border-gold/70">
            <Logo />
          </div>
        </div>
      </div>
    </section>
  );
}
