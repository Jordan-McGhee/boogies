// Fresh rebuilt project using shadcn/ui, Tailwind, Framer Motion, your accents, your fonts.
// This is a starting point. We will expand as you choose components.

import About from "@/sections/About";
import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import HowItWorks from "@/sections/HowItWorks";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function BoogiesWebsite() {
  return (
    <div className="min-h-screen antialiased bg-gradient-to-b from-[#773ac1] via-[#8a42e5] to-[#9d4dff] text-gray-50 font-sans">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <Products />
        <HowItWorks />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}