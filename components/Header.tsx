import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-midnight-700/80 bg-midnight-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-glacier-500 to-midnight-800 p-[1px] shadow-sm shadow-glacier-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-midnight-950 font-mono font-bold text-glacier-400 text-sm">
              IE
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-glacier-400 transition-colors">
              InnerEscapes
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
              Neuro-Habit Vault
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
          <a href="#framework" className="hover:text-glacier-400 transition-colors">
            Diagnostic Framework
          </a>
          <a href="#calculator" className="hover:text-glacier-400 transition-colors">
            Yield Calculator
          </a>
          <a href="#system" className="hover:text-glacier-400 transition-colors">
            Habit Architecture
          </a>
          <a href="#pricing" className="hover:text-glacier-400 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-glacier-400 transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-midnight-900 border border-midnight-700 text-[11px] font-mono text-focus-400">
            <span className="h-1.5 w-1.5 rounded-full bg-focus-400 animate-pulse" />
            Vault Online
          </div>
          <a
            href="#pricing"
            className="rounded-lg bg-glacier-500 px-4 py-2 text-xs sm:text-sm font-semibold text-midnight-950 hover:bg-glacier-400 transition-all shadow-md shadow-glacier-500/20 active:scale-95"
          >
            Access System
          </a>
        </div>
      </div>
    </header>
  );
}
