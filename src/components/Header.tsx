"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";

type NavChild = { href: string; label: string; external?: boolean };
type NavItem = { href: string; label: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { href: "/plain", label: "Why Plain" },
  { href: "/codeplain", label: "Why Codeplain" },
  {
    href: "/solutions",
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

export default function Header({
  showAnnouncement = true,
  showBookDemoCta = true,
}: {
  showAnnouncement?: boolean;
  showBookDemoCta?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      {showAnnouncement && (
        <div className="bg-navy text-[#DCE4F5] text-center text-[13.5px] px-4 py-2.5">
          <span className="font-mono text-accent-bright mr-2">news</span>
          *codeplain raises $3M around a bet on Phoenix Architecture.{" "}
          <a
            href="https://blog.codeplain.ai/p/codeplain-raises-3m-around-a-bet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-b border-white/40 pb-px"
          >
            Read the announcement →
          </a>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md backdrop-saturate-[180%] border-b-[0.5px] border-line">
        <Container className="flex items-center justify-between h-17">
          <Link href="/" aria-label="codeplain home" className="block" onClick={close}>
            <Logo />
          </Link>

          <nav
            className={`${open ? "flex flex-col items-stretch absolute top-17 inset-x-0 bg-white border-b-[0.5px] border-line px-[22px] py-5.5 gap-1" : "hidden"} text-[14.5px] text-[#2E3C63] min-[761px]:flex min-[761px]:flex-row min-[761px]:items-center min-[761px]:static min-[761px]:bg-transparent min-[761px]:border-none min-[761px]:p-0 min-[761px]:gap-7`}
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="group relative min-[761px]:flex min-[761px]:items-center"
                >
                  {/* trigger — desktop dropdown / mobile accordion */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSubmenu((cur) => (cur === link.label ? null : link.label))
                    }
                    aria-expanded={openSubmenu === link.label}
                    className="flex w-full items-center justify-between gap-1 py-2.5 lowercase min-[761px]:w-auto min-[761px]:py-0 hover:text-navy min-[761px]:group-hover:text-navy"
                  >
                    {link.label}
                    <Chevron
                      className={`transition-transform ${
                        openSubmenu === link.label ? "rotate-180" : ""
                      } min-[761px]:group-hover:rotate-180 min-[761px]:rotate-0`}
                    />
                  </button>

                  {/* panel */}
                  <div
                    className={`${
                      openSubmenu === link.label ? "flex" : "hidden"
                    } flex-col pl-3 pb-1.5 min-[761px]:flex min-[761px]:absolute min-[761px]:left-0 min-[761px]:top-full min-[761px]:origin-top min-[761px]:pt-2.5 min-[761px]:pl-0 min-[761px]:pb-0 min-[761px]:invisible min-[761px]:scale-95 min-[761px]:opacity-0 min-[761px]:pointer-events-none min-[761px]:transition-[opacity,transform] min-[761px]:duration-150 min-[761px]:ease-out min-[761px]:group-hover:visible min-[761px]:group-hover:scale-100 min-[761px]:group-hover:opacity-100 min-[761px]:group-hover:pointer-events-auto min-[761px]:group-focus-within:visible min-[761px]:group-focus-within:scale-100 min-[761px]:group-focus-within:opacity-100 min-[761px]:group-focus-within:pointer-events-auto`}
                  >
                    <div className="min-[761px]:min-w-52 min-[761px]:rounded-2xl min-[761px]:border-[0.5px] min-[761px]:border-line min-[761px]:bg-white min-[761px]:p-1.5 min-[761px]:shadow-[0_12px_32px_-12px_rgba(20,33,68,0.22)]">
                      {link.children.map((child) => {
                        const childClass =
                          "block py-2 min-[761px]:rounded-lg min-[761px]:px-3 min-[761px]:py-2 hover:text-navy min-[761px]:hover:bg-tint";
                        return child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={close}
                            className={childClass}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={close}
                            className={childClass}
                          >
                            {child.label}
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
                  className="py-2.5 lowercase min-[761px]:py-0 hover:text-navy"
                  onClick={close}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden min-[761px]:flex items-center gap-2.5">
            {showBookDemoCta && (
              <Button href="/book-a-demo" variant="ghost" className="!px-4 !py-2 !text-sm">
                Book a demo
              </Button>
            )}
            <Button href="https://platform.codeplain.ai/" external variant="primary" className="!px-4 !py-2 !text-sm">
              Get started
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="min-[761px]:hidden border-[0.5px] border-line-2 rounded-lg px-2.5 py-2"
          >
            <span className="block w-4.5 h-0.5 bg-navy my-0.75" />
            <span className="block w-4.5 h-0.5 bg-navy my-0.75" />
            <span className="block w-4.5 h-0.5 bg-navy my-0.75" />
          </button>
        </Container>
      </header>
    </>
  );
}
