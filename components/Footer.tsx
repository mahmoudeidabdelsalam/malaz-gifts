import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-[#F6DFE0]">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:gap-16">
        <div>
          <Link aria-label={site.name} href={site.links.home}>
            <Logo light />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-blush-200">
            {site.footerTagline}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-cairo text-base font-bold text-white">
            {site.quickLinksHeading}
          </h2>
          <ul className="space-y-3 text-sm text-blush-200">
            {site.footerLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-cairo text-base font-bold text-white">
            {site.socialHeading}
          </h2>
          <ul className="space-y-3 text-sm text-blush-200">
            <li>
              <a
                className="hover:text-white"
                href={site.facebookGroup}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.facebookGroupLabel}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href={site.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.whatsappFooterLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-shell border-t border-white/15 py-4 text-center text-xs text-blush-200">
        {site.copyright.replace("©", `© ${new Date().getFullYear()}`)}
      </div>
    </footer>
  );
}
