import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0c0d0e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded border border-white/10 bg-[#16171b] flex items-center justify-center font-serif text-stone-200 text-sm font-semibold">
            IE
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-normal tracking-tight text-stone-100 group-hover:text-stone-300 transition-colors">
              InnerEscapes
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
              Operational Protocols
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-400">
          <a href="#framework" className="hover:text-stone-200 transition-colors">
            Diagnosis
          </a>
          <a href="#calculator" className="hover:text-stone-200 transition-colors">
            Assessment
          </a>
          <a href="#system" className="hover:text-stone-200 transition-colors">
            Protocols
          </a>
          <a href="#pricing" className="hover:text-stone-200 transition-colors">
            Toolkit
          </a>
          <a href="#faq" className="hover:text-stone-200 transition-colors">
            Inquiries
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            <span>Vault Active</span>
          </div>
          <a
            href="#pricing"
            className="rounded border border-stone-700 bg-stone-100 px-3.5 py-1.5 text-xs font-mono font-medium text-stone-950 hover:bg-stone-200 transition-colors"
          >
            Access Vault
          </a>
        </div>
      </div>
    </header>
  );
}
