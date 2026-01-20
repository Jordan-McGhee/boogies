
import { motion } from "framer-motion";

// ui imports
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { SmartphoneNfc, ShoppingBasket, Receipt } from "lucide-react";

// mini market scenes
import tap_in from "@/assets/how-it-works/mini-markets/1_tap_in.png";
import stock_up from "@/assets/how-it-works/mini-markets/2_stock_up.png";
import roll_out from "@/assets/how-it-works/mini-markets/3_roll_out.png";

// nicotine scenes
import scan_in from "@/assets/how-it-works/nicotine/1_scan_in.png";
import shop_around from "@/assets/how-it-works/nicotine/2_shop_around.png";
import enjoy from "@/assets/how-it-works/nicotine/3_enjoy.png";
import type { SectionProps } from "@/types";

// pickleball scenes
// 


export default function HowItWorks({ currentIndustry }: SectionProps) {

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

    const miniMarketScenes = (
        <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6 -mx-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* tap in */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={tap_in} alt="Tap In" className="size-84 object-contain mx-auto lg:scale-100" />
            </motion.div>
            {/* stock up */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={stock_up} alt="Stock Up" className="size-84 object-contain mx-auto" />
            </motion.div>
            {/* roll out */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={roll_out} alt="Roll Out" className="size-84 object-contain mx-auto" />
            </motion.div>
        </motion.div>
    )

    const nicotineScenes = (
        <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6 -mx-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* scan in */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={scan_in} alt="Scan In" className="size-84 object-contain mx-auto" />
            </motion.div>
            {/* shop around */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={shop_around} alt="Shop Around" className="size-84 object-contain mx-auto" />
            </motion.div>
            {/* enjoy */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={enjoy} alt="Enjoy" className="size-84 object-contain mx-auto" />
            </motion.div>
        </motion.div>
    )

    const pickleballScenes = (
        <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6 -mx-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* tap in */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={tap_in} alt="Tap In" className="size-84 object-contain mx-auto" />
            </motion.div>
            {/* stock up */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={stock_up} alt="Stock Up" className="size-84 object-contain mx-auto" />
            </motion.div>
            {/* roll out */}
            <motion.div variants={itemVariants} className="text-center scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <img src={roll_out} alt="Roll Out" className="size-84 object-contain mx-auto" />
            </motion.div>
        </motion.div>
    )


    let scenes: any;

    if (currentIndustry === "mini-market") {
        scenes = miniMarketScenes;
    } else if (currentIndustry === "nicotine") {
        scenes = nicotineScenes;
    } else if (currentIndustry === "pickleball") {
        scenes = pickleballScenes;
    }

    return (
        <>
            <section id="how" className="py-10 max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-8 text-white"
                >
                    <p className="text-4xl mb-8 text-center lg:text-left" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                        How They Work
                    </p>
                </motion.div>

                {/* scenes */}
                {scenes}

            </section>
        </>
    );
}