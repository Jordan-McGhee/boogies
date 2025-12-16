// FAQ component with refined answers and subtle motion animations
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section id="faq" className="py-16 w-full max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl mb-8 text-center lg:text-left"
                style={{ fontFamily: "'Luckiest Guy', cursive" }}
            >
                FAQs
            </motion.p>

            {/* Accordion Wrapper */}
            <Accordion type="single" collapsible className="space-y-4 bg-[#3E1E65] p-6 rounded-2xl">

                {/* 1 — AI vs regular vending — Premium + practical */}
                <AccordionItem value="q1">
                    <AccordionTrigger className="font-medium text-xl">What’s the difference between AI and regular vending?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Instead of slowly punching buttons to grab snacks one at a time, customers simply tap their phone or card, grab what they want, and leave in less than a minute. The system updates their cart automatically and handles checkout seamlessly at the end.
                    </AccordionContent>
                </AccordionItem>

                {/* 2 — Do I have to pay anything to get a machine? — Friendly */}
                <AccordionItem value="q2">
                    <AccordionTrigger className="font-medium text-xl">Do I have to pay anything to get a machine?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        For a limited time, we’re waiving all placement and management fees for new business customers that sign a site agreement. There are no upfront costs or hidden fees. Reach out for a site visit while this promo lasts!
                    </AccordionContent>
                </AccordionItem>

                {/* 3 — How soon can you install in Atlanta? — Flexible */}
                <AccordionItem value="q3">
                    <AccordionTrigger className="font-medium text-xl">How soon can you install in Atlanta?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        We can install within 7 business days after your site is approved. We schedule a quick walkthrough of the space and get a feel for foot traffic, assess your needs, and finalize the machine selection. The entire process takes around a week, but we can move faster if needed.
                    </AccordionContent>
                </AccordionItem>

                {/* 4 — What if something breaks? — Friendly */}
                <AccordionItem value="q4">
                    <AccordionTrigger className="font-medium text-xl">What if something breaks?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        You don’t have to lift a finger. If something goes wrong, we’re notified immediately and handle the repair quickly, while updating you throughout the process.
                    </AccordionContent>
                </AccordionItem>

                {/* 5 — Can I choose what products go inside? — Friendly + demand-based */}
                <AccordionItem value="q5">
                    <AccordionTrigger className="font-medium text-xl">Can I choose what products go inside?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        We stock a diverse mix of snacks and drinks that work well in most locations, but if there’s enough demand for specific items, we’re happy to adjust the selection.
                    </AccordionContent>
                </AccordionItem>

                {/* 6 — What locations qualify? — Simple */}
                <AccordionItem value="q6">
                    <AccordionTrigger className="font-medium text-xl">What locations qualify?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Any place where people regularly gather — offices, gyms, apartments, coworking spaces, and more.
                    </AccordionContent>
                </AccordionItem>

                {/* 7 — How much space do I need? — Detailed + friendly */}
                <AccordionItem value="q7">
                    <AccordionTrigger className="font-medium text-lg">How much space do I need? What do the machines need to run?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Our machine dimensions are as follows:
                        <ul className="list-disc pl-6 py-4">
                            <li><strong>Slim:</strong> 22.8" W × 30" D × 76.4" H</li>
                            <li><strong>Single:</strong> 29.5" W × 29.1" D × 79.5" H</li>
                            <li><strong>Freeze:</strong> 27.6" W × 35.8" D × 80.4" H</li>
                            <li><strong>Double:</strong> 53.9" W × 27.9" D × 79.5" H</li>
                        </ul>
                        The machines require a standard power outlet. A Wi-Fi connection is not necessary, but a plus if available.
                    </AccordionContent>
                </AccordionItem>

                {/* 8 — What payment methods are supported? — Modern + detailed */}
                <AccordionItem value="q8">
                    <AccordionTrigger className="font-medium text-lg">What payment methods are supported?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        We support tap‑to‑pay, Apple Pay, Google Pay, mobile wallets, chip cards, debit cards, and credit cards. The machines will not accept any cash payments.
                    </AccordionContent>
                </AccordionItem>
                
            </Accordion>
        </section>
    );
}
