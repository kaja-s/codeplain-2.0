import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { Terminal, TerminalPrompt } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Get started | *codeplain",
  description: "New users get 50 rendering credits. Install *codeplain on Windows, macOS, or Linux.",
};

export default function GetStarted() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Get started" title="Render your first spec.">
          New users get 50 rendering credits. Install *codeplain on Windows, macOS, or Linux.
        </PageHero>

        <section className="pb-20">
          <Container>
            <Terminal label="terminal" className="mb-4">
              <TerminalPrompt>curl -fsSL https://codeplain.ai/install.sh | bash</TerminalPrompt>
            </Terminal>
            <p className="text-text-body text-[15px] mb-8">Or go to codeplain.ai.</p>

            <div className="flex flex-col gap-2.5">
              <a href="/learn/docs" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Read the docs →</a>
              <a href="https://github.com/Codeplain-ai/plain-forge" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">plain-forge on GitHub →</a>
              <a href="https://plainlang.org/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Plain at plainlang.org →</a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
