import MachinesCarousel from "@/components/MachineCard/MachineCardCarousel";
import single from "@/assets/machine-examples/single.png";
import slim from "@/assets/machine-examples/slim.png";
import doubleImg from "@/assets/machine-examples/double.png";

interface Machine {
    name: string;
    description: string;
    images: string[];
}

export default function OurMachines() {
    const machines: Machine[] = [
        {
            name: "Single",
            description: "A streamlined single-column AI-enabled vending unit with smart tracking and fast grab-and-go access.",
            images: [single],
        },
        {
            name: "Double",
            description: "A spacious, AI-powered double-column machine built for higher-traffic locations and broader product variety.",
            images: [doubleImg],
        },
        {
            name: "Slim",
            description: "A compact solution offering full AI-powered checkout in a smaller footprint. Better for tight fits!",
            images: [slim],
        },
    ];

    return (
        <section id="products" className="py-10 text-center lg:text-left max-w-7xl mx-auto">
            <p className="text-4xl mb-8" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                Our Machines
            </p>

            <MachinesCarousel machines={machines} />
        </section>
    );
}
