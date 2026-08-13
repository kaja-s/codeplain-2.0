"use client";

export default function NewsletterSignup() {
  // Static front-end mock — wire to a real list provider before launch.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 max-w-[280px]">
      <label htmlFor="newsletter-email" className="font-mono text-[11px] tracking-wide uppercase text-black/40">
        Subscribe to Newsletter
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
          className="w-full text-sm text-[#1a1a1a] bg-black/[0.03] border border-black/15 rounded-lg px-3.25 py-2.5 outline-none placeholder:text-black/35 focus:border-[#0A1FD4] transition-colors"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="shrink-0 border border-transparent bg-[#0A1FD4] text-white px-3.5 py-2.5 text-sm font-medium transition-transform active:scale-[0.97] hover:-translate-y-px"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
