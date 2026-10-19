import React from "react";

export function PricingMatrix() {
  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-3">
            Acquisition // One-Time Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-stone-100 mb-4">
            Immediate Access & Lifetime Toolkit
          </h2>
          <p className="text-base text-stone-300 leading-relaxed font-sans max-w-2xl">
            Single one-time payment. Zero recurring subscriptions. Instant digital entitlement
            delivered directly through our secure edge vault immediately upon checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Tier 1: Foundation ($17) */}
          <div className="rounded border border-white/[0.08] bg-[#121316] p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3">
                Starter Manual
              </div>
              <h3 className="text-xl font-serif font-normal text-stone-100 mb-2">
                Focus & Clarity Reset Planner
              </h3>
              <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
                The essential 72-hour reset manual and printable daily focus sheets for individuals
                seeking rapid baseline recovery.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif text-3xl font-normal text-stone-100">$17</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">One-time payment</span>
              </div>

              <div className="space-y-3 text-xs font-mono text-stone-300 mb-8 border-t border-white/[0.08] pt-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>72-Hour Attention Reset Field Guide (PDF)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>Printable Analog Daily Planning Sheets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>Emergency Craving & Interruption Checklist</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-500">
                  <span>&times;</span>
                  <span>No Notion Sprint Vault or Calendar Templates</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#checkout-tier1"
                className="w-full inline-flex items-center justify-center gap-2 rounded border border-white/10 bg-white/[0.03] py-3 text-xs font-mono uppercase tracking-wider text-stone-300 hover:border-white/20 hover:text-white transition-colors"
              >
                <span>Acquire Starter Kit ($17)</span>
              </a>
            </div>
          </div>

          {/* Tier 2: Complete Architecture ($29) */}
          <div className="rounded border border-stone-600 bg-[#16171b] p-8 flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-stone-100 text-stone-950 text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-0.5 rounded">
              Complete System
            </div>

            <div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3">
                Executive Suite
              </div>
              <h3 className="text-xl font-serif font-normal text-stone-100 mb-2">
                Complete Executive Focus Architecture
              </h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed mb-6">
                The comprehensive operating system: field manual, Notion sprint dashboard,
                calendar automation templates, and lossless focus audio tracks.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif text-3xl font-normal text-stone-100">$29</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">One-time payment</span>
                <span className="text-xs font-mono text-zinc-500 line-through ml-2">$97 Value</span>
              </div>

              <div className="space-y-3 text-xs font-mono text-stone-300 mb-8 border-t border-white/[0.08] pt-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>72-Hour Attention Reset Field Guide (Full)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>Deep-Work Chrono-Matrix (.ics Templates)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>Notion Executive Sprint Vault & KPI Tracker</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>OS System Fencing Guides (Mac & Windows)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>3 High-Bitrate Focus Audio Calibration Tracks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-stone-400">&mdash;</span>
                  <span>Lifetime Vault Access & Version Updates</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#checkout-tier2"
                className="w-full inline-flex items-center justify-center gap-2 rounded border border-stone-200 bg-stone-100 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-stone-950 hover:bg-stone-200 transition-colors"
              >
                <span>Acquire Complete System ($29)</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Statement Disclosure */}
        <div className="mt-12 rounded border border-white/[0.08] bg-[#0c0d0e] p-4 text-center">
          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            Billing Notice: Charges will appear as <strong className="text-stone-200">TRIDENT* INNERSCAPE</strong> on your bank statement.
            Fulfillment is executed automatically through our secure edge delivery vault.
            Backed by a 30-day satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
