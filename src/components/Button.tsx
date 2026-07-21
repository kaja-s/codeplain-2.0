import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "onnavy" | "onnavy-ghost";

const variantClasses: Record<Variant, string> = {
  primary: "border border-transparent bg-navy text-white hover:bg-[#16306b]",
  ghost:
    "border border-[#CBD5EC] text-navy bg-transparent hover:border-navy hover:bg-tint",
  onnavy: "border border-transparent bg-white text-navy hover:-translate-y-px",
  "onnavy-ghost":
    "border border-white/35 text-white hover:border-white hover:bg-white/[0.06]",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center gap-2 text-[15px] font-medium px-[22px] py-3 rounded-lg cursor-pointer transition-[transform,background,border-color] duration-150 active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`;

  if (external || href.startsWith("mailto:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
