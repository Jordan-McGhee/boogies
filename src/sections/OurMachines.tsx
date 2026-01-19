import MachinesCarousel from "@/components/MachineCard/MachineCardCarousel";
import type { Machine, SectionProps } from "@/types";

import { mini_market_machines, tobacco_machines, pickleball_machines } from "@/machines";

export default function OurMachines({ currentIndustry }: SectionProps) {

    // // decide which machines to show
    const machinesToShow: Machine[] = currentIndustry === "mini-market" ?
        mini_market_machines
        : currentIndustry === "tobacco"
            ? tobacco_machines
            : pickleball_machines;

    return (
        <section id="products" className="py-10 text-center lg:text-left max-w-7xl mx-auto">
            <p className="text-4xl mb-8" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                Our Machines
            </p>

            <MachinesCarousel machines={machinesToShow} />
        </section>
    );
}
