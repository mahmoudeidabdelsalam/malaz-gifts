import type { IconName } from "@/lib/site";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-6" }: IconProps) {
  const common = {
    "aria-hidden": true as const,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "gift":
      return (
        <svg {...common}>
          <rect x="3" y="9" width="18" height="12" rx="2" />
          <path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.4-3.2L12 9Zm0 0h4.5a2.5 2.5 0 1 0-2.4-3.2L12 9Z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 8.6c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.7 4.7 0 0 1 8.8-2.3 4.7 4.7 0 0 1 8.8 2.3Z" />
        </svg>
      );
    case "message":
      return (
        <svg {...common}>
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.4-.8L4 20l1.8-4.4a7.5 7.5 0 1 1 14.2-4.1Z" />
          <path d="M9 11.5h.01M12.5 11.5h.01M16 11.5h.01" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.6 3.5h2.7l1.3 4-1.8 1.8a15 15 0 0 0 5.9 5.9l1.8-1.8 4 1.3v2.7a2 2 0 0 1-2.2 2A16.3 16.3 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
  }
}
