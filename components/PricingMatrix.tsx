import React from "react";

export function PricingMatrix() {
  return (
    <section id="pricing" className="py-20 border-t border-midnight-700/60 bg-midnight-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-focus-500/10 border border-focus-500/20 text-xs font-mono text-focus-400 mb-3">
            VAULT ACCESS PACKAGES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Invest in Your Prefrontal Focus Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            One-time payment. Zero recurring subscriptions. Instant digital entitlement delivered
            through our secure edge vault within 60 seconds of checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Tier 1: Foundation ($17) */}
          <div className="rounded-2xl border border-midnight-700 bg-midnight-900/60 p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Starter Kit
                </span>
                <span className="text-xs font-mono text-gray-400 px-2 py-0.5 rounded bg-midnight-800">
                  Instant Vault Download
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Dopamine & Focus Reset Planner
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                The essential 72-hour reset manual and printable daily focus sheets for individuals
                seeking rapid baseline recovery.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black font-mono text-white">$17</span>
                <span className="text-xs text-gray-400 uppercase font-mono">One-Time Payment</span>
              </div>

              <div className="space-y-3 text-xs text-gray-300 font-mono mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-glacier-400 font-bold">&#10003;</span>
                  <span>72-Hour Neurochemical Reset Field Guide (PDF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-glacier-400 font-bold">&#10003;</span>
                  <span>Printable Analog Daily Planning Sheets (Zero-Screen)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-glacier-400 font-bold">&#10003;</span>
                  <span>Emergency Craving-Suppression Checklist</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>&times;</span>
                  <span>No Notion Sprint Vault or Calendar Templates</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#checkout-tier1"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-midnight-700 bg-midnight-800/80 py-3.5 text-sm font-semibold text-gray-200 hover:border-glacier-500/40 hover:text-white transition-all active:scale-98"
              >
                <span>Unlock Starter Kit ($17)</span>
              </a>
            </div>
          </div>

          {/* Tier 2: Complete Architecture ($29 - Recommended) */}
          <div className="rounded-2xl border-2 border-glacier-500/80 bg-gradient-to-b from-midnight-900 to-midnight-950 p-8 flex flex-col justify-between relative shadow-2xl shadow-glacier-500/10">
            {/* Recommended Badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-glacier-500 to-focus-500 text-midnight-950 text-xs font-mono font-black uppercase px-3 py-1 rounded-full shadow-md">
              Most Popular // Complete System
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-glacier-400 font-bold">
                  Executive Suite
                </span>
                <span className="text-xs font-mono text-focus-400 px-2 py-0.5 rounded bg-focus-500/10 border border-focus-500/20">
                  Full Vault Entitlement
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Complete Neuro-Habit Architecture System
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                The comprehensive operating system: field manual, Notion sprint dashboard, calendar
                automation templates, and binaural focus audio tracks.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black font-mono text-glacier-400">$29</span>
                <span className="text-xs text-gray-400 uppercase font-mono">One-Time Payment</span>
                <span className="text-xs text-gray-400 line-through font-mono ml-2">$97 Value</span>
              </div>

              <div className="space-y-3 text-xs text-gray-300 font-mono mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>72-Hour Neurochemical Reset Field Guide (Full Edition)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Deep-Work Chrono-Matrix (.ics Calendar Templates)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Notion Executive Sprint Vault & KPI Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>OS System Fencing Guides (Mac & Windows Setup)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>3 Binaural Beta/Gamma Audio Focus Tracks (Lossless)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Lifetime Vault Access & Free Future Updates</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#checkout-tier2"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-glacier-500 py-4 text-base font-bold text-midnight-950 hover:bg-glacier-400 transition-all shadow-lg shadow-glacier-500/25 active:scale-98"
              >
                <span>Unlock Complete Architecture ($29)</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Statement Disclosure & Security Notice */}
        <div className="mt-12 max-w-3xl mx-auto rounded-xl border border-midnight-700 bg-midnight-900/40 p-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed font-mono">
            🔒 <strong className="text-gray-300">Billing Disclosure:</strong> Charges will appear as{" "}
            <span className="text-glacier-400 font-semibold">TRIDENT* INNERSCAPE</span> on your statement.
            Fulfillment is handled automatically through our Cloudflare Pages edge delivery vault.
            Backed by our 30-day cognitive satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
