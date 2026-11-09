import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function TrustStrip() {
  return (
    <section
      aria-label={site.trustItemsAriaLabel}
      className="border-b border-border bg-white"
    >
      <div className="page-shell flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-5">
        {site.trustItems.map((item) => (
          <div
            className="flex min-h-11 items-center gap-2 font-cairo text-sm font-semibold text-body-muted md:text-base"
            key={item.label}
          >
            <Icon name={item.icon} className="size-5 text-gold-text" />
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
