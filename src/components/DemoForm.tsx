"use client";

export default function DemoForm() {
  // Static front-end mock — wire to a real form handler / CRM before launch.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-tint border-[0.5px] border-line-2 rounded-4 p-9 sticky top-24 max-[900px]:static">
      <h2 className="text-[22px] mb-5.5">Get in touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3.5 mb-4.5">
          <div>
            <label htmlFor="fname" className="block text-[13px] text-text-body mb-1.75">First name</label>
            <input id="fname" name="fname" type="text" autoComplete="given-name" required className="w-full text-[15px] text-navy bg-white border-[0.5px] border-line-2 rounded-lg px-3.25 py-2.75 outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label htmlFor="lname" className="block text-[13px] text-text-body mb-1.75">Last name</label>
            <input id="lname" name="lname" type="text" autoComplete="family-name" required className="w-full text-[15px] text-navy bg-white border-[0.5px] border-line-2 rounded-lg px-3.25 py-2.75 outline-none focus:border-accent transition-colors" />
          </div>
        </div>
        <div className="mb-4.5">
          <label htmlFor="email" className="block text-[13px] text-text-body mb-1.75">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className="w-full text-[15px] text-navy bg-white border-[0.5px] border-line-2 rounded-lg px-3.25 py-2.75 outline-none focus:border-accent transition-colors" />
        </div>
        <div className="mb-4.5">
          <label htmlFor="company" className="block text-[13px] text-text-body mb-1.75">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" required className="w-full text-[15px] text-navy bg-white border-[0.5px] border-line-2 rounded-lg px-3.25 py-2.75 outline-none focus:border-accent transition-colors" />
        </div>
        <div className="mb-4.5">
          <label htmlFor="usecase" className="block text-[13px] text-text-body mb-1.75">What are you building or maintaining?</label>
          <textarea id="usecase" name="usecase" placeholder="e.g. integrations with CRM and identity providers" className="w-full min-h-22 text-[15px] text-navy bg-white border-[0.5px] border-line-2 rounded-lg px-3.25 py-2.75 outline-none focus:border-accent transition-colors resize-y" />
        </div>
        <button type="submit" className="w-full flex justify-center items-center gap-2 text-[15px] font-medium px-5.5 py-3 rounded-lg bg-navy text-white hover:bg-[#16306b] transition-colors mt-1.5">
          Book the demo
        </button>
        <p className="text-[12.5px] text-muted leading-normal mt-4">
          By submitting, you agree to receive communications from *codeplain, and understand that *codeplain will process and store your data as described in the{" "}
          <a href="/legal/privacy" className="text-accent border-b border-accent pb-px">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
