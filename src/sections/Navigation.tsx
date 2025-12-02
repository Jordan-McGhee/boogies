import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import boogie from "@/assets/boogie.png";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Smooth scroll behavior with offset
    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetId: string
    ) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 60;
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="sticky top-0 bg-[#3e1e65]/90 w-full px-6 py-4 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {isMobile ? (
                    <>
                        {/* Hamburger button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation menu"
                            className="relative w-8 h-8 flex items-center justify-center z-50"
                        >
                            {/* Top bar */}
                            <motion.span
                                className="absolute w-6 h-[2px] bg-white rounded"
                                animate={
                                    isMobileMenuOpen
                                        ? { rotate: 45, translateY: 0 }
                                        : { rotate: 0, translateY: -8 }
                                }
                                transition={{ duration: 0.3 }}
                            />

                            {/* Middle bar */}
                            <motion.span
                                className="absolute w-6 h-[2px] bg-white rounded"
                                animate={
                                    isMobileMenuOpen
                                        ? { opacity: 0 }
                                        : { opacity: 1 }
                                }
                                transition={{ duration: 0.3 }}
                            />

                            {/* Bottom bar */}
                            <motion.span
                                className="absolute w-6 h-[2px] bg-white rounded"
                                animate={
                                    isMobileMenuOpen
                                        ? { rotate: -45, translateY: 0 }
                                        : { rotate: 0, translateY: 8 }
                                }
                                transition={{ duration: 0.3 }}
                            />
                        </button>

                        {/* Centered logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <a
                                href="#"
                                aria-label="Home"
                                className="flex items-end gap-4 hover:text-[#f67ceb]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <img src={boogie} alt="Boogie's Mini Markets" className="h-10" />
                                <p
                                    className="text-2xl"
                                    style={{ fontFamily: "'Luckiest Guy', cursive" }}
                                >
                                    Boogie's
                                </p>
                            </a>
                        </div>

                        {/* Mobile menu dropdown */}
                        <AnimatePresence>
                            {isMobileMenuOpen && (
                                <motion.nav
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute top-full left-0 w-full bg-[#3e1e65] text-white text-xl flex flex-col items-center gap-8 py-8 z-40 overflow-hidden"
                                    style={{ fontFamily: "'Luckiest Guy', cursive" }}
                                >
                                    {["how", "products", "faq", "contact"].map((section, index) => (
                                        <motion.a
                                            key={section}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            className="hover:text-[#f67ceb]"
                                            href={`#${section}`}
                                            onClick={(e) => handleSmoothScroll(e, section)}
                                        >
                                            {section === "how" && "How They Work"}
                                            {section === "products" && "Our Machines"}
                                            {section === "faq" && "FAQs"}
                                            {section === "contact" && "Contact"}
                                        </motion.a>
                                    ))}
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </>
                ) : (
                    // Desktop navigation
                    <div className="flex items-center gap-8 w-full justify-between">
                        {/* Logo and title */}
                        <a
                            href="#"
                            aria-label="Home"
                            className="flex items-center gap-4 hover:text-[#f67ceb]"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        >
                            <img src={boogie} alt="Boogie's Mini Markets" className="h-10" />
                            <p
                                className="text-2xl mt-2"
                                style={{ fontFamily: "'Luckiest Guy', cursive" }}
                            >
                                Boogie's
                            </p>
                        </a>

                        <nav
                            className="gap-6 flex items-center text-white text-xl"
                            style={{ fontFamily: "'Luckiest Guy', cursive" }}
                        >
                            <a
                                className="hover:text-[#f67ceb]"
                                href="#how"
                                onClick={(e) => handleSmoothScroll(e, "how")}
                            >
                                How They Work
                            </a>
                            <a
                                className="hover:text-[#f67ceb]"
                                href="#products"
                                onClick={(e) => handleSmoothScroll(e, "products")}
                            >
                                Our Machines
                            </a>
                            <a
                                className="hover:text-[#f67ceb]"
                                href="#faq"
                                onClick={(e) => handleSmoothScroll(e, "faq")}
                            >
                                FAQs
                            </a>
                            <a
                                className="hover:text-[#f67ceb]"
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, "contact")}
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}