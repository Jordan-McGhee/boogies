import { motion } from "framer-motion";

// ui imports
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Wifi, Shield } from "lucide-react";
import boogie from "@/assets/boogie.png";

// component imports
import ValueCard from "@/components/ValueCard";

export default function Hero() {
    return (
        <div className="flex flex-col items-center w-full">
            {/* Main Hero Area */}
            <div className="flex items-center justify-around py-16 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={boogie} alt="Boogie mascot" className="w-80 h-full object-contain" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ fontFamily: "'Luckiest Guy', cursive" }} className="flex flex-col">
                        <p className="text-9xl">Boogie's</p>
                        <p className="text-6xl">mini markets</p>
                    </div>

                    <p className="mt-5 text-lg text-white max-w-xl font-sub">
                        Smart, stylish vending solutions placed and managed{" "}
                        <span className="italic font-bold text-xl">free of charge</span> for
                        offices, gyms, apartments, and more in the Atlanta area.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <Button variant="default" size="lg">Request a Visit!</Button>
                        <Button variant="outline" size="lg">See Machines</Button>
                    </div>
                </motion.div>
            </div>

            {/* Value Icons Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl py-12 px-6"
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


