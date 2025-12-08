import MachinesCarousel from "@/components/MachineCard/MachineCardCarousel";
import slim from "@/assets/machine-examples/nano-front.png"
import single from "@/assets/machine-examples/prime-front.png"
import freeze from "@/assets/machine-examples/freeze-front.png"
import double from "@/assets/machine-examples/duo-front.png"
import slim_side from "@/assets/machine-examples/nano-side.png"
import single_side from "@/assets/machine-examples/prime-side.png"
import freeze_side from "@/assets/machine-examples/freeze-side.png"
import double_side from "@/assets/machine-examples/duo-side.png"

interface Machine {
    name: string;
    description: string;
    images: string[];
}

export default function OurMachines() {
    const machines: Machine[] = [
        {
            name: "Slim",
            description: "A compact solution offering full AI-powered checkout in a smaller footprint. Better for tight fits!",
            images: [slim, slim_side],
        },
        {
            name: "Single",
            description: "A streamlined single-column AI-enabled vending unit with smart tracking and fast grab-and-go access.",
            images: [single, single_side],
        },
        {
            name: "Freeze",
            description: "A compact, AI-powered vending machine designed for frozen food items. Perfect for quick meals and ice cream on the go!",
            images: [freeze, freeze_side],
        },
        {
            name: "Double",
            description: "A spacious, AI-powered double-column machine built for higher-traffic locations and broader product variety.",
            images: [double, double_side],
        }
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
