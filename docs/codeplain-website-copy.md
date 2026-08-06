# *codeplain — Website Copy

A page-by-page copy deck, driven by the Integrations Forge sales pitch (July 2026). The homepage is **synced to the built `index.html`**. Sub-pages are **draft** copy. Facts confirmed by the deck are now unmarked; anything still open is flagged `[confirm: …]`.

---

## Voice & tone

- Direct and engineer-facing. Say what something does; don't sell it.
- Sentence case for headings. Active voice. Plain verbs, no filler.
- **Structure follows the Redpanda architecture** (see the site-outline doc). The July 2026 pitch deck is *reinforcement* — its facts, metrics, quotes, and phrasing (10× code, phoenix architecture, the Incode numbers) drop into the Redpanda sections; they don't reshape them. Deck-only material that doesn't fit a homepage slot lives on the Integrations Forge page instead.

## Brand vocabulary (from the pitch — hold consistently)

- **\*codeplain** — the company and platform. **Decision: write it with the mark (`*codeplain`) in all body copy**, including sentence starts and nav labels. Exceptions where the mark is dropped: URLs (`codeplain.ai`, `/codeplain`), the email (`info@codeplain.ai`), the GitHub org (`Codeplain-ai`), the social handle (`@codeplain`), and accessibility labels (a screen reader would read the asterisk aloud as "star").
- **Plain** (the specification language) — left as **Plain** for now. The deck styles it `***plain` (files end `.plain`). `[confirm: apply the ***plain mark to the language too? — say the word and I'll sweep it the same way]`
- **the *codeplain renderer** — the engine. It **renders** production-ready code from reviewed specs. "Rendering credits" are the unit of usage.
- **phoenix architecture** — the mindset, introduced by **Chad Fowler**: regenerate code, don't maintain it; preserve intent in specs; review one level up.
- Recurring phrases worth reusing: *intent over implementation*, *review happens one level up*, *cognitive debt*, *AI-native development workflow*, *building software integrations at scale*.

---

## Navigation (site tree)

Top-level items are the nav bar. Indented items are dropdown children. The two CTAs sit on the right of the bar. Utility pages aren't in the nav.

```
/
├── Why Plain               /plain
├── Why Codeplain           /codeplain
├── Solutions          ▾    /solutions
│   ├── Integrations Forge   /solutions/integrations-forge    ● available
│   └── Web Scraper          /solutions/web-scraper           ○ coming soon
├── Learn              ▾    /learn
│   ├── Documentation        /learn/documentation
│   ├── Resources            /learn/resources
│   ├── Blog                 /learn/blog
│   └── Events               /learn/events
└── Company            ▾    /company
    ├── Press                /company/press
    └── Contact              /company/contact

CTAs  (right of the bar)
├── Book a demo             /book-a-demo
└── Get started             /get-started        [primary]

Not in nav (still live, linkable by URL)
├── About                   /company/about
├── Customers               /company/customers
├── Careers                 /company/careers
├── Privacy Policy          /legal/privacy
├── Terms of Service        /legal/terms
├── Cookie Policy           /legal/cookies
└── 404                     /404

Footer (mirrors the main nav, plus)
├── Legal — Privacy Policy · Terms of Service · Cookie Policy
├── Social — GitHub `[confirm: LinkedIn/other social URLs — not added, unconfirmed]`
└── Newsletter signup `[note: static front-end mock — wire to a real list provider before launch]`
```

---

## Homepage `/` — SYNCED TO BUILD

**Announcement bar**
> `news` — *codeplain raises $3M around a bet on Phoenix Architecture. Read the announcement → (blog.codeplain.ai/p/codeplain-raises-3m-around-a-bet)

**Nav bar (top level):** Why *codeplain · Platform · Solutions · Learn · Company — plus **Book a demo** and **Get started** buttons. Full structure in the Navigation tree above.

### Hero
- **H1:** AI writes Code. Humans write Intent.
- **Subhead:** Codeplain puts your team back in control of agentic coding through specification-driven development.
- **Buttons:** Learn more · Talk to us
- **Visual — before/after, spec as the control point:**
  - Before (prompt-driven): one prompt, a different result each time · steering lives in someone's head, or a Slack thread · reviewers read code line by line, after it's written.
  - After (spec-driven): one spec, the same result every time · steering lives in a file the whole team can read · reviewers read the spec, before a line is written.
  - Divider badge: "the spec is the control point"

### Credibility strip
- **Trusted by (logo wall):** Incode · DevRev · Shovels.ai `[note: rendered as typographic wordmarks in the site's own type, not the companies' official logo files — swap in real SVGs if/when available, and confirm each is cleared to display]`
- Backed by — GapMinder VC (lead) · Silicon Gardens
- Featured in — The New Stack
- Design partner — Incode

### The problem — the wedge
- **Kicker:** The problem
- **H2:** AI made code cheap. Maintaining it didn't.
- **Intro:** Coding agents gave the industry 10× more code. Software is no longer limited by the cost of writing it — it's limited by the cost of maintaining it. The way out: make the spec the thing you keep, and the code something you can throw away. *(Deck reinforcement: the four "challenges of 10× code" — review, consistency, cost, cognitive debt — are used in full on the Integrations Forge page rather than here.)*
- **Card A — what you keep / The spec:** A structured, human-readable description of how the software should behave. It's the source of truth — the thing you review, evolve, and maintain.
- **Card B — what's disposable / The code:** An implementation detail. Rendered from the spec on demand — and thrown away and regenerated when requirements change or something breaks.

### Section 1 — The Promise
- **Kicker:** The promise
- **H2:** Control at Speed
- **Intro:** Without Integrations Forge, agentic coding is prone to uneven results across developers and we attempt to fix it with more code reviews. You never see the 10x productivity that AI claims.
- **Collapse the Generation Loop** — Move steering out of a prompt and into a spec. You write it once, uniquely for your use case. Days compress to hours.
- **Review Specs, Not Code** — Catch problems before a single line is written. Gain shared understanding and peace of mind earlier in the process.
- **Maintenance Gets Easier** — Updating specs focuses on behavior and boundaries, not syntax. Upgrading frameworks no longer requires understanding implementation details.

### Section 2 — Solutions
- **Kicker:** Solutions
- **H2:** Built for Scaling AI Coding
- **Subhead:** Whether you're building integrations or automating data work, Codeplain gives you the tools to do it reliably.
- **Integrations Forge** — icon: connection nodes / API handshake. Copy: Ship integrations faster, maintain them with confidence. CTA: Explore Integrations Forge.
- **Web Scraper** — icon: web crawl / data extraction. Copy: Automate web data work safely and reliably. CTA: Explore Web Scraper.

### Section 3 — Why It Works
- **Kicker:** Why it works
- **H2:** Specs Drive Everything
- **Subhead:** Plain is the specification language that gives structure to agentic coding.
- **Specifications Are Maintainable** — Code blends requirements with implementation. Specs separate behavior and boundaries from preferences and library specifics.
- **Reusable Across Teams** — Without standardization, developers invent their own tools. Plain makes agentic coding a team sport.
- **Automatic Validation** — Specs enable automatic code validation against intent. Catch subtle bugs during spec review, not production.

### Point of view
- **H2:** The spec is the asset. The code is ash.
- **Body:** This is the bet behind phoenix architecture — the model coined by Chad Fowler that *codeplain is built on. As implementation becomes cheap to generate, the durable layer of software moves up into specifications and intent, and the code becomes something you regenerate on demand — like a phoenix from its own ashes.
- **Link:** Read our point of view →

### Section 4 — Proof
- **Kicker:** Proof
- **H2:** 14× Faster. Same Quality. Full Control.
- **Subhead:** Incode Technologies scaled from 20 to 200 integrations while maintaining safety and consistency.
- **Customer quote:** Codeplain is helping us seamlessly integrate our recent acquisition into Incode's platform, freeing developers from drudge work. — Jovan Jovanović, CTO, Incode `[confirm: name spelling]`
- **Ecosystem quote:** The bigger payoff comes when fixing and maintaining happens in the background and your teams can focus on building. That's when you start doing things that weren't even in range before. — Boris Cherny, creator of Claude Code
- **Key metrics:** ⚡ 2 weeks → 1 day per integration · 📋 Code reviews → Spec reviews (caught earlier) · 🔄 Manual API updates → Automatic updates · 👥 Ad-hoc workflows → Unified spec-driven process

### How it works
- **Kicker:** How it works
- **H2:** Write it once. Regenerate as often as you need.
- **Step 01 — Draft the spec:** Developers use agentic skills (plain-forge) to research APIs, ask clarifying questions, and evolve the spec — one feature at a time.
- **Step 02 — Render the code:** The *codeplain renderer generates production-ready software from the reviewed spec and validates it before you see it.
- **Step 03 — When it breaks, regenerate:** An upstream change breaks the code, not the spec. Re-render from the same spec instead of patching.
- **Proof:** Because specs encode intent rather than implementation, generating them uses 5–10× fewer tokens and holds larger problems in a single context window. *codeplain renders on faster, cheaper models and saves frontier models for research. Think of the TypeScript compiler: let the specialized tool do the translation, and let the frontier model do what it's good at.

### Go deeper
- **H2:** Read the thinking, and the code.
- Article — Code should be regenerated, not maintained → The New Stack
- Essays — Regenerative Software & the Phoenix Architecture → Read the series
- Open source — plain-forge on GitHub → View the repo
- Language — The Plain specification language → plainlang.org

### Section 5 — Final CTA
- **H2:** Put your team back in control.
- **Primary:** Get Started with Integrations Forge (→ /solutions/integrations-forge)
- **Secondary:** Explore the Documentation (→ /learn/documentation)
- **Tertiary:** Schedule a Demo (→ /book-a-demo)

### Footer
- **Tagline:** Fully automated spec-driven development. The spec is the source of truth; the code regenerates.
- Platform · Solutions · Learn · Company · Legal
- info@codeplain.ai · LinkedIn @codeplain · GitHub
- © 2026 *codeplain. All rights reserved.

---

## `/solutions/integrations-forge` — DRAFT, follows the pitch arc (sales landing / secondary goal)

- **Eyebrow:** integrations forge
- **H1:** Building software integrations at scale.
- **Subhead:** Coding agents made writing integration code an order of magnitude faster. Integrations Forge makes it maintainable — so you can build and run hundreds of integrations without drowning in upkeep.

**Coding agents changed integration work**
Coding agents like Claude Code and Codex already understand thousands of software products and APIs. They discover and analyze API documentation on their own, and validate APIs by writing and running test scripts. Writing integration code is now an order of magnitude faster than before.

**But 10x code brings new problems**
- Humans can't review everything the agents generate.
- Outputs are inconsistent from one engineer to the next.
- Running frontier models for code generation is expensive.
- Engineers lose coding skills and accumulate cognitive debt.

10× code requires a shift in mindset.

**The mindset: maintain specs, not code**
Phoenix architecture, introduced by Chad Fowler, is that shift: code should be regenerated, not maintained; intent should be preserved in specs, not code; and review happens one level up. It lets coding agents focus on intent over implementation.

**Integrations Forge, built on the *codeplain platform**
Developers work with agentic skills that research APIs and docs, ask clarifying questions, and refine and evolve the spec. The result is a set of Plain specs. The *codeplain renderer turns those reviewed specs into working software — and re-renders them whenever you need.

**See it work**
In the demo, a developer builds a HubSpot integration by describing it in a `.plain` file and letting the agent research, draft, and validate it. The same workflow covers CRMs like HubSpot, Salesforce, Pipedrive, and Zoho. `[confirm: which integrations to feature publicly]`

**Incode: from 2 weeks to 1 day per integration**
Incode integrates external identity and data providers — Sardine, Serpro, Mono-BVN, Telesign, and more. Each integration used to mean specifying the data to fetch, wrangling OpenAPI specs, setting up test accounts, and mapping vendor-specific data by hand. With Integrations Forge, each spec renders against a shared integration template — reference docs, technical specs, testing and validation, and data normalization — into production-ready integration code. The work dropped from about two weeks to a single day per integration.
> *codeplain helped us seamlessly integrate our recent acquisition into Incode's platform, freeing developers from drudge work.
> — Jovan Jovanović, CTO, Incode

**Scaling integrations development**
- Intent is fully preserved in Plain specs, so you can regenerate code at any time.
- Developers use agentic skills to write and maintain specs.
- The *codeplain renderer generates production-ready software from reviewed specs.

Build and maintain hundreds of integrations with an AI-native development workflow.

**Get started**
New users get 50 rendering credits. Install *codeplain on Windows, macOS, or Linux:
```
curl -fsSL https://codeplain.ai/install.sh | bash
```
Or go to codeplain.ai.

- **CTA:** Book a demo · Talk to sales

---

## `/codeplain` — DRAFT (platform pillar / VC + technical buyer)

- **Eyebrow:** our point of view
- **H1:** Code should be regenerated, not maintained.
- **Subhead:** Coding agents made code cheap and fast. That inverts decades of assumptions about what a software team should actually own and maintain.

**The shift**
Generating code is now an order of magnitude faster. What stays expensive is everything after: reviewing it, keeping outputs consistent, paying frontier-model prices to produce it, and the cognitive debt engineers take on when they stop understanding what runs. 10× code requires a shift in mindset.

**Phoenix architecture**
Introduced by Chad Fowler: regenerate code instead of maintaining it, keep intent in the spec instead of the implementation, and review one level up. *codeplain is where that mindset becomes a production system — the renderer turns reviewed Plain specs into production code, with no human in the loop.

**The economics**
Specs encode intent, not implementation, so generating them takes 5–10× fewer tokens and larger problems fit in a single context window. *codeplain renders on fast, inexpensive models and reserves frontier models for research. `[confirm: current model split]`

**Proof**
Incode cut integration work from about two weeks to a single day per integration, folding a recent acquisition into its platform without pulling developers onto drudge work.

**Where we're going**
*codeplain is a platform, and solutions are built on top of it: Integrations Forge today, Web Scraping next, more to follow.

- **CTA:** Book a demo · See the platform

---

## `/plain` — DRAFT (deep technical / engineer)

- **Eyebrow:** the platform
- **H1:** Specs in. Production code out.
- **Subhead:** *codeplain renders a Plain specification into production-ready code, validates it, and regenerates it whenever you need. No human in the loop.

**Plain, the language** — Extends natural language with just enough structure to remove ambiguity. Express intent at any level of detail. Open source. → plainlang.org

**The *codeplain renderer** — Renders a spec into working code and validates it against the renderer before returning it. Rendering runs on fast, low-cost models; research runs on frontier models. `[confirm: technical specifics to publish]`

**plain-forge** — Open-source agentic skills. Claude Code, Codex, and OpenCode use it to research APIs, draft specs, and maintain them incrementally — one feature at a time. → GitHub

**The workflow** — Start small. Each spec increment renders software you can run and check immediately. The conversation with the agent is the record of intent.

**Get started** — 50 rendering credits for new users. `curl -fsSL https://codeplain.ai/install.sh | bash` (Windows, macOS, Linux).

- **CTA:** Get started · Read the docs

---

## `/solutions` — DRAFT (hub)

- **H1:** Purpose-built solutions on the *codeplain platform.
- **Intro:** The renderer can produce almost anything from a spec. Solutions are products we've built on it for the work that breaks most often.
- **Integrations Forge** `available` — Building software integrations at scale. → Learn more
- **Web Scraping** `coming soon` — Scrapers that survive site changes. → Get notified
- **CTA:** Book a demo

---

## `/solutions/web-scraper` — DRAFT (coming soon)

- **H1:** Scrapers that don't break when the site does.
- **Subhead:** Same idea as Integrations Forge, pointed at the web. Describe what to extract in a Plain spec; regenerate the scraper when the page changes. Coming soon.
- **Capture:** Get notified when Web Scraping is available. → [email] → Notify me
- **Link:** In the meantime, see Integrations Forge →

---

## `/book-a-demo` — BUILT (follows Redpanda's /demo architecture)

Minimal header (logo + Get started only, no full nav) — this is a conversion page, not a browsing page.

- **H1:** See *codeplain in action.
- **Lead:** In your 30-minute personal demo, you'll learn how *codeplain:
- **Bullets:**
  - Renders production-ready integrations from a Plain spec — no human in the loop.
  - Regenerates code from the same spec the moment an upstream API changes, instead of patching by hand.
  - Keeps review at the spec level, so intent stays readable even as the implementation is rebuilt.
  - Cut Incode's integration work from about two weeks to a single day, per integration.
- **Credibility line:** Backed by engineers who build this every day — GapMinder VC · Silicon Gardens · Incode (design partner).
- **Form ("Get in touch"):** First name · Last name · Work email · Company · What are you building or maintaining? (optional) → Book the demo
- **Consent line:** By submitting, you agree to receive communications from *codeplain, and understand that *codeplain will process and store your data as described in the Privacy Policy.
- `[note: form is a static front-end mock — wire to a real form handler / CRM before launch]`

---

## `/get-started` — DRAFT (engineer conversion)

- **H1:** Render your first spec.
- **Subhead:** New users get 50 rendering credits. Install *codeplain on Windows, macOS, or Linux.
- **Command:**
  ```
  curl -fsSL https://codeplain.ai/install.sh | bash
  ```
- **Or:** Go to codeplain.ai.
- **Links:** Read the docs · plain-forge on GitHub · Plain at plainlang.org

---

## `/company/about` — DRAFT + INPUTS NEEDED
- **H1:** We think code should be disposable.
- **Mission:** Make the specification the source of truth for software — so teams maintain intent, not implementations.
- **Team:** Dušan Omerčević (CEO), Predrag Radenković (CTO). `[confirm: bios; note the blog spells these without diacritics — Dusan Omercevic / Predrag Radenkovic — pick one]`
- **Backers:** $3M seed led by **GapMinder** with participation from **Silicon Gardens**. Board: **Cosmin Ochisor** (Partner, GapMinder). Angel investors: **Johan Rosenkilde** (creator of SpecLang at GitHub Next; also an advisor) and **Jost Novljan** (VP of Engineering, SAP LeanIX).

## `/company/customers` — INPUTS NEEDED
Lead with Incode (2 weeks → 1 day). Add design partners as cleared. `[needs: approved stories]`

## `/company/press` — INPUTS NEEDED
The New Stack feature + coverage. `[needs: press list]`

## `/company/careers` — DRAFT + INPUTS NEEDED
- **H1:** Build the tooling for regenerative software.
- `[needs: open roles incl. DevRel Specialist; location/remote; how to apply]`

## `/company/contact` — DRAFT
- **H1:** Get in touch.
- General: info@codeplain.ai · LinkedIn: @codeplain · Sales · Press `[confirm: sales/press routing]`

## `/learn` — INPUTS NEEDED
Blog (POV essays, product updates, engineering deep-dives) · Events · Docs (link out / subdomain).

## `/legal/privacy` & `/legal/terms` — PLACEHOLDER
`[needs: legal counsel — do not draft final copy]`

## `/404`
- **H1:** This page regenerated into nothing.
- **Body:** The page you're after doesn't exist. Head back home, or see the platform.
