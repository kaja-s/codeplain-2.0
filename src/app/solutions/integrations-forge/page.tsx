import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import NumberedCard from "@/components/NumberedCard";
import { Terminal, TerminalPrompt, TerminalOk } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Integrations Forge — Build software integrations at scale | *codeplain",
  description:
    "Coding agents made writing integration code an order of magnitude faster. Integrations Forge makes it maintainable — build and run hundreds of integrations without drowning in upkeep.",
};

const CAPABILITIES = [
  "Already understand thousands of software products and APIs.",
  "Automatically discover and analyze API documentation.",
  "Validate APIs by writing and running test scripts.",
];

const PHOENIX_PRINCIPLES = [
  "Code should be regenerated, not maintained.",
  "Intent should be preserved in specs, not code.",
  "Review happens one level up.",
];

const SCALING_POINTS = [
  { title: "Preserved intent", body: "Intent is fully preserved in Plain specs, so you can regenerate code at any time." },
  { title: "Agentic skills", body: "Developers use agentic skills to write and maintain specs." },
  { title: "Production-ready", body: "The *codeplain renderer generates production-ready software from reviewed specs." },
];

const TEMPLATE_ITEMS = ["Reference docs", "Technical specs", "Testing & validation", "Data normalization"];

export default function IntegrationsForge() {
  return (
    <>
      <Header />

      <main>
        {/* hero */}
        <section className="pt-22 pb-16.5">
          <Container>
            <p className="font-mono text-sm text-accent mb-5">Integrations Forge</p>
            <h1 className="text-[clamp(34px,5.4vw,52px)] leading-[1.04] max-w-[16ch] mb-5.5">
              Building software integrations at scale.
            </h1>
            <p className="text-[clamp(17px,2.1vw,19px)] text-text-body max-w-[56ch] mb-8.5">
              Coding agents made writing integration code an order of magnitude faster. Integrations Forge makes it maintainable — so you can build and run hundreds of integrations without drowning in upkeep.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/book-a-demo" variant="primary">Book a demo</Button>
              <Button href="mailto:info@codeplain.ai?subject=Talk%20to%20sales" variant="ghost">Talk to sales</Button>
            </div>
          </Container>
        </section>

        {/* the shift */}
        <section className="pb-16.5">
          <Container>
            <SectionHead kicker="The shift" title="Coding agents have revolutionized integration development.">
              Coding agents like Claude Code and Codex:
            </SectionHead>
            <ul className="flex flex-col gap-3.5 -mt-8 mb-6">
              {CAPABILITIES.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px] text-navy leading-snug max-w-[56ch]">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-tint border-[0.5px] border-line-2 text-accent flex items-center justify-center text-xs mt-px">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-body text-lg max-w-[56ch]">
              Writing integration code is now an <strong className="text-navy font-medium">order of magnitude faster</strong> than before.
            </p>
          </Container>
        </section>

        {/* 10x problems */}
        <section className="pb-16.5">
          <Container>
            <SectionHead kicker="The problem" title="We're quickly learning the challenges of 10× code." />
            <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1 gap-5">
              <NumberedCard num="01" title="Review">Humans cannot review all AI-generated code.</NumberedCard>
              <NumberedCard num="02" title="Consistency">Inconsistent outputs from different engineers.</NumberedCard>
              <NumberedCard num="03" title="Cost">Using frontier models for code generation is expensive.</NumberedCard>
              <NumberedCard num="04" title="Cognitive debt">Engineers lose coding skills and accumulate cognitive debt.</NumberedCard>
            </div>
            <div className="mt-5 bg-navy rounded-3.5 px-7 py-5.5">
              <p className="text-white text-[17px]"><strong className="font-medium">10× code requires a shift in mindset.</strong></p>
            </div>
          </Container>
        </section>

        {/* phoenix architecture / POV */}
        <section className="py-24 max-[760px]:py-16.5 bg-tint border-y-[0.5px] border-line">
          <Container>
            <div aria-hidden="true" className="font-serif text-5xl leading-[0.5] text-accent mb-3.5">&ldquo;</div>
            <h2 className="text-[clamp(26px,3.8vw,40px)] leading-[1.12] max-w-[22ch] mb-6">
              Phoenix architecture: maintain specs, not code.
            </h2>
            <p className="text-text-body text-lg max-w-[56ch] mb-5">
              Phoenix architecture, introduced by Chad Fowler, is a shift in mindset:
            </p>
            <ul className="flex flex-col gap-3 mb-5">
              {PHOENIX_PRINCIPLES.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px] text-navy leading-snug max-w-[56ch]">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-white border-[0.5px] border-line-2 text-accent flex items-center justify-center text-xs mt-px">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-body text-lg max-w-[56ch] mb-6.5">
              Phoenix architecture lets coding agents focus on <strong className="text-navy font-medium">intent over implementation</strong>.
            </p>
            <a href="/why-codeplain" className="font-mono text-sm text-accent border-b border-accent pb-0.5">Read our point of view →</a>
          </Container>
        </section>

        {/* built on the platform */}
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <SectionHead kicker="How it works" title="Integrations Forge, built on the *codeplain platform.">
              Plain specs are the source of truth. Agentic skills evolve them; the *codeplain renderer turns them into working software.
            </SectionHead>
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-6">
              <div>
                <div className="font-mono text-xs text-accent mb-4">step 01</div>
                <h3 className="text-[19px] mb-2.5">Plain specs</h3>
                <p className="text-text-body text-[15px]">Developers and agents write and evolve <code className="font-mono">.plain</code> specs together — the durable source of truth for the integration.</p>
              </div>
              <div>
                <div className="font-mono text-xs text-accent mb-4">step 02</div>
                <h3 className="text-[19px] mb-2.5">Agentic skills</h3>
                <p className="text-text-body text-[15px]">Agents research APIs and docs, ask clarifying questions, and refine and evolve the spec.</p>
              </div>
              <div>
                <div className="font-mono text-xs text-accent mb-4">step 03</div>
                <h3 className="text-[19px] mb-2.5">*codeplain renderer</h3>
                <p className="text-text-body text-[15px]">Spec-driven code rendering turns the reviewed spec into working software.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* see it work */}
        <section className="pb-24 max-[760px]:pb-16.5">
          <Container>
            <SectionHead kicker="See it work" title="From a .plain file to a working integration.">
              In the demo, a developer asks for a HubSpot integration in Claude Code. The agent writes the spec, researches the HubSpot API, and renders it — the same workflow covers CRMs like HubSpot, Salesforce, Pipedrive, and Zoho.
            </SectionHead>
            <Terminal label="claude code">
              <TerminalPrompt symbol="›">I want to build a new integration for HubSpot. It should sync contacts.</TerminalPrompt>
              <TerminalOk>writing plain/hubspot.plain</TerminalOk>
              <TerminalOk>researching hubspot api</TerminalOk>
              <TerminalOk>drafting spec</TerminalOk>
              <TerminalOk withCursor>rendering code</TerminalOk>
            </Terminal>
          </Container>
        </section>

        {/* Incode testimonial */}
        <section className="py-24 max-[760px]:py-16.5 bg-tint border-y-[0.5px] border-line">
          <Container>
            <SectionHead kicker="Proof" title="Incode: from 2 weeks to 1 day per integration." className="mb-9">
              Incode integrates external identity and data providers — Sardine, Serpro, Mono-BVN, Telesign, and more. Each integration used to mean specifying the data to fetch, wrangling OpenAPI specs, setting up test accounts, and mapping vendor-specific data by hand. With Integrations Forge, every one of those specs renders against a shared integration template into production-ready code. The work dropped from about two weeks to a single day per integration.
            </SectionHead>
            <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1 gap-4 mb-10">
              {TEMPLATE_ITEMS.map((item) => (
                <div key={item} className="border-[0.5px] border-line rounded-3 p-4.5 bg-white">
                  <div className="font-medium text-[15.5px]">{item}</div>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="font-serif text-[46px] leading-[0.6] text-accent mb-4.5">&ldquo;</div>
            <blockquote className="text-[clamp(22px,3vw,28px)] font-medium leading-[1.4] tracking-tight max-w-[26ch] mb-7.5">
              *codeplain helped us seamlessly integrate our recent acquisition into Incode&apos;s platform, freeing developers from drudge work.
            </blockquote>
            <div className="flex items-center gap-3.25">
              <div aria-hidden="true" className="w-11.5 h-11.5 rounded-full bg-navy text-white flex items-center justify-center font-medium text-sm">JJ</div>
              <div>
                <div className="font-medium text-[15px]">Jovan Jovanović</div>
                <div className="font-mono text-[13px] text-[#5B6B8C]">CTO, Incode</div>
              </div>
            </div>
          </Container>
        </section>

        {/* scaling */}
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <SectionHead kicker="Scale" title="Scaling integrations development." />
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-5">
              {SCALING_POINTS.map((point) => (
                <div key={point.title} className="border-l-2 border-accent pl-5 py-1">
                  <h3 className="text-lg mb-2.5">{point.title}</h3>
                  <p className="text-text-body text-[14.5px]">{point.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border-[0.5px] border-line-2 rounded-3.5 px-7 py-6.5 bg-tint">
              <p className="text-text-body text-[15.5px]"><strong className="text-navy font-medium">Build and maintain hundreds of integrations with an AI-native development workflow.</strong></p>
            </div>
          </Container>
        </section>

        {/* get started */}
        <section className="pb-24 max-[760px]:pb-16.5">
          <Container>
            <SectionHead kicker="Get started" title="Render your first integration.">
              New users get 50 rendering credits. Install *codeplain on Windows, macOS, or Linux.
            </SectionHead>
            <Terminal label="terminal">
              <TerminalPrompt>curl -fsSL https://codeplain.ai/install.sh | bash</TerminalPrompt>
            </Terminal>
          </Container>
        </section>

        {/* final cta */}
        <section className="py-24 max-[760px]:py-16.5 bg-navy text-white text-center">
          <Container>
            <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.08] max-w-[18ch] mx-auto mb-7.5">
              Build and maintain hundreds of integrations.
            </h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button href="/book-a-demo" variant="onnavy">Book a demo</Button>
              <Button href="mailto:info@codeplain.ai?subject=Talk%20to%20sales" variant="onnavy-ghost">Talk to sales</Button>
            </div>
            <p className="font-mono mt-5.5 text-sm text-[#AEBBD6]">New users get 50 rendering credits.</p>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
