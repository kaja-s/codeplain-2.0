"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import CodeplainLogo from "./logos/CodeplainLogo";
import NavMenu from "./NavMenu";
import { PrimaryButton, TertiaryButton } from "./Buttons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white px-16 max-md:px-6">
      <Container className="flex items-center justify-between h-17 max-w-328 px-0">
        <Link
          href="/"
          aria-label="codeplain home"
          className="block"
          onClick={close}
        >
          <CodeplainLogo variant="ink" />
        </Link>

        <NavMenu open={open} onNavigate={close} />

        <div className="hidden md:flex items-center gap-2.5">
          <TertiaryButton
            href="/get-started"
            className="px-2 py-2 text-sm font-mono lowercase"
          >
            Sign up
          </TertiaryButton>
          <PrimaryButton
            href="/book-a-demo"
            className="text-sm font-mono uppercase"
          >
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
  );
}
