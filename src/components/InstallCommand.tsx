"use client";

import { useState } from "react";
import { Select } from "@base-ui/react/select";
import Chevron from "./Chevron";

const COMMANDS = {
  unix: "curl -fsSL https://codeplain.ai/install.sh | bash",
  windows: "irm https://codeplain.ai/install.ps1 | iex",
} as const;

type Os = keyof typeof COMMANDS;

const OS_ITEMS: { value: Os; label: string }[] = [
  { value: "unix", label: "macOS / Linux" },
  { value: "windows", label: "Windows" },
];

function ClipboardIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" className={className}>
      <path d="M6 2.5h4a1 1 0 0 1 1 1V4h-6v-.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.3" />
      <rect x="3.5" y="4" width="9" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export default function InstallCommand() {
  const [os, setOs] = useState<Os>("unix");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(COMMANDS[os]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="inline-flex items-center bg-brand-blue font-mono text-sm text-white">
      <Select.Root
        items={OS_ITEMS}
        value={os}
        onValueChange={(value) => setOs(value as Os)}
      >
        <Select.Trigger className="group flex items-center gap-1.5 bg-brand-blue-50 px-4 py-3 text-brand-blue cursor-pointer transition-colors hover:bg-brand-blue-100">
          <Select.Value />
          <Chevron className="rotate-90 transition-transform group-data-[popup-open]:-rotate-90" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner sideOffset={4} align="start" alignItemWithTrigger={false}>
            <Select.Popup className="min-w-40 bg-brand-blue-50 font-mono text-sm text-brand-blue shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]">
              {OS_ITEMS.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  className="cursor-pointer px-3 py-2 data-[highlighted]:bg-brand-blue-100"
                >
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>

      <code className="relative px-4 normal-case whitespace-nowrap">
        <span className={copied ? "invisible" : ""}>{COMMANDS[os]}</span>
        {copied && <span className="absolute inset-0 flex items-center px-4">Copied!</span>}
      </code>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy install command"}
        className="flex shrink-0 items-center justify-center self-stretch border-l border-white/20 px-3 cursor-pointer transition-colors hover:bg-brand-blue-400 active:scale-[0.985]"
      >
        <ClipboardIcon />
      </button>
    </div>
  );
}
