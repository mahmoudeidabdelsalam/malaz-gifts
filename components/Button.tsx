import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "secondary"
      ? "secondary-button"
      : variant === "light"
        ? "inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 font-cairo text-[15px] font-bold text-plum hover:bg-blush-50"
        : "primary-button";

  return (
    <a className={`${variantClass} ${className}`} {...props}>
      {children}
    </a>
  );
}
