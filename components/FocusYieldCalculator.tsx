"use client";

import React, { useState } from "react";

export function FocusYieldCalculator() {
  const [distractedHours, setDistractedHours] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(75);

  const workingDays = 250;
  const annualLostHours = Math.round(distractedHours * workingDays);
  const annualCost = Math.round(annualLostHours * hourlyRate);
  const reclaimedHours = Math.round(annualLostHours * 0.72);
  const reclaimedValue = Math.round(reclaimedHours * hourlyRate);

  return (
    <section id="calculator" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-3">
            Self-Audit // Ledger Worksheet
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-stone-100 mb-4">
            Attention Ledger & Opportunity Audit
          </h2>
          <p className="text-base text-stone-300 leading-relaxed max-w-2xl">
            A direct calculation of annual deep-work bandwidth lost to fragmented attention.
            Quantify how unstructured communication drains billable and strategic output.
          </p>
        </div>

        {/* Integrated Accounting Ledger Worksheet */}
        <div className="rounded border border-white/10 bg-[#121316] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Variables */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="distracted-hours-input" className="text-xs font-mono uppercase tracking-wider text-stone-300">
                    Daily Fragmented Time
                  </label>
                  <span className="font-mono text-sm text-stone-100 font-semibold">
                    {distractedHours} {distractedHours === 1 ? "Hour" : "Hours"} / day
                  </span>
                </div>
                <input
                  id="distracted-hours-input"
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={distractedHours}
                  onChange={(e) => setDistractedHours(parseFloat(e.target.value))}
                  className="w-full accent-stone-300 bg-stone-800 h-1.5 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>1h (Minimal)</span>
                  <span>3h (Average)</span>
                  <span>6h (Critical)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="hourly-rate-input" className="text-xs font-mono uppercase tracking-wider text-stone-300">
                    Value of Focused Output
                  </label>
                  <span className="font-mono text-sm text-stone-100 font-semibold">
                    ${hourlyRate} / hour
                  </span>
                </div>
                <input
                  id="hourly-rate-input"
                  type="range"
                  min="25"
                  max="250"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value, 10))}
                  className="w-full accent-stone-300 bg-stone-800 h-1.5 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>$25/hr</span>
                  <span>$75/hr</span>
                  <span>$250/hr</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400 leading-relaxed">
                Basis: Standard 250 business days per year. Recovery metric derived from established
                90-minute ultradian time-blocking protocols.
              </div>
            </div>

            {/* Ledger Line Items */}
            <div className="lg:col-span-6 rounded border border-white/[0.08] bg-[#0c0d0e] p-6 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 pb-3 border-b border-white/[0.08] mb-5">
                  Annual Assessment Balance
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center text-stone-400">
                    <span>Lost Hours (Annual):</span>
                    <span className="text-stone-200 font-medium">
                      {annualLostHours.toLocaleString()} hrs
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-stone-400">
                    <span>Forfeited Output:</span>
                    <span className="text-stone-300 font-medium">
                      ${annualCost.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-stone-400">
                    <span>Reclaimed Focus Hours:</span>
                    <span className="text-stone-200 font-medium">
                      +{reclaimedHours.toLocaleString()} hrs / yr
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">
                      Recovered Value
                    </span>
                    <span className="font-serif text-2xl font-normal text-stone-100">
                      +${reclaimedValue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center gap-2 rounded border border-stone-300 bg-stone-100 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-stone-950 hover:bg-stone-200 transition-colors"
                >
                  <span>Acquire Protocol ($29)</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
