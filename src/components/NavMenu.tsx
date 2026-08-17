"use client";

import { useState } from "react";
import Link from "next/link";
import { SweepLabel } from "./SweepLabel";
import Chevron from "./Chevron";

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

export default function NavMenu({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navigate = () => {
    setOpenSubmenu(null);
    onNavigate();
  };

  return (
    <nav
      className={`${open ? "flex flex-col items-stretch absolute top-17 inset-x-0 bg-white border-b-[0.5px] border-black/10 px-5.5 py-5.5 gap-1" : "hidden"} font-mono font-normal text-[14.5px] text-ink md:flex md:flex-row md:items-center md:static md:bg-transparent md:border-none md:p-0 md:gap-7`}
      aria-label="Primary"
    >
      {NAV_LINKS.map((link) =>
        link.children ? (
          <div key={link.label} className="group/trigger relative md:flex md:items-center">
            {/* trigger — desktop dropdown / mobile accordion */}
            <button
              type="button"
              onClick={() =>
                setOpenSubmenu((cur) => (cur === link.label ? null : link.label))
              }
              aria-expanded={openSubmenu === link.label}
              className="flex w-full items-center justify-between gap-1 py-2.5 lowercase md:w-auto md:py-0"
            >
              {/* ASCII scramble-on-hover lives in Footer.tsx now — nav keeps the plain sweep fill.
                  group="trigger" keeps the fill lit while the mouse is anywhere over the open
                  panel below, not just this button — see group/trigger on the wrapping div. */}
              <SweepLabel group="trigger">
                <span className="inline-flex items-center gap-1.5">
                  {link.label}
                  <Chevron
                    className={`transition-transform ${
                      openSubmenu === link.label ? "-rotate-90" : "rotate-90"
                    } md:group-hover/trigger:-rotate-90 md:rotate-90`}
                  />
                </span>
              </SweepLabel>
            </button>

            {/* panel */}
            <div
              className={`${
                openSubmenu === link.label ? "flex" : "hidden"
              } flex-col pl-3 pb-1.5 md:flex md:absolute md:left-0 md:top-full md:origin-top md:pl-0 md:pb-0 md:invisible md:scale-95 md:opacity-0 md:pointer-events-none md:transition-[opacity,transform] md:duration-150 md:ease-out md:group-hover/trigger:visible md:group-hover/trigger:scale-100 md:group-hover/trigger:opacity-100 md:group-hover/trigger:pointer-events-auto md:group-focus-within/trigger:visible md:group-focus-within/trigger:scale-100 md:group-focus-within/trigger:opacity-100 md:group-focus-within/trigger:pointer-events-auto`}
            >
              <div className="md:min-w-52 md:bg-brand-blue md:text-white md:p-1.5 md:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]">
                {link.children.map((child) => {
                  const childClass = "group/item block py-2 md:py-1";
                  const childInner = (
                    <SweepLabel group="child">{child.label}</SweepLabel>
                  );
                  return child.external ? (
                    <a
                      key={child.href}
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={navigate}
                      className={childClass}
                    >
                      {childInner}
                    </a>
                  ) : (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={navigate}
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
            onClick={navigate}
          >
            <SweepLabel>{link.label}</SweepLabel>
          </Link>
        ),
      )}
    </nav>
  );
}
