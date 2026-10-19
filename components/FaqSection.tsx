import React from "react";

export function FaqSection() {
  const faqs = [
    {
      q: "How does digital vault delivery work?",
      a: "Upon completing checkout, our Cloudflare Pages edge function validates the transaction and provisions a secure claim token. Your confirmation email contains a direct link that generates an ephemeral 60-second signed download URL from our private Supabase digital vault, streaming the complete package directly to your machine.",
    },
    {
      q: "How quickly do focus improvements take effect?",
      a: "Most operators experience immediate relief from compulsive context switching within the first 24 hours of implementing the environment fencing rules. By Day 3, morning clarity restabilizes, allowing uninterrupted 90-minute focus sessions without mental restlessness or fatigue.",
    },
    {
      q: "Do I need to abandon my smartphone or social channels?",
      a: "No. The system is engineered around intentional friction, not monastic isolation. You will establish spatial and temporal boundaries that restrict mindless scrolling during core thinking hours while leaving critical messaging and family channels easily accessible.",
    },
    {
      q: "What file formats and tools are included?",
      a: "The package is delivered as a universal .zip bundle containing DRM-free PDF field manuals, .ics calendar import templates for Google and Apple Calendar, a ready-to-use Notion workspace template, and high-bitrate focus audio tracks compatible with any playback device.",
    },
    {
      q: "What will appear on my credit card statement?",
      a: "Your bank statement will show a discrete charge from TRIDENT* INNERSCAPE. Technical billing and secure digital asset fulfillment are operated by Trident Website Design. We never bill recurring subscriptions.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-3">
            Inquiries // Direct Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-stone-100 mb-4">
            Frequently Addressed Questions
          </h2>
          <p className="text-base text-stone-300 leading-relaxed font-sans max-w-2xl">
            Direct, declarative responses regarding system architecture, digital formats, and secure vault delivery.
          </p>
        </div>

        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-stone-100 mb-3">
                {faq.q}
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
