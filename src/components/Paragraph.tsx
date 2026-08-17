import { ReactNode } from "react";

export type ParagraphSize = "eyebrow" | "lead" | "body" | "small" | "custom";

// Size tiers lifted from current usage: eyebrow kickers (SectionHead,
// PageHero), section ledes, card/body copy, footer fine print. "custom"
// applies no base classes, for one-off copy that doesn't share a tier with
// anything else — pass the full size treatment via className instead.
const SIZE_STYLES: Record<ParagraphSize, string> = {
  eyebrow: "font-mono text-xs tracking-wide uppercase",
  lead: "text-base leading-snug",
  body: "text-[14.5px] leading-snug",
  small: "text-sm leading-snug",
  custom: "",
};

export default function Paragraph({
  as = "p",
  size = "body",
  className = "",
  children,
}: {
  as?: "p" | "span" | "div" | "blockquote";
  size?: ParagraphSize;
  className?: string;
  children: ReactNode;
}) {
  const Tag = as;
  return (
    <Tag className={`${SIZE_STYLES[size]} ${className}`}>{children}</Tag>
  );
}
