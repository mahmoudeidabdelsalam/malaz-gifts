"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  const [logoFailed, setLogoFailed] = useState(!site.logoAvailable);

  return (
    <span className="inline-flex items-center gap-3">
      {!logoFailed && (
        <Image
          alt={site.logoAlt}
          className="size-16 shrink-0 rounded-full object-cover"
          height={64}
          onError={() => setLogoFailed(true)}
          src={site.logoPath}
          unoptimized
          width={64}
        />
      )}
      {logoFailed && (
        <span
          aria-hidden="true"
          className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white text-plum"
        >
          <Icon name="gift" className="size-7" />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`font-cairo text-2xl font-extrabold ${light ? "text-white" : "text-plum"}`}
        >
          ملاذ
        </span>
        <span
          className={`mt-1 text-[11px] font-bold tracking-[0.2em] ${light ? "text-blush-200" : "text-gold-text"}`}
          dir="ltr"
        >
          MALAZ GIFTS
        </span>
      </span>
    </span>
  );
}
