import Container from "@/components/Container";

const LOGOS = ["Incode", "DevRev", "Shovels.ai"];

export default function Logos() {
  return (
    <div className="border-y-[0.5px] border-line bg-tint">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-13 gap-y-4 py-6.5">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-[19px] font-medium tracking-tight text-[#8A97BC] hover:text-navy transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
