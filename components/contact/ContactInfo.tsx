import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function ContactInfo() {
  return (
    <aside
      aria-label={site.contactPage.accessibilityLabel}
      className="flex flex-col gap-4"
    >
      <section className="gradient-card rounded-3xl p-6 text-white sm:p-7">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Icon name="message" />
          </span>
          <div>
            <h2 className="font-cairo text-xl font-extrabold">
              {site.contactPage.whatsappCardHeading}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#FFEDE8]">
              {site.contactPage.whatsappCardDescription}
            </p>
            <Button
              className="mt-4"
              href={site.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="light"
            >
              {site.contactPage.whatsappAction}
            </Button>
          </div>
        </div>
      </section>

      <section className="soft-card p-5 sm:p-6">
        <ul className="space-y-4">
          {site.contactPage.details.map((item) => (
            <li className="flex items-center gap-3" key={item.title}>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blush-200 text-plum">
                <Icon name={item.icon} />
              </span>
              <span>
                <span className="block font-cairo text-sm font-bold text-ink">
                  {item.title}
                </span>
                {"href" in item ? (
                  <a
                    className="mt-1 block text-sm text-body-muted underline decoration-border underline-offset-2 hover:text-plum"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="mt-1 block text-sm text-body-muted">
                    {item.value}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <a
        className="flex min-h-[88px] items-center justify-between gap-4 rounded-3xl border-[1.5px] border-[#E6B96A] bg-blush-50 p-5 transition-colors hover:bg-blush-200"
        href={site.facebookGroup}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>
          <span className="block font-cairo font-bold text-plum-dark">
            {site.contactPage.facebookHeading}
          </span>
          <span className="mt-1 block text-sm text-body-muted">
            {site.contactPage.facebookDescription}
          </span>
        </span>
        <Icon
          name="chevron"
          className="size-5 shrink-0 rotate-180 text-plum"
        />
      </a>
    </aside>
  );
}
