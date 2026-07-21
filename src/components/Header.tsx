"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";

const NAV_LINKS = [
  { href: "/why-codeplain", label: "Why *codeplain" },
  { href: "/solutions", label: "Solutions" },
  { href: "/platform", label: "Platform" },
  { href: "/learn", label: "Learn" },
  { href: "/company/about", label: "Company" },
];

export default function Header({
  showAnnouncement = true,
  showBookDemoCta = true,
}: {
  showAnnouncement?: boolean;
  showBookDemoCta?: boolean;
}) {
  const [open, setOpen] = useState(false);

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
          <Link href="/" aria-label="codeplain home" className="block">
            <Logo />
          </Link>

          <nav
            className={`${open ? "flex flex-col items-start absolute top-17 inset-x-0 bg-white border-b-[0.5px] border-line px-[22px] py-5.5 gap-4.5" : "hidden"} text-[14.5px] text-[#2E3C63] min-[761px]:flex min-[761px]:flex-row min-[761px]:items-center min-[761px]:static min-[761px]:bg-transparent min-[761px]:border-none min-[761px]:p-0 min-[761px]:gap-7`}
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden min-[761px]:flex items-center gap-2.5">
            {showBookDemoCta && (
              <Button href="/book-a-demo" variant="ghost" className="!px-4 !py-2 !text-sm">
                Book a demo
              </Button>
            )}
            <Button href="/get-started" variant="primary" className="!px-4 !py-2 !text-sm">
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
