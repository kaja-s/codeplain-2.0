import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import NumberedCard from "@/components/NumberedCard";
import { Terminal, TerminalPrompt, TerminalOk } from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* hero */}
        <section className="pt-22 pb-23">
          <Container>
            <h1 className="text-[clamp(34px,5.4vw,52px)] leading-[1.04] max-w-[14ch] mb-5.5">
              Code should be regenerated, not maintained.
            </h1>
            <p className="text-[clamp(17px,2.1vw,19px)] text-text-body max-w-[56ch] mb-8.5">
              Plain is the source of truth. The *codeplain renderer turns it into production code with no human in the loop. When something breaks, you regenerate — you don&apos;t maintain.
            </p>
            <div className="flex flex-wrap gap-3 mb-11">
              <Button href="/platform" variant="primary">See the platform</Button>
              <Button href="/book-a-demo" variant="ghost">Book a demo</Button>
            </div>
            <Terminal label="terminal">
              <TerminalPrompt>npx plain-forge init</TerminalPrompt>
              <TerminalOk>researching api</TerminalOk>
              <TerminalOk>drafting spec</TerminalOk>
              <TerminalOk withCursor>rendering code</TerminalOk>
            </Terminal>
          </Container>
        </section>

        {/* credibility */}
        <div className="border-y-[0.5px] border-line bg-tint">
          <Container>
            <div className="flex flex-wrap items-center gap-x-13 gap-y-4 py-6.5">
              <span className="font-mono text-[11px] tracking-wide text-muted uppercase">
                Trusted by
              </span>
              <span className="text-[19px] font-medium tracking-tight text-[#8A97BC] hover:text-navy transition-colors">Incode</span>
              <span className="text-[19px] font-medium tracking-tight text-[#8A97BC] hover:text-navy transition-colors">DevRev</span>
              <span className="text-[19px] font-medium tracking-tight text-[#8A97BC] hover:text-navy transition-colors">Shovels.ai</span>
            </div>
          </Container>
        </div>

        {/* problem / wedge */}
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <SectionHead kicker="The problem" title="AI made code cheap. Maintaining it didn't.">
              Coding agents gave the industry 10× more code. Software is no longer limited by the cost of writing it — it&apos;s limited by the cost of maintaining it. The way out: make the spec the thing you keep, and the code something you can throw away.
            </SectionHead>
            <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-5">
              <div className="border-[0.5px] border-line rounded-3.5 p-7 bg-tint">
                <div className="font-mono text-xs text-muted mb-3.5">what you keep</div>
                <h3 className="text-xl mb-2.5">The spec</h3>
                <p className="text-text-body text-[15.5px]">A structured, human-readable description of how the software should behave. It&apos;s the source of truth — the thing you review, evolve, and maintain.</p>
              </div>
              <div className="border-[0.5px] border-line-2 rounded-3.5 p-7">
                <div className="font-mono text-xs text-muted mb-3.5">what&apos;s disposable</div>
                <h3 className="text-xl mb-2.5 text-muted">The code</h3>
                <p className="text-text-body text-[15.5px]">An implementation detail. Rendered from the spec on demand — and thrown away and regenerated when requirements change or something breaks.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* four-pillar value model */}
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <SectionHead kicker="The model" title="Specifications are the source of truth.">
              Four principles hold whatever you build on *codeplain.
            </SectionHead>
            <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1 gap-5">
              <NumberedCard num="01" title="Source of truth">Edit the spec, not the code. Intent lives in one place instead of scattered across an implementation.</NumberedCard>
              <NumberedCard num="02" title="Regenerate, don't maintain">Code is ephemeral. When requirements change or something breaks, re-render it from the spec.</NumberedCard>
              <NumberedCard num="03" title="Review one level up">Read what the software should do, not how. Specs are far easier to reason about than the code they produce.</NumberedCard>
              <NumberedCard num="04" title="Preserve provenance">The reasoning behind the software stays in the spec — not lost the moment someone hand-edits the output.</NumberedCard>
            </div>
          </Container>
        </section>

        {/* architecture reveal */}
        <section className="py-24 max-[760px]:py-16.5 bg-tint border-y-[0.5px] border-line">
          <Container>
            <SectionHead kicker="The platform" title="One platform. Purpose-built solutions on top.">
              *codeplain is the engine that turns specs into production code. Solutions are products built on it — aimed at the work that breaks most often.
            </SectionHead>

            <div className="bg-white border-[0.5px] border-[#C9D6F0] rounded-4 p-7 mb-4">
              <div className="font-mono text-[11px] tracking-wide text-muted uppercase mb-3.5">Foundation — the *codeplain platform</div>
              <h3 className="text-xl mb-1.5">Specs in. Production code out.</h3>
              <p className="text-text-body text-[15px] mb-5.5">Open by design, model-efficient, validated before a human ever sees it.</p>
              <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-4">
                <div className="border-[0.5px] border-line rounded-3 p-4.5 bg-tint">
                  <div className="font-medium text-[15.5px] mb-1.5"><a href="https://plainlang.org/" target="_blank" rel="noopener noreferrer" className="border-b border-accent text-accent">Plain</a></div>
                  <p className="text-text-body text-[13.5px]">The open-source specification language. Express intent at any level of detail.</p>
                </div>
                <div className="border-[0.5px] border-line rounded-3 p-4.5 bg-tint">
                  <div className="font-medium text-[15.5px] mb-1.5">*codeplain renderer</div>
                  <p className="text-text-body text-[13.5px]">Renders production code from reviewed specs and validates output before you see it.</p>
                </div>
                <div className="border-[0.5px] border-line rounded-3 p-4.5 bg-tint">
                  <div className="font-medium text-[15.5px] mb-1.5"><a href="https://github.com/Codeplain-ai/plain-forge" target="_blank" rel="noopener noreferrer" className="border-b border-accent text-accent">plain-forge</a></div>
                  <p className="text-text-body text-[13.5px]">Open-source agentic skills. Coding agents research, draft, and maintain specs, one feature at a time.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-[0.5px] border-line-2 rounded-4 p-7">
              <div className="font-mono text-[11px] tracking-wide text-muted uppercase mb-3.5">Built on the platform — solutions</div>
              <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-4">
                <a href="/solutions/integrations-forge" className="border-[0.5px] border-line rounded-3 p-5 bg-tint flex justify-between items-start gap-4">
                  <div>
                    <div className="font-medium text-base mb-1.5">Integrations Forge</div>
                    <p className="text-text-body text-[13.5px]">Build software integrations at scale. Regenerate when the upstream API changes.</p>
                  </div>
                  <span className="font-mono text-[11px] px-2.25 py-1 rounded-full whitespace-nowrap bg-[#E3ECFC] text-accent">available</span>
                </a>
                <a href="/solutions/web-scraping" className="border-[0.5px] border-line rounded-3 p-5 bg-tint flex justify-between items-start gap-4">
                  <div>
                    <div className="font-medium text-base mb-1.5">Web Scraping</div>
                    <p className="text-text-body text-[13.5px]">Scrapers that survive site changes by regenerating from the spec.</p>
                  </div>
                  <span className="font-mono text-[11px] px-2.25 py-1 rounded-full whitespace-nowrap bg-[#EEF1F7] text-muted">coming soon</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* differentiators */}
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <SectionHead kicker="Why it's different" title="No black box, no lock-in." />
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-5">
              <div className="border-l-2 border-accent pl-5 py-1">
                <h3 className="text-lg mb-2.5">Open by default</h3>
                <p className="text-text-body text-[14.5px]">Plain and plain-forge are open source. Read the language and the tooling — nothing is hidden.</p>
              </div>
              <div className="border-l-2 border-accent pl-5 py-1">
                <h3 className="text-lg mb-2.5">Model-efficient</h3>
                <p className="text-text-body text-[14.5px]">Generating specs uses 5–10× fewer tokens. Cheap, fast models do generation; frontier models do research.</p>
              </div>
              <div className="border-l-2 border-accent pl-5 py-1">
                <h3 className="text-lg mb-2.5">Not framework-locked</h3>
                <p className="text-text-body text-[14.5px]">Regenerate to the stack you need. The spec outlives any single implementation.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* POV band */}
        <section className="py-24 max-[760px]:py-16.5 bg-tint border-y-[0.5px] border-line">
          <Container>
            <div aria-hidden="true" className="font-serif text-5xl leading-[0.5] text-accent mb-3.5">&ldquo;</div>
            <h2 className="text-[clamp(26px,3.8vw,40px)] leading-[1.12] max-w-[20ch] mb-6">The spec is the asset. The code is ash.</h2>
            <p className="text-text-body text-lg max-w-[56ch] mb-6.5">
              This is the bet behind phoenix architecture — the model coined by Chad Fowler that *codeplain is built on. As implementation becomes cheap to generate, the durable layer of software moves up into specifications and intent, and the code becomes something you regenerate on demand — like a phoenix from its own ashes.
            </p>
            <a href="/why-codeplain" className="font-mono text-sm text-accent border-b border-accent pb-0.5">Read our point of view →</a>
          </Container>
        </section>

        {/* testimonial */}
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <div className="text-[clamp(30px,5vw,52px)] font-medium tracking-tight text-navy leading-[1.05] mb-2">
              From 2 weeks to 1 day <span className="text-accent">per integration.</span>
            </div>
            <div className="font-mono text-xs tracking-wide uppercase text-muted mb-9.5">Incode · Integrations Forge</div>
            <div aria-hidden="true" className="font-serif text-[46px] leading-[0.6] text-accent mb-4.5">&ldquo;</div>
            <blockquote className="text-[clamp(22px,3vw,28px)] font-medium leading-[1.4] tracking-tight max-w-[24ch] mb-7.5">
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

        {/* how it works */}
        <section className="pb-24 max-[760px]:pb-16.5">
          <Container>
            <SectionHead kicker="How it works" title="Write it once. Regenerate as often as you need." />
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-6 mb-11">
              <div>
                <div className="font-mono text-xs text-accent mb-4">step 01</div>
                <h3 className="text-[19px] mb-2.5">Draft the spec</h3>
                <p className="text-text-body text-[15px]">Developers use agentic skills to research APIs, ask clarifying questions, and evolve the spec — one feature at a time.</p>
              </div>
              <div>
                <div className="font-mono text-xs text-accent mb-4">step 02</div>
                <h3 className="text-[19px] mb-2.5">Render the code</h3>
                <p className="text-text-body text-[15px]">The *codeplain renderer generates production-ready software from the reviewed spec and validates it before you see it.</p>
              </div>
              <div>
                <div className="font-mono text-xs text-accent mb-4">step 03</div>
                <h3 className="text-[19px] mb-2.5">When it breaks, regenerate</h3>
                <p className="text-text-body text-[15px]">An upstream change breaks the code, not the spec. Rebuild from the same spec instead of patching.</p>
              </div>
            </div>
            <div className="border-[0.5px] border-line-2 rounded-3.5 px-7 py-6.5 bg-tint">
              <p className="text-text-body text-[15.5px] max-w-[70ch]">
                Because specs encode intent rather than implementation, coding agents that generate them use <strong className="text-navy font-medium">5–10× fewer tokens</strong> and can hold larger problems in a single context window. *codeplain runs generation on faster, cheaper models and saves frontier models for research. Think of the TypeScript compiler: let the specialized tool do the translation, and let the frontier model do what it&apos;s good at.
              </p>
            </div>
          </Container>
        </section>

        {/* resources */}
        <section className="pb-24 max-[760px]:pb-16.5">
          <Container>
            <SectionHead kicker="Go deeper" title="Read the thinking, and the code." />
            <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1 gap-4.5">
              <a href="https://thenewstack.io/codeplain-spec-driven-regenerative-code/" target="_blank" rel="noopener noreferrer" className="block border-[0.5px] border-line-2 rounded-3.5 p-5.5 hover:border-[#C9D6F0] hover:-translate-y-0.5 transition-[border-color,transform]">
                <div className="font-mono text-[11px] tracking-wide uppercase text-muted mb-3.5">Article</div>
                <h3 className="text-base leading-[1.3] mb-2">Code should be regenerated, not maintained</h3>
                <span className="font-mono text-[13px] text-accent">The New Stack →</span>
              </a>
              <a href="https://aicoding.leaflet.pub/" target="_blank" rel="noopener noreferrer" className="block border-[0.5px] border-line-2 rounded-3.5 p-5.5 hover:border-[#C9D6F0] hover:-translate-y-0.5 transition-[border-color,transform]">
                <div className="font-mono text-[11px] tracking-wide uppercase text-muted mb-3.5">Essays</div>
                <h3 className="text-base leading-[1.3] mb-2">Regenerative Software &amp; the Phoenix Architecture</h3>
                <span className="font-mono text-[13px] text-accent">Read the series →</span>
              </a>
              <a href="https://github.com/Codeplain-ai/plain-forge" target="_blank" rel="noopener noreferrer" className="block border-[0.5px] border-line-2 rounded-3.5 p-5.5 hover:border-[#C9D6F0] hover:-translate-y-0.5 transition-[border-color,transform]">
                <div className="font-mono text-[11px] tracking-wide uppercase text-muted mb-3.5">Open source</div>
                <h3 className="text-base leading-[1.3] mb-2">plain-forge on GitHub</h3>
                <span className="font-mono text-[13px] text-accent">View the repo →</span>
              </a>
              <a href="https://plainlang.org/" target="_blank" rel="noopener noreferrer" className="block border-[0.5px] border-line-2 rounded-3.5 p-5.5 hover:border-[#C9D6F0] hover:-translate-y-0.5 transition-[border-color,transform]">
                <div className="font-mono text-[11px] tracking-wide uppercase text-muted mb-3.5">Language</div>
                <h3 className="text-base leading-[1.3] mb-2">The Plain specification language</h3>
                <span className="font-mono text-[13px] text-accent">plainlang.org →</span>
              </a>
            </div>
          </Container>
        </section>

        {/* final cta */}
        <section className="py-24 max-[760px]:py-16.5 bg-navy text-white text-center">
          <Container>
            <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.08] max-w-[18ch] mx-auto mb-7.5">
              Stop maintaining code you never wanted to keep.
            </h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button href="/book-a-demo" variant="onnavy">Book a demo</Button>
              <Button href="/platform" variant="onnavy-ghost">See the platform</Button>
            </div>
            <p className="font-mono mt-5.5 text-sm text-[#AEBBD6]">New users get 50 rendering credits.</p>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
