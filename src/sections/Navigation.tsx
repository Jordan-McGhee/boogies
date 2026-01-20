import { useState, useEffect } from "react";
import { ShoppingBasket } from "lucide-react";
import { PickleballIcon, SmokingIcon } from "@/icons/icons";
// import { Link } from "react-router-dom";
import FacebookIcon from "@/assets/social-icons/fb-white.png";
import InstagramIcon from "@/assets/social-icons/ig-white.png";
import LinkedinIcon from "@/assets/social-icons/linkedin-white.png";

import boogie from "@/assets/boogies/boogie.png";

// type
import type { SectionProps } from "@/types";

export default function Navigation({ currentIndustry, setIndustry }: SectionProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Smooth scroll with offset
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
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation menu"
                            className="relative w-8 h-8 flex items-center justify-center z-50"
                        >
                            <span
                                className={`absolute w-6 h-[2px] bg-white rounded transition-all duration-300 
                                ${isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
                            />

                            <span
                                className={`absolute w-6 h-[2px] bg-white rounded transition-all duration-300 
                                ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                            />

                            <span
                                className={`absolute w-6 h-[2px] bg-white rounded transition-all duration-300 
                                ${isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
                            />
                        </button>

                        {/* Center Logo */}
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

                        {/* Mobile Menu Dropdown */}
                        <nav
                            className={`
                absolute top-full left-0 w-full bg-[#3e1e65] text-white text-xl 
                flex flex-col items-center gap-8 overflow-hidden z-40
                transition-all duration-300 ease-in-out
                ${isMobileMenuOpen ? "max-h-[560px] py-6" : "max-h-0 py-0"}
                `}
                            style={{ fontFamily: "'Luckiest Guy', cursive" }}
                        >
                            {/* Industry buttons for mobile - placed before other links */}
                            <div className="w-full px-6">
                                <div className="grid grid-cols-3 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIndustry("mini-market");
                                        }}
                                        className={`p-3 rounded-xl flex flex-col items-center gap-1 text-sm font-semibold text-white transition shadow-sm bg-[#9d4dff]/10 ${currentIndustry === "mini-market" ? "border border-[#f67ceb] bg-[#9d4dff]/30" : "bg-[#3e1e65]/60 border-none"}`}
                                    >
                                        <ShoppingBasket className="text-[#f67ceb] size-6" strokeWidth={1.5} />
                                        <span>AI Markets</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIndustry("pickleball");
                                        }}
                                        className={`p-3 rounded-xl flex flex-col items-center gap-1 text-sm font-semibold text-white transition shadow-sm bg-[#9d4dff]/10 ${currentIndustry === "pickleball" ? "border border-[#f67ceb] bg-[#9d4dff]/30" : "bg-[#3e1e65]/60 border-none"}`}
                                    >
                                        <PickleballIcon className="text-[#f67ceb] size-6" />
                                        <span>Pickleball</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIndustry("tobacco");
                                        }}
                                        className={`p-3 rounded-xl flex flex-col items-center gap-1 text-sm font-semibold text-white transition shadow-sm bg-[#9d4dff]/10 ${currentIndustry === "tobacco" ? "border border-[#f67ceb] bg-[#9d4dff]/30" : "bg-[#3e1e65]/60 border-none"}`}
                                    >
                                        <SmokingIcon className="text-[#f67ceb] size-6" />
                                        <span>Tobacco</span>
                                    </button>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center gap-4">
                                {currentIndustry !== "pickleball" && (
                                    <a
                                        className="hover:text-[#f67ceb]"
                                        href="#how"
                                        onClick={(e) => handleSmoothScroll(e, "how")}
                                    >
                                        How They Work
                                    </a>
                                )}
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
                            </div>

                            <div className="flex items-center gap-x-12">
                                <a
                                    className="mb-2 hover:cursor-pointer"
                                    href="https://www.facebook.com/61583851057888/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={FacebookIcon}
                                        alt="Facebook"
                                        className="
            size-7
            filter invert brightness-0
            transition-all duration-200
            hover:filter-[brightness(0)_saturate(100%)_invert(70%)_sepia(28%)_saturate(1647%)_hue-rotate(275deg)_brightness(102%)_contrast(93%)]
        "
                                    />
                                </a>

                                <a
                                    className="mb-2 hover:cursor-pointer"
                                    href="https://www.instagram.com/boogies_atl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={InstagramIcon}
                                        alt="Instagram"
                                        className="
            size-7
            filter invert brightness-0
            transition-all duration-200
            hover:filter-[brightness(0)_saturate(100%)_invert(70%)_sepia(28%)_saturate(1647%)_hue-rotate(275deg)_brightness(102%)_contrast(93%)]
        "
                                    />
                                </a>

                                <a
                                    className="mb-2 hover:cursor-pointer"
                                    href="https://www.linkedin.com/company/boogie-enterprises-llc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={LinkedinIcon}
                                        alt="LinkedIn"
                                        className="
            size-7
            filter invert brightness-0
            transition-all duration-200
            hover:filter-[brightness(0)_saturate(100%)_invert(70%)_sepia(28%)_saturate(1647%)_hue-rotate(275deg)_brightness(102%)_contrast(93%)]
        "
                                    />
                                </a>
                            </div>
                        </nav>
                    </>
                ) : (
                    // Desktop
                    <div className="flex items-center gap-8 w-full justify-between">
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
                            className="gap-6 flex items-center mt-2 text-white text-xl"
                            style={{ fontFamily: "'Luckiest Guy', cursive" }}
                        >
                            {currentIndustry !== "pickleball" && (
                                <a
                                    className="hover:text-[#f67ceb]"
                                    href="#how"
                                    onClick={(e) => handleSmoothScroll(e, "how")}
                                >
                                    How They Work
                                </a>
                            )}
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

                            <a
                                className="mb-2 hover:cursor-pointer"
                                href="https://www.facebook.com/61583851057888/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={FacebookIcon}
                                    alt="Facebook"
                                    className="
            size-5
            filter invert brightness-0
            transition-all duration-200
            hover:filter-[brightness(0)_saturate(100%)_invert(70%)_sepia(28%)_saturate(1647%)_hue-rotate(275deg)_brightness(102%)_contrast(93%)]
        "
                                />
                            </a>

                            <a
                                className="mb-2 hover:cursor-pointer"
                                href="https://www.instagram.com/boogies_atl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={InstagramIcon}
                                    alt="Instagram"
                                    className="
            size-5
            filter invert brightness-0
            transition-all duration-200
            hover:filter-[brightness(0)_saturate(100%)_invert(70%)_sepia(28%)_saturate(1647%)_hue-rotate(275deg)_brightness(102%)_contrast(93%)]
        "
                                />
                            </a>

                            <a
                                className="mb-2 hover:cursor-pointer"
                                href="https://www.linkedin.com/company/boogie-enterprises-llc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={LinkedinIcon}
                                    alt="LinkedIn"
                                    className="
            size-5
            filter invert brightness-0
            transition-all duration-200
            hover:filter-[brightness(0)_saturate(100%)_invert(70%)_sepia(28%)_saturate(1647%)_hue-rotate(275deg)_brightness(102%)_contrast(93%)]
        "
                                />
                            </a>



                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
