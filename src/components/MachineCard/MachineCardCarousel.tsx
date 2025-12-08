import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MachineCard from "./MachineCard";
import { useMediaQuery } from "react-responsive";

interface Machine {
    name: string;
    description: string;
    images: string[];
}

interface MachinesCarouselProps {
    machines: Machine[];
}

export default function MachinesCarousel({ machines }: MachinesCarouselProps) {
    const [index, setIndex] = useState(0);

    // Mobile/tablet = carousel, md and up = static 3 cards
    const isMobile = useMediaQuery({ maxWidth: 1024 });

    const prev = () => {
        setIndex((prev) => (prev === 0 ? machines.length - 1 : prev - 1));
    };

    const next = () => {
        setIndex((prev) => (prev === machines.length - 1 ? 0 : prev + 1));
    };

    // What machines should be shown?
    const visibleMachines = isMobile
        ? [machines[index]] // mobile carousel
        : machines.slice(index, index + 3).concat(
            machines.slice(0, Math.max(0, index + 3 - machines.length))
        ); // desktop: show 3 cards, wrap around if needed

    return (
        <section className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-6xl">

                {/* CAROUSEL CONTROLS */}
                {!isMobile && (
                    <>
                        <button
                            className="absolute -left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={prev}
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            className="absolute -right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={next}
                        >
                            <ChevronRight size={22} />
                        </button>
                    </>
                )}

                {/* MOBILE CAROUSEL CONTROLS */}
                {isMobile && (
                    <>
                        <button
                            className="absolute -left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={prev}
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 hover:cursor-pointer"
                            onClick={next}
                        >
                            <ChevronRight size={22} />
                        </button>
                    </>
                )}

                {/* CARDS */}
                <div
                    className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        } gap-6 justify-items-center px-4`}
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
                                description={machine.description}
                                images={machine.images}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
