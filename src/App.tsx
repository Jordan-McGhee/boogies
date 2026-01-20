import React, { useMemo, useState } from "react";

import Navigation from "@/sections/Navigation";
import PromoBanner from "@/sections/PromoBanner";
import Hero from "@/sections/Hero";
import OurMachines from "@/sections/OurMachines";
import HowItWorks from "@/sections/HowItWorks";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

import bg from "@/assets/bg.png";

// types
import type { Industry, Machine } from "@/types";

// machine data
import { machinesByIndustry } from "@/machines";

export default function BoogiesWebsite() {

  // State for active industry
  const [activeIndustry, setActiveIndustry] = useState<Industry>("mini-market");

  const handleIndustryChange = (industry: Industry) => {
    setActiveIndustry(industry);
  };


  return (
    <div
      className="min-h-screen antialiased text-gray-50 font-sans bg-scroll md:bg-fixed bg-top md:bg-center bg-[1440x3120px] md:bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <Navigation
        currentIndustry={activeIndustry}
        setIndustry={handleIndustryChange}
      />

      <PromoBanner />

      <main className="mx-auto px-6">

        <Hero
          currentIndustry={activeIndustry}
          setIndustry={handleIndustryChange}
        />

        {activeIndustry !== "pickleball" && (
          <HowItWorks
            currentIndustry={activeIndustry}
            setIndustry={handleIndustryChange}
          />
        )}

        <OurMachines
          currentIndustry={activeIndustry}
          setIndustry={handleIndustryChange}
        />

        <FAQ
          currentIndustry={activeIndustry}
          setIndustry={handleIndustryChange}
        />


        <Contact
          currentIndustry={activeIndustry}
          setIndustry={handleIndustryChange}
        />

        <Footer />
      </main>
    </div>
  );
}
