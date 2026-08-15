import Container from "@/components/Container";
import DevRevLogo from "@/components/logos/DevRevLogo";
import IncodeLogo from "@/components/logos/IncodeLogo";
import ShovelsLogo from "@/components/logos/ShovelsLogo";
import HycuLogo from "@/components/logos/HycuLogo";

const LOGOS: { name: string; Logo: typeof DevRevLogo; href?: string }[] = [
  { name: "Incode", Logo: IncodeLogo },
  {
    name: "DevRev",
    Logo: DevRevLogo,
    href: "https://blog.codeplain.ai/p/devrevs-transition-to-ai-powered",
  },
  { name: "Shovels.ai", Logo: ShovelsLogo },
  { name: "HYCU", Logo: HycuLogo },
];

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="11"
      height="11"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 2H10M10 2V8M10 2L2 10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logos() {
  return (
    <div>
      <Container className="px-0">
        <div className="grid grid-cols-4 gap-1 max-md:grid-cols-2 ">
          {LOGOS.map(({ name, Logo, href }) => {
            const tileClasses = `group relative flex h-24 items-center justify-center bg-black/3 text-brand-blue max-md:h-20 ${
              href
                ? "transition-colors hover:bg-blue-100"
                : "transition-opacity hover:opacity-70"
            }`;

            const content = (
              <>
                <Logo height={22} />
                {href && (
                  <ExternalLinkIcon className="absolute top-3.5 right-3.5 text-brand-blue group-hover:text-brand-blue" />
                )}
              </>
            );

            return href ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} case study (opens in a new tab)`}
                className={tileClasses}
              >
                {content}
              </a>
            ) : (
              <div key={name} className={tileClasses}>
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
