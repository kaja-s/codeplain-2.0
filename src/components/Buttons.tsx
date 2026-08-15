import { Button as BaseButton } from "@base-ui/react/button";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  // Set on pages still using the site-wide dark body theme (see CLAUDE.md) so
  // Secondary/Tertiary render legibly on navy instead of assuming a light bg.
  onDark?: boolean;
} & (
  | { href: string; external?: boolean; type?: never; onClick?: never }
  | { href?: undefined; external?: never; type?: "button" | "submit"; onClick?: () => void }
);

const baseClasses =
  "inline-flex items-center justify-center gap-2 text-[15px] font-medium px-5.5 py-3 cursor-pointer transition-[transform,background,border-color] duration-150 active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none";

function renderButton(variantClasses: string, props: ButtonProps) {
  const { children, className = "", disabled } = props;
  const classes = `${baseClasses} ${variantClasses} ${className}`;

  // Links are real navigation, not "a thing that acts like a button" — Base UI's
  // Button forces role="button" and button-style keyboard handling onto whatever
  // it renders, which is wrong for an anchor. Style a plain Link/`<a>` instead.
  if (props.href) {
    const { href, external } = props;
    const isHttp = href.startsWith("http");

    if (disabled) {
      return (
        <span aria-disabled="true" className={classes}>
          {children}
        </span>
      );
    }

    if (external || href.startsWith("mailto:")) {
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

  // No href — this is a real action trigger, where Base UI's Button earns its
  // keep: native <button> semantics, correct disabled/focus handling for free.
  const { type = "button", onClick } = props;
  return (
    <BaseButton type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </BaseButton>
  );
}

// Solid brand-blue CTA — highest emphasis, one per view. Same on light or dark.
export function PrimaryButton(props: ButtonProps) {
  return renderButton("border border-transparent bg-brand-blue text-white hover:bg-brand-blue-dark", props);
}

// Outlined — pairs alongside a primary action.
export function SecondaryButton({ onDark, ...props }: ButtonProps) {
  const variantClasses = onDark
    ? "border border-white/30 text-white bg-transparent hover:border-white hover:bg-white/10"
    : "border border-black/20 text-ink bg-transparent hover:border-black/40 hover:bg-black/[0.04]";
  return renderButton(variantClasses, props);
}

// Text-only — lowest emphasis, inline or supporting actions.
export function TertiaryButton({ onDark, ...props }: ButtonProps) {
  const variantClasses = onDark
    ? "border border-transparent font-normal text-white bg-transparent underline-offset-4 hover:underline"
    : "border border-transparent font-normal text-ink bg-transparent underline-offset-4 hover:underline";
  return renderButton(variantClasses, props);
}
