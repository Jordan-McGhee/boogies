import { motion } from "framer-motion";

// ui imports
import { Card } from "@/components/ui/card";

export default function ValueCard({ icon, title, desc, diffClass }: { icon: any; title: string; desc: string; diffClass?: string }) {
    return (
        <Card className={`${diffClass ? diffClass : ""} p-6 bg-[#3E1E65] border-neutral-700 hover:border-[#f67ceb] transition-all duration-200 rounded-2xl shadow-md flex flex-col items-start hover:cursor-pointer hover:scale-110`}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-[#f67ceb] mb-4"
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-neutral-300 mt-2">{desc}</p>
        </Card>
    );
}