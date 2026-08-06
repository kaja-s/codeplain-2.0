import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Learn | *codeplain",
  description: "POV essays, product updates, engineering deep-dives, events, and docs.",
};

const LINKS = [
  { href: "/learn/blog", name: "Blog", body: "POV essays, product updates, and engineering deep-dives." },
  { href: "/learn/events", name: "Events", body: "Talks, demos, and where to find *codeplain in person." },
  { href: "/learn/documentation", name: "Docs", body: "Reference docs for Plain, the renderer, and plain-forge." },
];

export default function Learn() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Learn" title="Read the thinking, and the code." />
        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-5">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className="block border-[0.5px] border-line-2 rounded-3.5 p-6.5 bg-tint hover:border-[#C9D6F0] transition-colors">
                  <h3 className="text-lg mb-2.5">{l.name}</h3>
                  <p className="text-text-body text-[14.5px]">{l.body}</p>
                </a>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
