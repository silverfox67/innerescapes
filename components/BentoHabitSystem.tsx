import React from "react";

export function BentoHabitSystem() {
  const protocols = [
    {
      label: "Protocol I",
      name: "The 72-Hour Attention Reset",
      description:
        "A quiet, systematic reset of daily stimulus patterns. Clears addictive notification triggers, restabilizes morning cognitive clarity, and restores the satisfaction of uninterrupted work.",
      format: "PDF Field Guide & Audio Primer",
      pages: "28 Pages",
    },
    {
      label: "Protocol II",
      name: "The Deep-Work Chrono-Matrix",
      description:
        "Pre-configured calendar architectures mapping 90-minute focus blocks to natural energy peaks. Shields high-leverage thinking hours with clear asynchronous communication boundaries.",
      format: ".ics Calendar Templates (Apple & Google)",
      pages: "Instant Import",
    },
    {
      label: "Protocol III",
      name: "Workstation & System Fencing",
      description:
        "Placing subtle, intentional friction between distraction and routine. Hardened operating system configurations and physical workspace rules that eliminate impulses automatically.",
      format: "OS System Guides (Mac & Windows)",
      pages: "Checklists & Rules",
    },
    {
      label: "Protocol IV",
      name: "Daily Sprint Ledger & Notion Vault",
      description:
        "A calm, clean digital command center to track daily deep-work hours, project sprints, and habit consistency. Includes printable zero-screen morning planning sheets.",
      format: "Notion Workspace + Analog Printables",
      pages: "Complete Suite",
    },
  ];

  return (
    <section id="system" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-3">
            System Architecture // 4 Operational Components
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-stone-100 mb-4">
            Daily Operational Protocols for Focused Work
          </h2>
          <p className="text-base text-stone-300 leading-relaxed font-sans max-w-2xl">
            A comprehensive, modular framework combining practical time-blocking templates,
            system fencing rules, and quiet daily focus ledgers.
          </p>
        </div>

        {/* 2x2 Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {protocols.map((p, i) => (
            <div
              key={i}
              className="rounded border border-white/[0.08] bg-[#121316] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3">
                  {p.label}
                </div>
                <h3 className="text-xl font-serif font-normal text-stone-100 mb-3">
                  {p.name}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-sans mb-6">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono text-zinc-400">
                <span>{p.format}</span>
                <span className="text-stone-300 font-medium">{p.pages}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
