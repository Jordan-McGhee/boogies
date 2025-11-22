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

                {/* 1 — Do I have to pay anything to get a machine? — Friendly */}
                <AccordionItem value="q1">
                    <AccordionTrigger className="font-medium text-lg">Do I have to pay anything to get a machine?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Nothing at all. We place the machine for free and take care of everything—setup, refilling, and repairs.
                    </AccordionContent>
                </AccordionItem>

                {/* 2 — How soon can you install in Atlanta? — Flexible */}
                <AccordionItem value="q2">
                    <AccordionTrigger className="font-medium text-lg">How soon can you install in Atlanta?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        We install as soon as your site is approved. The approval process typically takes around a week, but we can move faster if needed.
                    </AccordionContent>
                </AccordionItem>

                {/* 3 — What if something breaks? — Friendly */}
                <AccordionItem value="q3">
                    <AccordionTrigger className="font-medium text-lg">What if something breaks?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        You don’t have to lift a finger. If something goes wrong, we’re notified immediately and handle the repair.
                    </AccordionContent>
                </AccordionItem>

                {/* 4 — Can I choose what products go inside? — Friendly + demand-based */}
                <AccordionItem value="q4">
                    <AccordionTrigger className="font-medium text-lg">Can I choose what products go inside?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        We stock a diverse mix of snacks and drinks that work well in most locations, but if there’s enough demand for specific items, we’re happy to adjust the selection.
                    </AccordionContent>
                </AccordionItem>

                {/* 5 — What locations qualify? — Simple */}
                <AccordionItem value="q5">
                    <AccordionTrigger className="font-medium text-lg">What locations qualify?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Any place where people regularly gather — offices, gyms, apartments, coworking spaces, and more.
                    </AccordionContent>
                </AccordionItem>

                {/* 6 — (Removed intentionally) */}

                {/* 7 — How much space do I need? — Detailed + friendly */}
                <AccordionItem value="q7">
                    <AccordionTrigger className="font-medium text-lg">How much space do I need?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Check out our <a>Products</a> section for each machine's specific dimensions, but most machines need around 36–40 inches of width, about 30 inches of depth, and about 72 inches of height. They will also need access to a standard outlet.
                    </AccordionContent>
                </AccordionItem>

                {/* 8 — What payment methods are supported? — Modern + detailed */}
                <AccordionItem value="q8">
                    <AccordionTrigger className="font-medium text-lg">What payment methods are supported?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        We support tap‑to‑pay, Apple Pay, Google Pay, mobile wallets, chip cards, debit cards, and credit cards. The machines will not accept any cash payments.
                    </AccordionContent>
                </AccordionItem>

                {/* 9 — Do machines require internet? — Friendly + Wi-Fi preferred */}
                {/* <AccordionItem value="q9">
                    <AccordionTrigger className="font-medium text-lg">Do the machines require internet?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        They do need a connection for real‑time tracking and security. Wi‑Fi is preferred, but we can also provide LTE if needed.
                    </AccordionContent>
                </AccordionItem> */}

                {/* 10 — AI vs regular vending — Premium + practical */}
                <AccordionItem value="q10">
                    <AccordionTrigger className="font-medium text-lg">What’s the difference between AI and regular vending?</AccordionTrigger>
                    <AccordionContent className="font-medium text-lg">
                        Instead of slowly punching buttons to grab snacks one at a time, customers simply tap their phone or card, grab what they want, and leave in less than a minute. The system updates their cart automatically and handles checkout seamlessly at the end.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
