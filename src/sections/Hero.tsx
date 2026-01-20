import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// ui imports
// import { Button } from "@/components/ui/button";
import { CheckCircle, Wifi, Handshake, Clock, ShoppingBasket } from "lucide-react";
import { PickleballIcon, SmokingIcon } from "@/icons/icons";

// boogies imports
import boogie from "@/assets/boogies/boogie.png";
import boogie_vape from "@/assets/boogies/boogie-vape-lean.png";
import boogie_pickleball from "@/assets/boogies/boogie-pickleball.png";

// component imports
import ValueCard from "@/components/ValueCard";

// type imports
import type { SectionProps, IndustryButtonProps } from "@/types";

function IndustryButton({ industry, currentIndustry, setIndustry, icon, label, disabled }: IndustryButtonProps & { disabled?: boolean }) {
    return (
        <button
            type="button"
            onClick={() => !disabled && setIndustry(industry)}
            className={cn(
                "p-4 rounded-xl border transition-all flex flex-col items-center gap-2 bg-[#3e1e65] hover:bg-[#3e1e65] shadow-md",
                "cursor-pointer select-none",
                currentIndustry === industry
                    ? "border-[#f67ceb]"
                    : "bg-[#3e1e65]/60 border-none",
                disabled && "opacity-50 cursor-not-allowed"
            )}
            disabled={disabled}
        >
            {icon}
            <p className="text-sm font-semibold text-white">{label}</p>
        </button>
    );
}

export default function Hero({ currentIndustry, setIndustry }: SectionProps) {

    return (
        <div className="flex flex-col items-center w-full  mx-auto">
            {/* Main Hero Area */}
            <div className="flex flex-col lg:flex-row items-center justify-around py-16 w-full max-w-7xl">
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

                    <p className="mt-5 text-xl text-white max-w-xl font-sub">
                        Modern vending solutions across a growing range of industries. All machines are installed, stocked, and fully managed for you and your space.
                    </p>


                    <div className="flex flex-col gap-4 justify-center lg:justify-start">
                        <p
                            style={{ fontFamily: "'Luckiest Guy', cursive" }}
                            className="text-2xl md:text-3xl font-sub mt-8"
                        >
                            The industries we serve:
                        </p>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            <IndustryButton
                                industry="mini-market"
                                currentIndustry={currentIndustry}
                                setIndustry={() => setIndustry("mini-market")}
                                icon={<ShoppingBasket className="text-[#f67ceb] size-7" strokeWidth={1} />}
                                label="AI Mini Markets"
                            />
                            <IndustryButton
                                industry="pickleball"
                                currentIndustry={currentIndustry}
                                setIndustry={() => setIndustry("pickleball")}
                                icon={<PickleballIcon className="text-[#f67ceb] size-7" strokeWidth={0.5}/>}
                                label="Pickleball Vending"
                                // disabled={true}
                            />
                            <IndustryButton
                                industry="nicotine"
                                currentIndustry={currentIndustry}
                                setIndustry={() => setIndustry("nicotine")}
                                icon={<SmokingIcon className="text-[#f67ceb] size-7" />}
                                label="Vape & Nicotine"
                            />
                            

                        </div>
                    </div>
                </motion.div>

                {/* image */}
                <motion.div
                    key={currentIndustry} // Ensures re-mounting for animation on change
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 lg:mt-0"
                >
                    <img
                        src={
                            currentIndustry === "mini-market"
                                ? boogie
                                : currentIndustry === "nicotine"
                                    ? boogie_vape
                                    : boogie_pickleball
                        }
                        alt="Boogie mascot"
                        className={cn(
                            "w-60 lg:w-80 h-full object-contain mx-auto",
                            currentIndustry !== "nicotine" && "transform lg:-scale-x-100",
                            currentIndustry === "pickleball" && " mt-10 lg:mt-0"
                        )}
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
                    icon={<Clock className="w-8 h-8" />}
                    title="24/7 Remote Monitoring"
                    desc="Smart inventory tracking ensures machines stay full."
                />
                <ValueCard
                    icon={<Wifi className="w-8 h-8" />}
                    title="Tap to Pay"
                    desc="Fast, seamless checkout with modern cashless payments."
                />
                <ValueCard
                    icon={<Handshake className="w-8 h-8" />}
                    title="End-to-End Service"
                    desc="Installation, restocking, and maintenance included."
                />
                <ValueCard
                    icon={<CheckCircle className="w-8 h-8" />}
                    title="Fully Licensed & Insured"
                    desc="All the convenience with none of the liability."
                />
            </motion.div>
        </div>
    );
}
