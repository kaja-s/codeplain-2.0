"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { SweepLabel } from "./SweepLabel";

const SCRAMBLE_CHARS = "*#$%&";
const SCRAMBLE_FRAMES = 6;
const SCRAMBLE_FRAME_MS = 33;

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

function useHoverScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const onMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let frame = 0;
    setDisplay(text.replace(/\S/g, () => randomChar()));
    intervalRef.current = setInterval(() => {
      frame++;
      const revealCount = Math.ceil((frame / SCRAMBLE_FRAMES) * text.length);
      setDisplay(
        text
          .split("")
          .map((c, i) => (c === " " || i < revealCount ? c : randomChar()))
          .join(""),
      );
      if (frame >= SCRAMBLE_FRAMES) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, SCRAMBLE_FRAME_MS);
  };

  return { display, onMouseEnter };
}

// Combines SweepLabel's blue fill wipe with an ASCII-scramble text reveal,
// both triggered from the same hover boundary.
export function ScrambleLabel({
  text,
  icon,
}: {
  text: string;
  icon?: ReactNode;
}) {
  const { display, onMouseEnter } = useHoverScramble(text);
  return (
    <SweepLabel onMouseEnterAction={onMouseEnter}>
      {icon ? (
        <span className="inline-flex items-center gap-1.5">
          {display}
          {icon}
        </span>
      ) : (
        display
      )}
    </SweepLabel>
  );
}
