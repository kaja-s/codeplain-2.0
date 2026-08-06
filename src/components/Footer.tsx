import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import NewsletterSignup from "./NewsletterSignup";

const COLUMNS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "About",
    links: [
      { href: "/plain", label: "Why Plain" },
      { href: "/codeplain", label: "Why Codeplain" },
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
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-[#AEBBD6] pt-16 pb-10">
      <Container>
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] max-[900px]:grid-cols-2 gap-8 pb-11 border-b-[0.5px] border-white/10">
          <div>
            <Logo variant="white" height={20} />
            <p className="text-sm text-[#8493B4] max-w-[30ch] mt-4 mb-6">
              Fully automated spec-driven development. The spec is the source of truth; the code regenerates.
            </p>
            <NewsletterSignup />
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] tracking-wide uppercase text-[#7C8AAB] font-normal mb-4">
                {col.title}
              </h4>
              {col.links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[#C4CFE6] hover:text-white mb-2.5"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-[#C4CFE6] hover:text-white mb-2.5"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-6.5 text-[13px] text-[#7C8AAB] flex-wrap gap-3.5">
          <span>© 2026 *codeplain. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/legal/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms</Link>
            <Link href="/legal/cookies" className="hover:text-white">Cookies</Link>
            <span className="h-3.5 w-px bg-white/15" aria-hidden="true" />
            <a
              href="https://github.com/Codeplain-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
