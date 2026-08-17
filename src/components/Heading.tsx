import { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
export type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "custom";

// Size tiers lifted from current usage (Hero, PageHero, SectionHead,
// PlatformSolutions, Pillars/Differentiators). h1/h2/h3 inherit font-weight
// and letter-spacing from the base `h1,h2,h3` rule in globals.css — h4 isn't
// covered by that rule, so it sets its own weight here. "custom" applies no
// base classes, for one-off headings that don't share a tier with anything
// else — pass the full size treatment via className instead.
const SIZE_STYLES: Record<HeadingSize, string> = {
  display: "text-[clamp(34px,5.4vw,56px)] leading-none font-semibold",
  h1: "text-[clamp(30px,4.6vw,46px)] leading-[1.08]",
  h2: "text-[clamp(27px,3.6vw,38px)] leading-[1.1] tracking-tight",
  h3: "text-[clamp(24px,3vw,32px)] leading-[1.08]",
  h4: "text-lg leading-snug font-medium",
  custom: "",
};

export default function Heading({
  as = "h2",
  size,
  className = "",
  children,
}: {
  as?: HeadingTag;
  // Visual size tier — defaults to matching `as`, override to decouple
  // semantic level from visual size (e.g. an h2 styled at the h3 tier).
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
}) {
  const Tag = as;
  return (
    <Tag className={`${SIZE_STYLES[size ?? as]} ${className}`}>{children}</Tag>
  );
}
