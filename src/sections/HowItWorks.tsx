import { motion } from "framer-motion";

// ui imports
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SmartphoneNfc, ShoppingBasket, Receipt } from "lucide-react";

// scenes
import tap_in from "@/assets/how-it-works/1.tap_in.png";
import stock_up from "@/assets/how-it-works/2.stock_up.png";
import roll_out from "@/assets/how-it-works/3.roll_out.png";

// component imports
import ValueCard from "@/components/ValueCard";

export default function HowItWorks() {

    // option 1 code
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    // Option 2 code
    const steps = [
        {
            icon: <SmartphoneNfc className="size-10 text-[#FF4DF0]" />,
            title: "Tap In",
            desc: "Use your phone or card to tap and open the door. This starts your shopping session.",
        },
        {
            icon: <ShoppingBasket className="size-8 text-[#FF4DF0]" />,
            title: "Stock Up",
            desc: "Grab anything you want — our smart AI agent tracks it for you.",
        },
        {
            icon: <Receipt className="size-10 text-[#FF4DF0]" />,
            title: "Roll Out",
            desc: "Enjoy your snacks, while AI takes care of the rest.",
        },
    ];

    return (
        <>
            <section id="how" className="py-10">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-8 text-white"
                >
                    <p className="text-4xl mb-8" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                        How They Work
                    </p>
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* tap in */}
                    <motion.div variants={itemVariants} className="text-center">
                        <img src={tap_in} alt="Tap In" className="size-84 object-contain mx-auto" />
                        <p className="text-lg italic font-medium mx-auto w-4/5 -mt-4">Tap your phone or card to the reader to get started!</p>
                    </motion.div>
                    {/* stock up */}
                    <motion.div variants={itemVariants} className="text-center">
                        <img src={stock_up} alt="Stock Up" className="size-84 object-contain mx-auto" />
                        <p className="text-lg italic font-medium mx-auto w-4/5 -mt-4">
                            Our AI system tracks everything you grab, so.
                        </p>
                    </motion.div>
                    {/* roll out */}
                    <motion.div variants={itemVariants} className="text-center">
                        <img src={roll_out} alt="Roll Out" className="size-84 object-contain mx-auto" />
                        <p className="text-lg italic font-medium mx-auto w-4/5 -mt-4">
                            We handle all the logistics, from installation to maintenance.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* <div className="w-full py-24 flex flex-col items-center px-6">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <ValueCard
                                icon={step.icon}
                                title={step.title}
                                desc={step.desc}
                                diffClass="min-h-48"
                            // className="h-full p-8 bg-neutral-900 border-neutral-700 hover:border-[#FF4DF0] transition-all duration-200 rounded-2xl shadow-lg flex flex-col items-center text-center"
                            // contentClassName="flex-grow flex flex-col justify-between"
                            />
                        </motion.div>
                    ))}
                </div>
            </div> */}
        </>
    );
}