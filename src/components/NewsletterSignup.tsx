"use client";

export default function NewsletterSignup() {
  // Static front-end mock — wire to a real list provider before launch.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 max-w-[280px]">
      <label htmlFor="newsletter-email" className="font-mono text-[11px] tracking-wide uppercase text-[#7C8AAB]">
        Get product updates
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
          className="w-full text-sm text-white bg-white/[0.06] border-[0.5px] border-white/15 rounded-lg px-3.25 py-2.5 outline-none placeholder:text-[#5B6B8C] focus:border-accent-bright transition-colors"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="shrink-0 rounded-lg border border-transparent bg-white text-navy px-3.5 py-2.5 text-sm font-medium transition-transform active:scale-[0.97] hover:-translate-y-px"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
