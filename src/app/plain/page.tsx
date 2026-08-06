import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import { Terminal, TerminalPrompt } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Platform: Specs in. Production code out. | *codeplain",
  description:
    "*codeplain renders a ∗∗∗plain specification into production-ready code, validates it, and regenerates it whenever you need. No human in the loop.",
};

const COMPONENTS = [
  {
    name: "∗∗∗plain, the language",
    body: "Extends natural language with just enough structure to remove ambiguity. Express intent at any level of detail. Open source.",
    link: { href: "https://plainlang.org/", label: "plainlang.org →" },
  },
  {
    name: "The *codeplain renderer",
    body: "Renders a spec into working code and validates it against the renderer before returning it. Rendering runs on fast, low-cost models; research runs on frontier models.",
  },
  {
    name: "plain-forge",
    body: "Open-source agentic skills. Claude Code, Codex, and OpenCode use it to research APIs, draft specs, and maintain them incrementally, one feature at a time.",
    link: { href: "https://github.com/Codeplain-ai/plain-forge", label: "GitHub →" },
  },
  {
    name: "The workflow",
    body: "Start small. Each spec increment renders software you can run and check immediately. The conversation with the agent is the record of intent.",
  },
];

export default function Platform() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="The platform" title="Specs in. Production code out.">
          *codeplain renders a ∗∗∗plain specification into production-ready code, validates it, and regenerates it whenever you need. No human in the loop.
        </PageHero>

        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-5 mb-14">
              {COMPONENTS.map((c) => (
                <div key={c.name} className="border-[0.5px] border-line-2 rounded-3.5 p-6.5 bg-tint">
                  <h3 className="text-lg mb-2.5">{c.name}</h3>
                  <p className="text-text-body text-[14.5px] mb-2">{c.body}</p>
                  {c.link && (
                    <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-accent border-b border-accent pb-px">
                      {c.link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-xl mb-3">Get started</h2>
            <p className="text-text-body text-[15.5px] mb-5 max-w-[56ch]">
              50 rendering credits for new users. Install *codeplain on Windows, macOS, or Linux.
            </p>
            <Terminal label="terminal" className="mb-8">
              <TerminalPrompt>curl -fsSL https://codeplain.ai/install.sh | bash</TerminalPrompt>
            </Terminal>

            <div className="flex gap-3 flex-wrap">
              <Button href="/get-started" variant="primary">Get started</Button>
              <Button href="/learn/documentation" variant="ghost">Read the docs</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
