import Container from "@/components/Container";

const LOGOS = ["Incode", "DevRev", "Shovels.ai"];

export default function Logos() {
  return (
    <div className="border-y border-black/10 bg-black/[0.02]">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-13 gap-y-4 py-6.5">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-[19px] font-medium tracking-tight text-[#4a5678] hover:text-[#1a1a1a] transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
