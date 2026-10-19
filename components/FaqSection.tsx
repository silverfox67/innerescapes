import React from "react";

export function FaqSection() {
  const faqs = [
    {
      q: "How does the digital delivery vault work?",
      a: "Immediately upon completing Stripe checkout, our Cloudflare Pages edge function provisions a cryptographically signed claim token and sends your access email via Brevo. Clicking your personalized claim link generates a secure 60-second signed download URL from our private Supabase digital vault, streaming the complete package directly to your device.",
    },
    {
      q: "How quickly will I notice an increase in daily focus?",
      a: "Most operators notice a distinct reduction in compulsive phone checking within the first 24 hours of the neurochemical reset. By Day 3, baseline dopamine sensitivity stabilizes, allowing sustained 90-minute deep-work sessions without attentional drift or restless context switching.",
    },
    {
      q: "Do I have to quit my smartphone or social media completely?",
      a: "No. The system is designed around environmental friction inversion, not monastic abstention. You will configure intentional spatial and temporal boundaries that restrict mindless scrolling during core focus hours while keeping essential communication tools accessible for work and family.",
    },
    {
      q: "What file formats and software are required?",
      a: "The digital package arrives as a universal .zip bundle containing DRM-free PDF field guides, .ics calendar import files for Google Calendar and Apple Calendar, a one-click Notion workspace template, and high-bitrate MP3/FLAC binaural focus tracks compatible with all devices.",
    },
    {
      q: "What will appear on my credit card or bank statement?",
      a: "Your bank statement will show a single discrete charge from TRIDENT* INNERSCAPE. Technical billing and secure digital asset fulfillment are executed by Trident Website Design. We never sell your data or charge recurring hidden subscriptions.",
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-midnight-700/60 bg-midnight-900/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-glacier-500/10 border border-glacier-500/20 text-xs font-mono text-glacier-400 mb-3">
            DIRECT-ANSWER ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-300">
            Clear, declarative answers to technical and operational questions regarding the InnerEscapes
            architecture and secure vault fulfillment.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-midnight-700 bg-midnight-900/70 p-6 sm:p-7"
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
