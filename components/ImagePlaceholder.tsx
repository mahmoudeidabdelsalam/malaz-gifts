import Image from "next/image";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

type ImagePlaceholderProps = {
  label: string;
  alt?: string;
  image?: string;
  aspect?: "square" | "landscape";
  className?: string;
};

export function ImagePlaceholder({
  label,
  alt = label,
  image,
  aspect = "square",
  className = "",
}: ImagePlaceholderProps) {
  if (image) {
    return (
      <Image
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        height={600}
        src={image}
        unoptimized
        width={600}
      />
    );
  }

  return (
    <div
      aria-label={label || site.productImagePlaceholder}
      className={`flex ${aspect === "square" ? "aspect-square" : "aspect-[4/3]"} flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#FFE3DB_0%,#EBC9D6_100%)] px-4 text-center text-plum/70 ${className}`}
      role="img"
    >
      <Icon name="gift" className="size-16" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
