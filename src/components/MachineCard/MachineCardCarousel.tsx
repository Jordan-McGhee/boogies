import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MachineCard from "./MachineCard";
import { useMediaQuery } from "react-responsive";

// types import
import type { Machine, MachinesCarouselProps } from "@/types";



export default function MachinesCarousel({ machines }: MachinesCarouselProps) {
    const [index, setIndex] = useState(0);

    // Mobile/tablet = carousel, md and up = static 3 cards
    const isMobile = useMediaQuery({ maxWidth: 1024 });

    // whether there are enough items to cycle on desktop
    const canCycleDesktop = machines.length > 3;
    // whether there are enough items to cycle on mobile
    const canCycleMobile = machines.length > 1;

    const prev = () => {
        if (machines.length <= 1) return;
        setIndex((prev) => (prev === 0 ? machines.length - 1 : prev - 1));
    };

    const next = () => {
        if (machines.length <= 1) return;
        setIndex((prev) => (prev === machines.length - 1 ? 0 : prev + 1));
    };

    let visibleMachines: Machine[] = [];

    if (isMobile) {
        visibleMachines = [machines[index]]; // mobile carousel shows one item
    } else {
        // Desktop: if there are 3 or fewer machines, show them all (no duplicates, no looping)
        if (machines.length <= 3) {
            visibleMachines = machines;
        } else {
            // Enough machines to show a sliding window of 3 with wrap-around
            const end = index + 3;
            if (end <= machines.length) {
                visibleMachines = machines.slice(index, end);
            } else {
                visibleMachines = machines.slice(index).concat(machines.slice(0, end - machines.length));
            }
        }
    }

    return (
        <section className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-7xl">

                {/* CAROUSEL CONTROLS */}
                {!isMobile && canCycleDesktop && (
                    <>
                        <button
                            className="absolute -left-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={prev}
                            aria-label="Previous machines"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            className="absolute -right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={next}
                            aria-label="Next machines"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </>
                )}

                {/* MOBILE CAROUSEL CONTROLS (only show if more than one item) */}
                {isMobile && canCycleMobile && (
                    <>
                        <button
                            className="absolute -left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={prev}
                            aria-label="Previous machines"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={next}
                            aria-label="Next machines"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </>
                )}

                {/* CARDS */}
                {(() => {
                    // Determine grid column classes — for small counts, show only necessary columns so we can center
                    const gridColsClass = isMobile
                        ? "grid-cols-1"
                        : machines.length === 1
                            ? "grid-cols-1"
                            : machines.length === 2
                                ? "grid-cols-2 gap-x-32"
                                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

                    // When there are <=3 machines on desktop, shrink the grid to content and center it
                    const shrinkWrap = !isMobile && machines.length < 3 ? "w-max mx-auto" : "w-full";

                    return (
                        <div
                            className={`grid ${gridColsClass} gap-6 justify-items-center ${shrinkWrap}`}
                        >
                            {visibleMachines.map((machine, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <MachineCard
                                        name={machine.name}
                                        perk={machine.perk}
                                        extra_info={machine.extra_info}
                                        description={machine.description}
                                        images={machine.images}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    );
                })()}
            </div>
        </section>
    );
}
