import { useState } from "react";
import { motion } from "framer-motion";

const MESSAGE =
    "New Business Special: FREE Placement & Management — LIMITED TIME ONLY!";

const REPEAT_COUNT = 60;

export default function PromoBanner() {
    const [isVisible, setIsVisible] = useState(
        () => localStorage.getItem("promoDismissed") !== "true"
    );

    if (!isVisible) return null;

    const handleScrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full bg-[#f67ceb] overflow-hidden">
            <div className="relative h-16 flex items-center">
                {/* Marquee */}
                <motion.div
                    className="flex whitespace-nowrap cursor-pointer pr-16"
                    onClick={handleScrollToContact}
                    animate={{ x: [0, -2000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
                        <span
                            key={i}
                            className="text-white text-lg lg:text-xl font-black px-8"
                        >
                            {MESSAGE}
                        </span>
                    ))}
                </motion.div>

                {/* Close Button Container */}
                <div className="absolute right-3 z-20">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            localStorage.setItem("promoDismissed", "true");
                            setIsVisible(false);
                        }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#f67ceb] hover:bg-white/30 transition text-lg font-bold"
                        aria-label="Dismiss banner"
                    >
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
}
