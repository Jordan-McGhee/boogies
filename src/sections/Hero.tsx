import { motion } from "framer-motion";

// ui imports
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Wifi, Shield } from "lucide-react";
import boogie from "@/assets/boogie.png";

// component imports
import ValueCard from "@/components/ValueCard";

export default function Hero() {
    return (
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
            {/* Main Hero Area */}
            <div className="flex flex-col lg:flex-row items-center justify-around py-16 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center lg:text-left"
                >
                    <div
                        style={{ fontFamily: "'Luckiest Guy', cursive" }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <p className="text-6xl md:text-8xl lg:text-9xl">Boogie's</p>
                        <p className="text-4xl md:text-5xl lg:text-6xl">mini markets</p>
                    </div>

                    <p className="mt-5 text-lg text-white max-w-xl font-sub">
                        Smart, stylish vending solutions placed and managed{" "}
                        <span className="italic font-bold text-xl">free of charge</span> for
                        offices, gyms, apartments, and more in the Atlanta area.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => {
                                const contactSection = document.querySelector("#contact");
                                if (contactSection) {
                                    const offset = 60;
                                    const top = contactSection.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                        >
                            Schedule a Visit
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                                const productsSection = document.querySelector("#products");
                                if (productsSection) {
                                    const offset = 60;
                                    const top = productsSection.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                        >
                            See Machines
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 lg:mt-0"
                >
                    <img
                        src={boogie}
                        alt="Boogie mascot"
                        className="w-60 lg:w-80 h-full object-contain transform lg:-scale-x-100 mx-auto"
                    />
                </motion.div>
            </div>

            {/* Value Icons Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl py-12"
            >
                <ValueCard
                    icon={<Zap className="w-8 h-8" />}
                    title="AI Monitoring"
                    desc="Smart inventory tracking ensures shelves stay full."
                />
                <ValueCard
                    icon={<Wifi className="w-8 h-8" />}
                    title="Tap to Pay"
                    desc="Fast, seamless checkout with modern cashless payments."
                />
                <ValueCard
                    icon={<Shield className="w-8 h-8" />}
                    title="Full-Service"
                    desc="Installation, restocking, and maintenance included."
                />
                <ValueCard
                    icon={<CheckCircle className="w-8 h-8" />}
                    title="Free Placement"
                    desc="No cost to host a machine. Ever."
                />
            </motion.div>
        </div>
    );
}
