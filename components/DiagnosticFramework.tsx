import React from "react";

export function DiagnosticFramework() {
  const steps = [
    {
      num: "01",
      title: "Mental Fatigue & Attention Residue",
      summary:
        "Switching between communication tools and analytical tasks leaves lingering cognitive residue. The mind expends continuous energy re-orienting to context, resulting in mid-afternoon exhaustion regardless of actual workload.",
      takeaway:
        "Root Issue: Unchecked notification loops that interrupt uninterrupted focus blocks.",
    },
    {
      num: "02",
      title: "Reactive Communication Traps",
      summary:
        "Modern work cultures reward instant responsiveness over deep strategic execution. When calendars are fragmented by ad-hoc syncs and Slack threads, meaningful output is postponed to late evenings.",
      takeaway:
        "Root Issue: Absence of hard asynchronous boundaries and scheduled response windows.",
    },
    {
      num: "03",
      title: "Friction-Inverse Environmental Fencing",
      summary:
        "Willpower is an unreliable safeguard against distraction. By introducing physical and digital friction between impulses and devices, attention defaults naturally to high-leverage priorities without mental struggle.",
      takeaway:
        "Resolution: Hardened OS configurations, dedicated workspace zones, and 90-minute chrono-blocks.",
    },
    {
      num: "04",
      title: "Sustainable Daily Executive Flow",
      summary:
        "Calm, repeatable daily productivity emerges when working hours are mapped to natural ultradian energy peaks. Work concludes cleanly each day with zero carryover stress or cognitive exhaustion.",
      takeaway:
        "Documented Yield: 3+ hours of protected deep-work reclaimed daily with zero burnout.",
    },
  ];

  return (
    <section id="framework" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-3">
            Operational Progression // 01 &mdash; 04
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-stone-100 mb-4">
            A structured path from fragmented attention to calm clarity.
          </h2>
          <p className="text-base text-stone-300 leading-relaxed font-sans max-w-2xl">
            Why standard productivity hacks fail: willpower is a depletable biological reserve.
            Sustained executive focus requires structured environmental boundaries rather than brute discipline.
          </p>
        </div>

        {/* Clean, Flat Editorial Progression List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-sm tracking-wider text-zinc-400 font-medium">
                  {step.num} &mdash;
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-stone-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans mb-4">
                  {step.summary}
                </p>
                <div className="text-xs font-mono text-zinc-400 tracking-wide">
                  {step.takeaway}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
