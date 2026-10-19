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
  const roiMultiplier = Math.round(reclaimedValue / 29);

  return (
    <section id="calculator" className="py-20 border-t border-midnight-700/60 bg-midnight-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-focus-500/10 border border-focus-500/20 text-xs font-mono text-focus-400 mb-3">
            INTERACTIVE ATTENTION AUDIT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            The Executive Focus Yield Calculator
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-300">
            Quantify the true economic damage of attention fragmentation. Even 2 hours of daily
            distraction translates to hundreds of lost deep-work hours and thousands in forfeited revenue.
          </p>
        </div>

        <div className="rounded-2xl border border-midnight-700 bg-midnight-900/80 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="distracted-hours" className="text-sm font-semibold text-gray-200">
                    Daily Fragmented / Distracted Time
                  </label>
                  <span className="font-mono text-sm font-bold text-glacier-400 bg-midnight-950 px-2.5 py-0.5 rounded border border-midnight-700">
                    {distractedHours} {distractedHours === 1 ? "Hour" : "Hours"}/Day
                  </span>
                </div>
                <input
                  id="distracted-hours"
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={distractedHours}
                  onChange={(e) => setDistractedHours(parseFloat(e.target.value))}
                  className="w-full accent-glacier-500 bg-midnight-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                  <span>1 Hour (Light)</span>
                  <span>3 Hours (Average)</span>
                  <span>6 Hours (Severe)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="hourly-rate" className="text-sm font-semibold text-gray-200">
                    Estimated Value of Your Productive Hour
                  </label>
                  <span className="font-mono text-sm font-bold text-focus-400 bg-midnight-950 px-2.5 py-0.5 rounded border border-midnight-700">
                    ${hourlyRate} / Hour
                  </span>
                </div>
                <input
                  id="hourly-rate"
                  type="range"
                  min="25"
                  max="250"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value, 10))}
                  className="w-full accent-focus-500 bg-midnight-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                  <span>$25/hr (Foundational)</span>
                  <span>$75/hr (Professional)</span>
                  <span>$250/hr (Executive)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-midnight-950/70 border border-midnight-800 text-xs text-gray-400 leading-relaxed font-mono">
                <span className="text-glacier-400 font-bold">ALGORITHM LOGIC:</span> Computed against a 250-day working year with a conservative 72% focus recovery coefficient derived from systematic dopamine reset protocols.
              </div>
            </div>

            {/* Live Metrics Output Card */}
            <div className="lg:col-span-6 rounded-xl border border-midnight-700 bg-gradient-to-br from-midnight-950 to-midnight-900 p-6 sm:p-7 shadow-inner">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-6 flex items-center justify-between">
                <span>Annual Attention Audit</span>
                <span className="text-focus-400 font-bold">● Live Model</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-midnight-800">
                  <span className="text-sm text-gray-400">Annual Hours Lost to Distraction</span>
                  <span className="font-mono text-base font-bold text-rose-400">
                    {annualLostHours.toLocaleString()} hrs / yr
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-midnight-800">
                  <span className="text-sm text-gray-400">Economic Opportunity Forfeited</span>
                  <span className="font-mono text-lg font-bold text-rose-400">
                    ${annualCost.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-midnight-800">
                  <span className="text-sm text-gray-400">Deep Work Reclaimed with InnerEscapes</span>
                  <span className="font-mono text-base font-bold text-focus-400">
                    +{reclaimedHours.toLocaleString()} hrs / yr
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-sm font-semibold text-white block">
                      Recovered Executive Value
                    </span>
                    <span className="text-[11px] text-gray-400">
                      Based on ${hourlyRate}/hr output
                    </span>
                  </div>
                  <span className="font-mono text-2xl font-black text-glacier-400">
                    +${reclaimedValue.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-focus-500/10 border border-focus-500/30 text-center mb-6">
                <span className="text-xs font-mono text-focus-300">
                  PROJECTED ROI ON $29 SYSTEM:{" "}
                  <strong className="text-focus-400 text-sm font-bold">
                    {roiMultiplier.toLocaleString()}x
                  </strong>
                </span>
              </div>

              <a
                href="#pricing"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-glacier-500 py-3 text-sm font-bold text-midnight-950 hover:bg-glacier-400 transition-all shadow-md active:scale-98"
              >
                <span>Reclaim Your Focus Now ($29)</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
