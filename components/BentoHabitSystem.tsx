import React from "react";

export function BentoHabitSystem() {
  return (
    <section id="system" className="py-20 border-t border-midnight-700/60 bg-midnight-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-glacier-500/10 border border-glacier-500/20 text-xs font-mono text-glacier-400 mb-3">
            COMPLETE SYSTEM BLUEPRINT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            The Neuro-Habit Architecture: 4 Operational Pillars
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            What is the InnerEscapes Neuro-Habit System? It is an integrated operating system
            combining biological receptor reset protocols, mathematical time-blocking matrices,
            and friction-engineered environmental templates.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Item 1: 72-Hour Reset (Large - 7 cols) */}
          <div className="md:col-span-7 rounded-2xl border border-midnight-700 bg-gradient-to-br from-midnight-900 to-midnight-950 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-glacier-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-glacier-400 font-semibold">
                  Pillar 01 // Biological Calibration
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                The 72-Hour Neurochemical Reset Protocol
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                A step-by-step clinical detox plan that resets dopamine sensitivity without requiring
                an unrealistic monastic retreat. Strips low-effort digital stimulation, restabilizes
                cortisol rhythms, and restores the biological satisfaction of completing complex tasks.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-300 font-mono mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Elimination schedule for intermittent micro-feedback apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Adenosine and morning blue-light calibration protocol</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Emergency craving-suppression micro-routines (under 90 seconds)</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-midnight-950 p-4 border border-midnight-800 text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>FORMAT: PDF Field Manual + Audio Primer</span>
              <span className="text-glacier-400 font-bold">28 Pages</span>
            </div>
          </div>

          {/* Bento Item 2: Chrono-Matrix (5 cols) */}
          <div className="md:col-span-5 rounded-2xl border border-midnight-700 bg-gradient-to-br from-midnight-900 to-midnight-950 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-focus-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-focus-400 font-semibold">
                  Pillar 02 // Temporal Structure
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                The Deep-Work Chrono-Matrix
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Pre-configured calendar architectures mapping 90-minute ultradian focus blocks
                against your natural circadian peaks. Locks out context switching and shields your
                highest-leverage working hours.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 font-mono mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Google & Apple Calendar .ics import templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Asynchronous boundary templates for Slack/Teams</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-midnight-950 p-4 border border-midnight-800 text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>FORMAT: .ics Templates + Notion Setup</span>
              <span className="text-focus-400 font-bold">Ready to Import</span>
            </div>
          </div>

          {/* Bento Item 3: Friction-Inverse Engineering (5 cols) */}
          <div className="md:col-span-5 rounded-2xl border border-midnight-700 bg-gradient-to-br from-midnight-900 to-midnight-950 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  Pillar 03 // Physical & Digital Fencing
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Friction-Inverse Habit Fencing
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                By intentionally placing 3 extra steps between your impulse and digital distraction,
                bad habits collapse automatically without expending willpower. Simultaneously reduces
                friction to launch deep work to less than 15 seconds.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 font-mono mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Mac/Windows system configuration hardening guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-focus-400 font-bold">&#10003;</span>
                  <span>Physical workstation zoning blueprint</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-midnight-950 p-4 border border-midnight-800 text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>FORMAT: Checklists + OS Config Scripts</span>
              <span className="text-sky-400 font-bold">1-Click Rules</span>
            </div>
          </div>

          {/* Bento Item 4: Executive Focus Dashboard & Notion Vault (7 cols) */}
          <div className="md:col-span-7 rounded-2xl border border-midnight-700 bg-gradient-to-br from-midnight-900 to-midnight-950 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  Pillar 04 // Tracking & Analytics
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Executive Focus Dashboard & Notion Sprint Vault
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                A centralized command center tracking daily deep-work minutes, cognitive stamina
                scores, and habit streaks. Built-in retrospective analysis flags early signs of
                attentional drift before burnout occurs.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-300 font-mono mb-6">
                <div className="p-3 rounded-lg bg-midnight-950 border border-midnight-800">
                  <span className="text-glacier-400 font-bold block mb-1">Notion Workspace</span>
                  <span>Full Kanban sprint board & habit tracker template.</span>
                </div>
                <div className="p-3 rounded-lg bg-midnight-950 border border-midnight-800">
                  <span className="text-focus-400 font-bold block mb-1">Printable Field Sheets</span>
                  <span>Analog daily planners for zero-screen morning routines.</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-midnight-950 p-4 border border-midnight-800 text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>FORMAT: Notion Template + Google Sheet + PDF</span>
              <span className="text-indigo-400 font-bold">Full Package</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
