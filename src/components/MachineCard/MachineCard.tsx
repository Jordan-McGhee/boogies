import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

import bg from "@/assets/bg.png";

interface MachineCardProps {
    name: string;
    description: string;
    images: string[]; // multiple images for inner-carousel
}

export default function MachineCard({ name, description, images }: MachineCardProps) {
    const [index, setIndex] = useState(0);
    setIndex(0)

    // const prevImage = () => {
    //     setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    // };

    // const nextImage = () => {
    //     setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    // };

    return (
        <Card className="p-5 w-[300px] md:w-[320px] bg-[#3e1e65] rounded-2xl shadow-xl border border-white/10">

            {/* IMAGE CAROUSEL */}
            <div
                className="relative w-full h-48 mb-4 overflow-hidden rounded-lg"
                style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={name}
                    className="w-full h-full object-contain p-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Carousel controls */}
                {/* <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/40 rounded-full backdrop-blur hover:cursor-pointer"
                    onClick={prevImage}
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/40 rounded-full backdrop-blur hover:cursor-pointer"
                    onClick={nextImage}
                >
                    <ChevronRight size={18} />
                </button> */}
            </div>

            {/* BADGE */}
            <p className="flex items-center gap-1 w-fit text-[#f67ceb] py-1">
                <Zap size={14} className="text-[#f67ceb]" />
                AI-Enabled
            </p>

            {/* MACHINE NAME */}
            <p className="text-xl font-bold text-white my-1 text-left">
                {name}
            </p>

            {/* DESCRIPTION */}
            <p className="text-white/70 text-sm mb-4 text-left font-sub leading-relaxed">
                {description}
            </p>

            {/*  BUTTON */}
            <Button
                variant="accent"
                className="w-full"
                onClick={() => {
                    // Use a stable machine value (lowercase name)
                    const value = name.toLowerCase();

                    // Update URL param so the page can be shared/persisted
                    const url = new URL(window.location.href);
                    url.searchParams.set("machine", value);
                    window.history.replaceState({}, "", url.toString());

                    // Dispatch a custom event so forms/components can react immediately
                    try {
                        window.dispatchEvent(new CustomEvent("machineSelected", { detail: value }));
                    } catch (e) {
                        // older browsers may not support CustomEvent constructor
                        const ev = document.createEvent("CustomEvent");
                        // @ts-ignore
                        ev.initCustomEvent("machineSelected", true, true, value);
                        window.dispatchEvent(ev);
                    }

                    // Scroll to the contact form (prefer exact form id), then focus name input
                    const contactForm = document.getElementById("contact-form") || document.getElementById("contact");
                    if (contactForm) {
                        contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
                        // focus after a short delay so the browser finishes scrolling
                        setTimeout(() => {
                            const input = document.querySelector('#contact-form input[name="name"]') as HTMLInputElement | null;
                            input?.focus();
                        }, 600);
                    }
                }}
            >
                Tell Me More
            </Button>
        </Card>
    );
}
