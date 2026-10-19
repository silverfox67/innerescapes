import React from "react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient radial gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[520px] w-[520px] rounded-full bg-glacier-500/10 blur-[130px]" />
        <div className="h-[380px] w-[380px] rounded-full bg-focus-500/5 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 rounded-full border border-midnight-700 bg-midnight-900/90 px-3.5 py-1.5 text-xs font-mono text-gray-300 shadow-inner mb-8">
          <span className="flex h-2 w-2 rounded-full bg-focus-400 animate-ping" />
          <span className="h-2 w-2 rounded-full bg-focus-400 -ml-4" />
          <span className="text-gray-400">STATUS:</span>
          <span className="text-glacier-400 font-semibold">
            VAULT PROTOCOL ACTIVE // 60s SECURE SIGNING
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
          Rewire Your Attention. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-glacier-400 via-sky-300 to-focus-400 bg-clip-text text-transparent">
            Reclaim 3+ Hours of Deep Work
          </span>{" "}
          Every Day.
        </h1>

        {/* Subhead / Direct Answer definition */}
        <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          InnerEscapes is a clinical-grade neuro-habit architecture designed to
          recalibrate desensitized dopamine baselines, terminate digital context
          thrashing, and install repeatable cognitive focus protocols. Built
          strictly for operators, knowledge workers, and creators who refuse to
          tolerate brain fog.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-glacier-500 px-8 py-4 text-base font-bold text-midnight-950 hover:bg-glacier-400 transition-all shadow-lg shadow-glacier-500/25 active:scale-95"
          >
            <span>Unlock Neuro-Habit Vault ($29)</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-midnight-700 bg-midnight-900/60 px-7 py-4 text-base font-semibold text-gray-200 hover:border-glacier-500/50 hover:text-white transition-all"
          >
            <span>Calculate Attention Yield</span>
            <svg
              className="h-4 w-4 text-glacier-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* Verification Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-midnight-700/60 text-left">
          <div className="p-3.5 rounded-lg bg-midnight-900/40 border border-midnight-800">
            <div className="text-2xl font-bold font-mono text-white mb-0.5">
              3.2 Hrs
            </div>
            <div className="text-xs text-gray-400 font-medium">
              Average Daily Focus Regained
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-midnight-900/40 border border-midnight-800">
            <div className="text-2xl font-bold font-mono text-glacier-400 mb-0.5">
              94.6%
            </div>
            <div className="text-xs text-gray-400 font-medium">
              Context-Switch Reduction Rate
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-midnight-900/40 border border-midnight-800">
            <div className="text-2xl font-bold font-mono text-focus-400 mb-0.5">
              &lt; 60 Sec
            </div>
            <div className="text-xs text-gray-400 font-medium">
              Instant Cloudflare Edge Delivery
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-midnight-900/40 border border-midnight-800">
            <div className="text-2xl font-bold font-mono text-white mb-0.5">
              1,280+
            </div>
            <div className="text-xs text-gray-400 font-medium">
              Total Entitlements Dispatched
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
