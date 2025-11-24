// import About from "@/sections/About";
import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import OurMachines from "@/sections/OurMachines";
import HowItWorks from "@/sections/HowItWorks";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

import bg from "@/assets/bg.png";

export default function BoogiesWebsite() {
  return (
    <div
      className="min-h-screen antialiased text-gray-50 font-sans"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />

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