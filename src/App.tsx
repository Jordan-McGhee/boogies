// import About from "@/sections/About";
import Navigation from "@/sections/Navigation";
import PromoBanner from "@/sections/PromoBanner";
import Hero from "@/sections/Hero";
import OurMachines from "@/sections/OurMachines";
import HowItWorks from "@/sections/HowItWorks";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

import bg from "@/assets/bg.png";

export default function BoogiesWebsite() {
  return (
    <div className="min-h-screen antialiased text-gray-50 font-sans bg-scroll md:bg-fixed bg-top md:bg-center bg-[1440x3120px] md:bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >


      <Navigation />
      <PromoBanner />

      <main className=" mx-auto px-6">
        <Hero />
        {/* <About /> */}
        <HowItWorks />
        <OurMachines />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}