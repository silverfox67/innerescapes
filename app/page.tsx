import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DiagnosticFramework } from "@/components/DiagnosticFramework";
import { FocusYieldCalculator } from "@/components/FocusYieldCalculator";
import { BentoHabitSystem } from "@/components/BentoHabitSystem";
import { PricingMatrix } from "@/components/PricingMatrix";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight-950 text-gray-200">
      <Header />
      <main className="flex-1">
        <Hero />
        <DiagnosticFramework />
        <FocusYieldCalculator />
        <BentoHabitSystem />
        <PricingMatrix />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
