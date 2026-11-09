"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {pathname === "/" && (
        <div className="bg-plum px-4 py-2 text-center text-sm text-cream">
          {site.announcement}
        </div>
      )}
      <header
        className={`sticky top-0 z-40 border-b border-border bg-white transition-shadow ${scrolled ? "shadow-md shadow-plum/10" : ""}`}
      >
        <div className="page-shell flex min-h-[84px] items-center justify-between gap-4 py-3">
          <Link
            aria-label={site.name}
            className="shrink-0"
            href={site.links.home}
            onClick={closeMenu}
          >
            <Logo />
          </Link>

          <nav
            aria-label={site.homeNavigationLabel}
            className="hidden items-center gap-6 md:flex"
          >
            {site.navigation.map((item) => {
              const isActive =
                item.href === site.links.home
                  ? pathname === "/"
                  : item.href === site.links.contact
                    ? pathname === "/contact/"
                    : false;
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap font-cairo text-[15px] font-semibold transition-colors hover:text-rose-deep ${isActive ? "text-rose-deep" : "text-ink"}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            className="hidden shrink-0 md:inline-flex"
            href={site.links.contact}
          >
            {site.orderNowAction}
          </Button>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? site.menuCloseLabel : site.menuOpenLabel}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-plum md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <nav
            aria-label={site.mobileNavigationLabel}
            className="absolute inset-x-0 top-full border-b border-border bg-white px-5 pb-5 pt-2 shadow-lg md:hidden"
            id="mobile-menu"
          >
            <div className="page-shell flex flex-col gap-1">
              {site.navigation.map((item) => (
                <Link
                  className="flex min-h-12 items-center rounded-xl px-3 font-cairo font-semibold text-ink hover:bg-blush-50 hover:text-rose-deep"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="mt-2"
                href={site.links.contact}
                onClick={closeMenu}
              >
                {site.orderNowAction}
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
