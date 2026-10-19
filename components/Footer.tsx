import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#0c0d0e] py-16 text-zinc-400 text-xs font-mono">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded border border-white/10 bg-[#16171b] flex items-center justify-center font-serif text-stone-200 text-xs font-semibold">
                IE
              </div>
              <span className="font-serif text-sm font-normal text-stone-200">InnerEscapes</span>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-sm mb-4 font-sans text-xs">
              A specialized digital spoke within the Trident Digital Network. Structured systems
              for calm, uninterrupted focus, operational time-blocking, and daily executive clarity.
            </p>
            <div className="text-[11px] text-zinc-500">
              NETWORK HUB:{" "}
              <a
                href="https://weselldigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:underline"
              >
                weselldigital.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="uppercase tracking-widest text-[11px] text-stone-300 font-semibold mb-3">
              Index
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#framework" className="hover:text-stone-200 transition-colors">
                  Diagnostic List
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-stone-200 transition-colors">
                  Assessment Ledger
                </a>
              </li>
              <li>
                <a href="#system" className="hover:text-stone-200 transition-colors">
                  System Protocols
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-stone-200 transition-colors">
                  Toolkit Packages
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-stone-200 transition-colors">
                  Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="md:col-span-3">
            <div className="uppercase tracking-widest text-[11px] text-stone-300 font-semibold mb-3">
              Compliance
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed mb-3">
              Charges reflect as <strong className="text-stone-300 font-normal">TRIDENT* INNERSCAPE</strong>.
            </p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Inquiries:{" "}
              <a
                href="mailto:support@weselldigital.com"
                className="text-stone-300 hover:underline"
              >
                support@weselldigital.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} innerescapes.com &bull; Billing & technical fulfillment operated by Trident Website Design.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300">
              Privacy
            </a>
            <a href="#" className="hover:text-stone-300">
              Terms
            </a>
            <a href="#" className="hover:text-stone-300">
              Vault Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
