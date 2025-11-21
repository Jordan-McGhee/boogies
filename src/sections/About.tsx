import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import boogie from "@/assets/boogie.png"

export default function About() {

    return (
        <section id="about" className="py-10">
            <p className="text-4xl" style={{ fontFamily: "'Luckiest Guy', cursive" }}>About Us</p>

            <Card className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 mt-4 flex flex-col md:flex-row items-center gap-6 w-full h-80">


                <div className="flex-1">
                    <h3 className="text-xl font-bold font-sub">Who We Are</h3>
                    <p className="mt-2 text-white/80 font-sub">
                        We are a team of passionate individuals dedicated to providing the best vending solutions for your space.
                    </p>

                </div>
            </Card>

        </section>
    )
}