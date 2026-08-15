"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { PrimaryButton, TertiaryButton } from "./Buttons";

type NavChild = { href: string; label: string; external?: boolean };
type NavItem = { href: string; label: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { href: "/#why-plain", label: "Why ∗∗∗Plain" },
  { href: "/#why-codeplain", label: "Why Codeplain" },
  {
    href: "/#solutions",
    label: "Solutions",
    children: [
      { href: "/solutions/integrations-forge", label: "Integrations Forge" },
      { href: "/solutions/web-scraper", label: "Web Scraper" },
    ],
  },
  {
    href: "/learn",
    label: "Learn",
    children: [
      { href: "/learn/documentation", label: "Documentation" },
      { href: "/learn/resources", label: "Resources" },
      { href: "/learn/blog", label: "Blog" },
      { href: "/learn/events", label: "Events" },
    ],
  },
  {
    href: "/company/press",
    label: "Company",
    children: [
      { href: "/company/press", label: "Press" },
      { href: "/company/contact", label: "Contact" },
    ],
  },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="11"
      height="11"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Duplicates its children behind a solid-fill layer, revealed left-to-right
// on hover via a clip-path wipe — no box padding, the fill hugs the text
// exactly. Requires an ancestor with `group/item`.
function SweepLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center whitespace-nowrap bg-brand-blue text-white [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-300 ease-out group-hover/item:[clip-path:inset(0_0%_0_0)]"
      >
        {children}
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white px-16 max-md:px-6">
        <Container className="flex items-center justify-between h-17 max-w-328 px-0">
          <Link
            href="/"
            aria-label="codeplain home"
            className="block"
            onClick={close}
          >
            <Logo variant="ink" />
          </Link>

          <nav
            className={`${open ? "flex flex-col items-stretch absolute top-17 inset-x-0 bg-white border-b-[0.5px] border-black/10 px-5.5 py-5.5 gap-1" : "hidden"} font-mono font-normal text-[14.5px] text-ink md:flex md:flex-row md:items-center md:static md:bg-transparent md:border-none md:p-0 md:gap-7`}
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="group relative md:flex md:items-center"
                >
                  {/* trigger — desktop dropdown / mobile accordion */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSubmenu((cur) =>
                        cur === link.label ? null : link.label,
                      )
                    }
                    aria-expanded={openSubmenu === link.label}
                    className="group/item flex w-full items-center justify-between gap-1 py-2.5 lowercase md:w-auto md:py-0"
                  >
                    <SweepLabel>
                      <span className="inline-flex items-center gap-1">
                        {link.label}
                        <Chevron
                          className={`transition-transform ${
                            openSubmenu === link.label ? "rotate-180" : ""
                          } md:group-hover/item:rotate-180 md:rotate-0`}
                        />
                      </span>
                    </SweepLabel>
                  </button>

                  {/* panel */}
                  <div
                    className={`${
                      openSubmenu === link.label ? "flex" : "hidden"
                    } flex-col pl-3 pb-1.5 md:flex md:absolute md:left-0 md:top-full md:origin-top md:pt-2.5 md:pl-0 md:pb-0 md:invisible md:scale-95 md:opacity-0 md:pointer-events-none md:transition-[opacity,transform] md:duration-150 md:ease-out md:group-hover:visible md:group-hover:scale-100 md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:visible md:group-focus-within:scale-100 md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto`}
                  >
                    <div className="md:min-w-52 md:border-[0.5px] md:border-black/10 md:bg-white md:p-1.5 md:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]">
                      {link.children.map((child) => {
                        const childClass = "group/item block py-2 md:py-1";
                        const childInner = (
                          <SweepLabel>{child.label}</SweepLabel>
                        );
                        return child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={close}
                            className={childClass}
                          >
                            {childInner}
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={close}
                            className={childClass}
                          >
                            {childInner}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/item py-2.5 lowercase md:py-0"
                  onClick={close}
                >
                  <SweepLabel>{link.label}</SweepLabel>
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <TertiaryButton href="/get-started" className="px-2 py-2 text-sm">
              Sign up
            </TertiaryButton>
            <PrimaryButton href="/book-a-demo" className="px-5! py-2! text-sm!">
              Book a demo
            </PrimaryButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden border-[0.5px] border-black/15 px-2.5 py-2"
          >
            <span className="block w-4.5 h-0.5 bg-ink my-0.75" />
            <span className="block w-4.5 h-0.5 bg-ink my-0.75" />
            <span className="block w-4.5 h-0.5 bg-ink my-0.75" />
          </button>
        </Container>
      </header>
    </>
  );
}
