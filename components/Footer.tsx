import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-midnight-700/80 bg-midnight-950 py-12 text-gray-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded bg-gradient-to-br from-glacier-500 to-midnight-800 flex items-center justify-center font-mono font-bold text-glacier-400 text-xs">
                IE
              </div>
              <span className="font-bold text-white text-base">InnerEscapes</span>
            </div>
            <p className="max-w-md text-gray-400 leading-relaxed mb-4">
              A specialized digital spoke within the Trident Digital Network. Commercial-grade
              neuro-habit systems, temporal time-blocking frameworks, and cognitive focus engineering.
            </p>
            <div className="text-[11px] font-mono text-gray-400">
              OPERATIONAL HUB:{" "}
              <a
                href="https://weselldigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-400 hover:underline"
              >
                weselldigital.com
              </a>
            </div>
          </div>

          {/* Direct Navigation */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] font-mono mb-3">
              Architecture Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#framework" className="hover:text-white transition-colors">
                  Diagnostic Framework
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Focus Yield Calculator
                </a>
              </li>
              <li>
                <a href="#system" className="hover:text-white transition-colors">
                  Habit Pillars
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Vault Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Technical FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Billing */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] font-mono mb-3">
              Billing & Compliance
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
              All transactions are secured via 256-bit encryption. Charges reflect as{" "}
              <strong className="text-gray-300">TRIDENT* INNERSCAPE</strong>.
            </p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Technical support and claim token queries:{" "}
              <a
                href="mailto:support@weselldigital.com"
                className="text-glacier-400 hover:underline"
              >
                support@weselldigital.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-midnight-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} innerescapes.com &bull; All rights reserved. Billing and
            fulfillment operated by Trident Website Design.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Vault Delivery Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
