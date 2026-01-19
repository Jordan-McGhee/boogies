import { motion } from "framer-motion";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

// type imports
import type { SectionProps } from "@/types";

export default function FAQ({ currentIndustry }: SectionProps) {
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
                FAQs -{" "}
                {currentIndustry === "mini-market"
                    ? "Mini Markets"
                    : currentIndustry === "tobacco"
                        ? "Vape & Tobacco"
                        : "Pickleball Rentals"}
            </motion.p>

            {/* MINI MARKET FAQS */}
            {currentIndustry === "mini-market" && (
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4 bg-[#3E1E65] p-6 rounded-2xl"
                >
                    {/* 1 — AI vs regular vending — Premium + practical */}
                    <AccordionItem value="mm-q1">
                        <AccordionTrigger className="font-medium text-xl">
                            What’s the difference between AI and regular vending?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Instead of slowly punching buttons to grab snacks one at a time,
                            customers simply tap their phone or card, grab what they want, and
                            leave in less than a minute. The system updates their cart
                            automatically and handles checkout seamlessly at the end.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 2 — Do I have to pay anything to get a machine? — Friendly */}
                    <AccordionItem value="mm-q2">
                        <AccordionTrigger className="font-medium text-xl">
                            Do I have to pay anything to get a machine?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            For a limited time, we’re waiving all placement and management
                            fees for new business customers that sign a site agreement. There
                            are no upfront costs or hidden fees. Reach out for a site visit
                            while this promo lasts!
                        </AccordionContent>
                    </AccordionItem>

                    {/* 3 — How soon can you install in Atlanta? — Flexible */}
                    <AccordionItem value="mm-q3">
                        <AccordionTrigger className="font-medium text-xl">
                            How soon can you install in Atlanta?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            We can install within 7 business days after your site is approved.
                            We schedule a quick walkthrough of the space and get a feel for
                            foot traffic, assess your needs, and finalize the machine
                            selection. The entire process takes around a week, but we can move
                            faster if needed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 4 — What if something breaks? — Friendly */}
                    <AccordionItem value="mm-q4">
                        <AccordionTrigger className="font-medium text-xl">
                            What if something breaks?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            You don’t have to lift a finger. If something goes wrong, we’re
                            notified immediately and handle the repair quickly, while updating
                            you throughout the process.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 5 — Can I choose what products go inside? — Friendly + demand-based */}
                    <AccordionItem value="mm-q5">
                        <AccordionTrigger className="font-medium text-xl">
                            Can I choose what products go inside?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            We stock a diverse mix of snacks and drinks that work well in most
                            locations, but if there’s enough demand for specific items, we’re
                            happy to adjust the selection.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 6 — What locations qualify? — Simple */}
                    <AccordionItem value="mm-q6">
                        <AccordionTrigger className="font-medium text-xl">
                            What locations qualify?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Any place where people regularly gather — offices, gyms,
                            apartments, coworking spaces, and more.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 7 — How much space do I need? — Detailed + friendly */}
                    <AccordionItem value="mm-q7">
                        <AccordionTrigger className="font-medium text-lg">
                            How much space do I need? What do the machines need to run?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Our machine dimensions are as follows:
                            <ul className="list-disc pl-6 py-4">
                                <li>
                                    <strong>Slim:</strong> 22.8" W × 30" D × 76.4" H
                                </li>
                                <li>
                                    <strong>Single:</strong> 29.5" W × 29.1" D × 79.5" H
                                </li>
                                <li>
                                    <strong>Freeze:</strong> 27.6" W × 35.8" D × 80.4" H
                                </li>
                                <li>
                                    <strong>Double:</strong> 53.9" W × 27.9" D × 79.5" H
                                </li>
                            </ul>
                            The machines require a standard power outlet. A Wi-Fi connection is
                            not necessary, but a plus if available.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 8 — What payment methods are supported? — Modern + detailed */}
                    <AccordionItem value="mm-q8">
                        <AccordionTrigger className="font-medium text-lg">
                            What payment methods are supported?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            We support tap-to-pay, Apple Pay, Google Pay, mobile wallets, chip
                            cards, debit cards, and credit cards. The machines will not accept
                            any cash payments.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}

            {/* TOBACCO FAQS (ATLANTA BARS) */}
            {currentIndustry === "tobacco" && (
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4 bg-[#3E1E65] p-6 rounded-2xl"
                >
                    {/* 1 — Cost */}
                    <AccordionItem value="t-q1">
                        <AccordionTrigger className="font-medium text-xl">
                            Do I have to pay anything to get a machine?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Nope. There’s no cost to you. We handle the install, stocking,
                            software, monitoring, and maintenance — you’re adding a modern
                            amenity to your bar without extra work or upfront expense.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 2 — Underage prevention */}
                    <AccordionItem value="t-q2">
                        <AccordionTrigger className="font-medium text-xl">
                            How do you prevent underage customers from using the machine?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Every purchase requires age verification. Customers scan the
                            barcode on the back of a valid, government-issued ID, and the
                            system confirms they’re 21+ before allowing a purchase. If the age
                            check fails, the machine won’t vend.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 3 — Space / dimensions */}
                    <AccordionItem value="t-q3">
                        <AccordionTrigger className="font-medium text-xl">
                            How much space does the machine take up?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Very little. We offer two options that work well in bar
                            environments:
                            <ul className="list-disc pl-6 py-4">
                                <li>
                                    <strong>Mini (wall-mounted):</strong> 23.6" W × 14" D × 40.1" H
                                </li>
                                <li>
                                    <strong>Tower (free-standing):</strong> 27.5" W × 13.7" D ×
                                    70.1" H
                                </li>
                            </ul>
                            Both plug into a standard outlet. The Mini is perfect for tight
                            spaces, while the Tower is great for higher-traffic areas.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 4 — Compliance + licensing + liability */}
                    <AccordionItem value="t-q4">
                        <AccordionTrigger className="font-medium text-xl">
                            What about liability, licensing, and legal compliance?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Vape and tobacco vending is highly regulated, and we take care of all of it. Age verification, machine configuration, and operational
                            setup are handled properly so you’re not left guessing or exposed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 5 — Operations */}
                    <AccordionItem value="t-q5">
                        <AccordionTrigger className="font-medium text-xl">
                            Who handles restocking, maintenance, and repairs?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            We do. Machines are monitored remotely 24/7 and send alerts if
                            inventory runs low or anything needs attention. Most issues are
                            resolved quickly, often without anyone visiting your bar.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 6 — Bouncer / scheduled ID scan */}
                    <AccordionItem value="t-q6">
                        <AccordionTrigger className="font-medium text-xl">
                            If I already have a bouncer checking IDs, do customers still need
                            to scan their ID?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Not necessarily. The ID scanner can be scheduled by time of day.
                            For example, if your door staff is checking IDs during peak hours,
                            we can reduce friction by adjusting how age verification is
                            handled — while still staying compliant.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 7 — Product selection */}
                    <AccordionItem value="t-q7">
                        <AccordionTrigger className="font-medium text-xl">
                            Can I choose which products are sold in my bar?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Yes. Machines can vend vapes, nicotine pouches, and other approved
                            items. The machine trays and coils are adjustable, so we can
                            fine-tune the selection based on what makes sense for your crowd.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 8 — Damage / durability */}
                    <AccordionItem value="t-q8">
                        <AccordionTrigger className="font-medium text-xl">
                            What happens if someone tries to damage or misuse the machine?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            The machines are built for nightlife environments and are very
                            durable. Screen damage and vandalism are extremely rare based on
                            real-world data. While intentional damage isn’t covered under
                            standard warranty, it comes up far less often than people expect.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 9 — Payments */}
                    <AccordionItem value="t-q9">
                        <AccordionTrigger className="font-medium text-xl">
                            What payment methods are supported?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            All major credit and debit cards, Apple Pay, Google Pay, and
                            tap-to-pay. The machines are fully cashless, which keeps lines
                            short and transactions fast.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 10 — Bar value */}
                    <AccordionItem value="t-q10">
                        <AccordionTrigger className="font-medium text-xl">
                            What’s in it for the bar?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Vape vending is one of the highest-margin vending categories,
                            especially in late-night venues. High-traffic bars often see
                            strong performance, and depending on volume and placement,
                            revenue-share options may be available.
                        </AccordionContent>
                    </AccordionItem>

                    {/* 11 — Why bars */}
                    <AccordionItem value="t-q11">
                        <AccordionTrigger className="font-medium text-xl">
                            Why does vape vending work so well in bars specifically?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            Bars naturally attract the exact demographic these products are
                            designed for. Late hours, social settings, and high foot traffic
                            make bars some of the best-performing locations for vape vending
                            nationwide.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}

            {/* PICKLEBALL FAQS (placeholder) */}
            {currentIndustry === "pickleball" && (
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4 bg-[#3E1E65] p-6 rounded-2xl"
                >
                    <AccordionItem value="p-q1">
                        <AccordionTrigger className="font-medium text-xl">
                            Pickleball rentals are coming soon — how can I be an early host?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-lg">
                            We’re finalizing our rental lineup now. If you want to be an early
                            host location, reach out and we’ll share the rollout details and
                            requirements.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </section>
    );
}
