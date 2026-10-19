import React from "react";

export default function InnerEscapesPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#211F1D] selection:bg-[#2D4A3E]/10 selection:text-[#2D4A3E]">
      {/* Editorial Navigation */}
      <nav className="w-full border-b border-[#E8E4DC] bg-[#FAF8F5]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-tight text-[#211F1D] font-medium">Inner Escapes</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#7E786E] border border-[#DDD8CE] px-1.5 py-0.5 rounded">Field Guide</span>
          </div>
          <a
            href="#access"
            className="text-xs uppercase font-mono tracking-widest text-[#FAF8F5] bg-[#2D4A3E] hover:bg-[#22382F] px-4 py-2 rounded transition-colors"
          >
            Claim Edition
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7E786E]">
            Executive Cognitive Hygiene · Volume I
          </span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#1C1A18] leading-[1.15] mb-8">
          A quiet architecture for <br />
          <span className="italic font-serif text-[#2D4A3E]">unbroken thought.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#5C574F] font-light leading-relaxed mb-10">
          The practical system for clearing high-velocity cognitive noise, eliminating decision fatigue, and protecting deep mental reserves in demanding environments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#access"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#2D4A3E] hover:bg-[#22382F] text-[#FAF8F5] text-sm font-medium tracking-wide rounded shadow-sm transition-all text-center"
          >
            Download the Digital Protocol — $27
          </a>
          <a
            href="#curriculum"
            className="w-full sm:w-auto px-6 py-3.5 border border-[#D5CFC4] hover:bg-[#F2ECE1] text-[#4A463F] text-sm tracking-wide rounded transition-all text-center"
          >
            Read the Field Notes
          </a>
        </div>

        {/* Hero Tactile Journal Image Container */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm bg-white p-2">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#F2ECE1]">
            <img
              src="/images/hero-journal.jpg"
              alt="Quiet morning field journal and coffee on linen"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="py-3 px-4 flex items-center justify-between text-left border-t border-[#F2ECE1] mt-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7E786E]">
              Artifact 01: Analog Morning Audit
            </span>
            <span className="text-[11px] font-mono text-[#2D4A3E]">
              Included in Core Archive
            </span>
          </div>
        </div>

        {/* Minimal Provenance Bar */}
        <div className="mt-16 pt-8 border-t border-[#E8E4DC] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#7E786E]">Format</div>
            <div className="text-sm font-medium text-[#211F1D] mt-0.5">Tactile PDF + Audio Ledger</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#7E786E]">Pacing</div>
            <div className="text-sm font-medium text-[#211F1D] mt-0.5">Self-Directed Field Protocol</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#7E786E]">Delivery</div>
            <div className="text-sm font-medium text-[#211F1D] mt-0.5">Instant Private Token</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#7E786E]">Edition</div>
            <div className="text-sm font-medium text-[#211F1D] mt-0.5">2026 Core Release</div>
          </div>
        </div>
      </section>

      {/* The 4-Part Diagnostic Ledger */}
      <section id="curriculum" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#E8E4DC]">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7E786E]">Diagnostic Protocol</span>
          <h2 className="font-serif text-3xl font-normal text-[#1C1A18] mt-2">
            The Cost of Unregulated Attention
          </h2>
        </div>

        <div className="divide-y divide-[#E8E4DC]">
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="font-mono text-xs text-[#7E786E] md:col-span-2">ENTRY 01</span>
            <h3 className="font-serif text-xl text-[#211F1D] md:col-span-4">Attention Fragmentation</h3>
            <p className="text-sm text-[#5C574F] leading-relaxed md:col-span-6">
              Constant ambient interruptions reset cognitive depth. It takes an average of 23 minutes to regain deep focus after every peripheral notification.
            </p>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="font-mono text-xs text-[#7E786E] md:col-span-2">ENTRY 02</span>
            <h3 className="font-serif text-xl text-[#211F1D] md:col-span-4">Chronic Decision Leaks</h3>
            <p className="text-sm text-[#5C574F] leading-relaxed md:col-span-6">
              Low-leverage administrative micro-choices exhaust executive willpower before high-consequence work begins.
            </p>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="font-mono text-xs text-[#7E786E] md:col-span-2">ENTRY 03</span>
            <h3 className="font-serif text-xl text-[#211F1D] md:col-span-4">Synthetic Overstimulation</h3>
            <p className="text-sm text-[#5C574F] leading-relaxed md:col-span-6">
              Dopamine troughs induced by reactive screen time erode baseline patience, reflective synthesis, and deep problem-solving stamina.
            </p>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="font-mono text-xs text-[#7E786E] md:col-span-2">ENTRY 04</span>
            <h3 className="font-serif text-xl text-[#211F1D] md:col-span-4">The Rest Deficit</h3>
            <p className="text-sm text-[#5C574F] leading-relaxed md:col-span-6">
              Consuming media is not cognitive restoration. The protocol institutes genuine sensory resets to return mental clarity to baseline.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing / Delivery Entitlement Section */}
      <section id="access" className="bg-[#F2ECE1] border-y border-[#E8E4DC] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E786E]">Secure Digital Access</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1A18] mt-2">
              Begin the Field Protocol
            </h2>
            <p className="text-sm text-[#6B665E] mt-2">
              Fulfilled via cryptographically signed single-use claim tokens.
            </p>
          </div>

          {/* 3D Tangible Linen Guide Mockup Frame */}
          <div className="max-w-md mx-auto mb-12 rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm bg-white p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#FAF8F5]">
              <img
                src="/images/guide-mockup.png"
                alt="Inner Escapes Executive Cognitive Hygiene Field Guide Volume I Mockup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-2.5 px-3 flex items-center justify-between text-left border-t border-[#F2ECE1] mt-1 text-[11px] font-mono text-[#7E786E]">
              <span>Artifact 02: Linen-Bound Edition Archive</span>
              <span className="text-[#2D4A3E] font-medium">Digital + Audio Asset</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-[#FAF8F5] border border-[#DDD8CE] p-8 rounded-lg flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-xl text-[#211F1D]">Field Protocol</h3>
                  <span className="font-mono text-2xl font-light text-[#211F1D]">$17</span>
                </div>
                <p className="text-xs text-[#6B665E] mb-6 leading-relaxed">
                  The complete 48-page executive blueprint for establishing daily cognitive resets and attention hygiene.
                </p>
                <ul className="text-xs text-[#4A463F] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> The Core Digital Reset Guidebook (PDF)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> Printable Morning & Evening Audit Sheets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> 48-Hour Vault Access Token
                  </li>
                </ul>
              </div>
              <a
                href="#access"
                className="w-full block py-3 bg-[#E8E4DC] hover:bg-[#DDD8CE] text-[#211F1D] text-xs font-mono uppercase tracking-wider text-center rounded transition-colors"
              >
                Acquire Protocol ($17)
              </a>
            </div>

            {/* Tier 2: Complete Architecture */}
            <div className="bg-[#FAF8F5] border-2 border-[#2D4A3E] p-8 rounded-lg flex flex-col justify-between shadow-md relative">
              <span className="absolute -top-3 right-6 bg-[#2D4A3E] text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded">
                Recommended
              </span>
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-xl text-[#211F1D]">Complete System</h3>
                  <span className="font-mono text-2xl font-light text-[#2D4A3E]">$27</span>
                </div>
                <p className="text-xs text-[#6B665E] mb-6 leading-relaxed">
                  The full operational archive including audio mental walk-throughs, companion frameworks, and printable templates.
                </p>
                <ul className="text-xs text-[#4A463F] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> Everything in Field Protocol
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> 5 Guided Ambient Reset Audios (MP3)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> Digital Minimalist Workspace Checklist
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D4A3E]">✓</span> Lifetime Updates & Priority Cloud Delivery
                  </li>
                </ul>
              </div>
              <a
                href="#access"
                className="w-full block py-3 bg-[#2D4A3E] hover:bg-[#22382F] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider text-center rounded transition-colors"
              >
                Acquire Complete System ($27)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Merchant Clarity */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-xs text-[#7E786E] border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif text-sm text-[#211F1D]">Inner Escapes</span>
          <span className="mx-2">·</span>
          <span>A We Sell Digital Publication</span>
        </div>
        <div className="text-[11px] font-mono">
          Billed as TRIDENT* INNERSCAPE · Instant Secure Delivery
        </div>
      </footer>
    </main>
  );
}
