import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Products() {
    return (
        <section id="products" className="py-10">
            <p className="text-3xl" style={{ fontFamily: "'Luckiest Guy', cursive" }}>Our Machines</p>
            <p className="text-white/80 mt-2">(Placeholder carousel with motion — no images yet)</p>

            <Carousel className="mt-8">
                <CarouselContent className="flex gap-6">
                    {[1, 2, 3].map((i) => (
                        <CarouselItem key={i} className="basis-80">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Card className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10">
                                    <CardHeader>
                                        <CardTitle className="font-sub">Machine {i}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-white/70 font-sub">Placeholder description for vending machine {i}.</CardContent>
                                </Card>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
