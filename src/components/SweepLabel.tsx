"use client";

import { ReactNode } from "react";

// Duplicates its children behind a solid-fill layer, revealed left-to-right
// on hover via a clip-path wipe — no box padding, the fill hugs the text
// exactly. Requires an ancestor with `group/item`.
export function SweepLabel({
  children,
  // Named with the "Action" suffix so Next's client-boundary TS plugin
  // doesn't flag it as an unserializable prop — this is a plain client-side
  // callback, never a Server Action, but the plugin's check is name-based.
  onMouseEnterAction,
  group = "item",
}: {
  children: ReactNode;
  onMouseEnterAction?: () => void;
  // "item" fills brand-blue on hover of its own wrapper; "trigger" fills
  // brand-blue for as long as the whole dropdown (trigger + open panel) is
  // hovered — see NavMenu. "child" fills a lighter blue-400, for rows sitting
  // on an already-blue dropdown panel.
  group?: "item" | "trigger" | "child";
}) {
  return (
    <span className="relative inline-block" onMouseEnter={onMouseEnterAction}>
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center whitespace-nowrap [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-200 ease-out ${
          group === "trigger"
            ? "bg-brand-blue text-white group-hover/trigger:[clip-path:inset(0_0%_0_0)]"
            : group === "child"
              ? "bg-white text-brand-blue group-hover/item:[clip-path:inset(0_0%_0_0)]"
              : "bg-brand-blue text-white group-hover/item:[clip-path:inset(0_0%_0_0)]"
        }`}
      >
        {children}
      </span>
    </span>
  );
}
