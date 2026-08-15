import type { Metadata } from "next";
import HeroVisual from "@/components/HeroVisual";

export const metadata: Metadata = {
  title: "Hero visual review",
  robots: { index: false, follow: false },
};

export default function HeroVisualReview() {
  return (
    <main className="min-h-screen bg-white px-8 py-16 text-ink max-md:px-6">
      <div className="mx-auto max-w-(--container-content)">
        <h1 className="mb-1 text-[22px] font-medium normal-case">Hero visual review</h1>
        <p className="mb-10 text-[14px] normal-case text-black/50">
          Before (Claude Code PRs) | After (*plain spec, consistent).
        </p>
        <HeroVisual />
      </div>
    </main>
  );
}
