import Link from "next/link";
import Container from "./Container";
import CodeplainLogo from "./logos/CodeplainLogo";
import NewsletterSignup from "./NewsletterSignup";
import { ScrambleLabel } from "./ScrambleLabel";
import Paragraph from "./Paragraph";

type FooterLink = { href: string; label: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    title: "About",
    links: [
      { href: "/#why-plain", label: "Why Plain" },
      { href: "/#why-codeplain", label: "Why Codeplain" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/integrations-forge", label: "Integrations Forge" },
      { href: "/solutions/web-scraper", label: "Web Scraper" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/learn/documentation", label: "Documentation" },
      { href: "/learn/resources", label: "Resources" },
      { href: "/learn/blog", label: "Blog" },
      { href: "/learn/events", label: "Events" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company/press", label: "Press" },
      { href: "/company/contact", label: "Contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      {
        href: "https://www.linkedin.com/company/codeplain/",
        label: "LinkedIn",
        external: true,
      },
      {
        href: "https://github.com/Codeplain-ai",
        label: "GitHub",
        external: true,
      },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/cookies", label: "Cookies" },
];

const linkClass =
  "group/item block py-1.5 font-mono text-[13px] uppercase tracking-wide text-ink/70";

function FooterLinkItem({ link }: { link: FooterLink }) {
  const inner = <ScrambleLabel text={link.label} />;
  return link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {inner}
    </a>
  ) : (
    <Link href={link.href} className={linkClass}>
      {inner}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-ink-muted border-t border-black/10 pt-16 pb-10">
      <Container>
        <div className="mb-10">
          <CodeplainLogo variant="ink" height={20} />
          <Paragraph size="small" className="text-ink-muted max-w-[30ch] mt-4 mb-6">
            Fully automated spec-driven development. The spec is the source of truth; the code regenerates.
          </Paragraph>
          <NewsletterSignup />
        </div>

        <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-8 bg-black/3 rounded-2xl p-8 mb-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] tracking-wide uppercase text-black/40 font-normal mb-4">
                [{col.title}]
              </h4>
              {col.links.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-6.5 border-t border-black/10 text-[13px] text-black/40 flex-wrap gap-3.5">
          <span>© 2026 *codeplain. All rights reserved.</span>
          <div className="flex items-center gap-5 font-mono uppercase tracking-wide">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="group/item">
                <ScrambleLabel text={link.label} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
