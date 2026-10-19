import React from "react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/[0.08]">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Uppercase Tracked Label */}
        <div className="inline-flex items-center gap-2 pb-1 text-xs font-mono tracking-widest uppercase text-zinc-400 border-b border-zinc-800 mb-8">
          <span>Field Manual // Executive Focus Protocol</span>
        </div>

        {/* Editorial Serif Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-stone-100 mb-6 leading-[1.12]">
          A deliberate reset for <br className="hidden sm:inline" />
          <span className="italic font-normal text-stone-300">unbroken executive focus.</span>
        </h1>

        {/* Grounded Subhead */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-stone-300 leading-relaxed font-sans mb-10">
          A structured system for calm, uninterrupted focus and daily mental clarity.
          Designed for operators and professionals who need sustained deep work without
          digital context thrashing.
        </p>

        {/* Editorial Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded border border-stone-200 bg-stone-100 px-7 py-3.5 text-sm font-medium text-stone-950 hover:bg-stone-200 transition-colors"
          >
            <span>Acquire System ($29)</span>
            <span className="text-stone-500 font-mono text-xs">&rarr;</span>
          </a>
          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-stone-300 hover:border-white/20 hover:text-white transition-colors"
          >
            <span>Self-Audit Attention Loss</span>
          </a>
        </div>

        {/* Minimalist Editorial Proof Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08] text-left">
          <div className="pl-4 border-l border-white/10">
            <div className="text-xl sm:text-2xl font-serif font-normal text-stone-100">
              3.2 Hours
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Daily Focus Regained
            </div>
          </div>
          <div className="pl-4 border-l border-white/10">
            <div className="text-xl sm:text-2xl font-serif font-normal text-stone-100">
              94.6%
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Context Fragmentation Cut
            </div>
          </div>
          <div className="pl-4 border-l border-white/10">
            <div className="text-xl sm:text-2xl font-serif font-normal text-stone-100">
              Instant
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Encrypted Vault Delivery
            </div>
          </div>
          <div className="pl-4 border-l border-white/10">
            <div className="text-xl sm:text-2xl font-serif font-normal text-stone-100">
              1,280+
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Operators Deployed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
