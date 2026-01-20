import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { PickleballIcon, ShieldPersonIcon } from "@/icons/icons";

// types import
import type { MachineCardProps } from "@/types";

export default function MachineCard({ name, description, images, perk, extra_info }: MachineCardProps) {
    const [index, setIndex] = useState(0);

    let perkIcon = null;
    if (perk === "AI-Integrated") {
        perkIcon = <Zap className="size-5" />;
    } else if (perk === "ID-Verification") {
        perkIcon = <ShieldPersonIcon className=" size-7" />;
    } else if (perk === "Rent & Return") {
        perkIcon = <PickleballIcon className=" size-7" color="white" strokeWidth={0.5}/>;
    }

    return (
        <Card className="p-5 w-[300px] md:w-[320px] bg-[#3e1e65] rounded-2xl shadow-xl border border-white/10">

            {/* IMAGE CAROUSEL */}
            <div
                className="w-full relative h-48 mb-4 rounded-lg bg-[#9d4dff]"
            >
                {/* Image indicators (vertical) — show when there are 2+ images */}
                {images && images.length >= 2 && (
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                        {[
                            '#773ac1', // first
                            '#121212', // second
                            '#e1e1e1', // third
                        ].slice(0, Math.min(3, images.length)).map((color, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setIndex(i)}
                                aria-label={`Show image ${i + 1}`}
                                className={`rounded-full transition-transform focus:outline-none border border-white/10 ${index === i ? 'ring-2 ring-white scale-105' : ''}`}
                                style={{
                                    width: index === i ? 14 : 12,
                                    height: index === i ? 14 : 12,
                                    backgroundColor: color,
                                }}
                            />
                        ))}
                    </div>
                )}

                <motion.img
                    key={index}
                    src={images[index]}
                    alt={name}
                    className="w-full h-full object-contain p-3 shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />

                
            </div>
            
            {/* PERK BADGE */}
            <div className="flex items-center space-x-2 mb-2 text-white">
                {perkIcon}
                <span className="text-sm">{perk}</span>
            </div>

            {/* MACHINE NAME */}
            <p className="text-xl font-bold my-1 text-left text-[#f67ceb]">
                {name} <span className="text-sm text-white/70">{extra_info ? `(${extra_info})` : null}</span>
            </p>


            {/* DESCRIPTION */}
            <p className="text-white/70 text-sm mb-4 text-left font-sub leading-relaxed">
                {description}
            </p>

            {/*  BUTTON */}
            <Button
                variant="default"
                className="w-full"
                onClick={() => {
                    // Use a stable machine slug (lowercase, hyphen-separated)
                    const slug = name.toLowerCase().replace(/\s+/g, "-");

                    // Update URL param so the page can be shared/persisted
                    const url = new URL(window.location.href);
                    url.searchParams.set("machine", slug);
                    window.history.replaceState({}, "", url.toString());

                    // Dispatch a custom event so forms/components can react immediately
                    try {
                        window.dispatchEvent(new CustomEvent("machineSelected", { detail: slug }));
                    } catch (e) {
                        // older browsers may not support CustomEvent constructor
                        const ev = document.createEvent("CustomEvent");
                        // @ts-ignore
                        ev.initCustomEvent("machineSelected", true, true, slug);
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
