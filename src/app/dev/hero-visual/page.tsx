import type { Metadata } from "next";
import HeroVisual from "@/components/HeroVisual";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export const metadata: Metadata = {
  title: "Hero visual review",
  robots: "noindex",
};

export default function HeroVisualReview() {
  return (
    <main className="min-h-screen bg-white px-8 py-16 text-ink max-md:px-6">
      <div className="mx-auto max-w-(--container-content)">
        <Heading as="h1" size="custom" className="mb-1 text-[22px] font-medium normal-case">
          Hero visual review
        </Heading>
        <Paragraph size="custom" className="mb-10 text-[14px] normal-case text-black/50">
          Before (Claude Code PRs) | After (*plain spec, consistent).
        </Paragraph>
        <HeroVisual />
      </div>
    </main>
  );
}
