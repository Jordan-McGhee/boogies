import ContactForm from "@/components/Contact/ContactForm";
import { Clock, Handshake, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="pt-10 max-w-7xl mx-auto">
            <p className="text-4xl mb-8 text-center lg:text-left" style={{ fontFamily: "'Luckiest Guy', cursive" }}>Get in touch</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* LEFT — CONTACT FORM */}
                <section id="contact-section">
                    <ContactForm />
                </section>

                {/* RIGHT SIDE PANELS */}

                <div className="hidden lg:block">

                    <div className="flex flex-col justify-center space-y-6">
                        <div className="p-6 rounded-2xl bg-[#3e1e65] shadow-lg text-white">
                            <div className="flex gap-x-1 mb-1">
                                <Handshake className="w-6 h-6 text-[#f67ceb] mr-2" />
                                <p className="text-2xl mb-2" style={{ fontFamily: "'Luckiest Guy', cursive" }}>Why Choose Boogie's?</p>
                            </div>
                            <ul className="space-y-4 text-white font-medium text-lg">
                                <li>
                                    <span className="text-[#f67ceb]">•</span> 100% free placement & maintenance
                                </li>
                                <li>
                                    <span className="text-[#f67ceb]">•</span> AI-enabled grab-and-go experience
                                </li>
                                {/* <li>
                                    <span className="text-[#f67ceb]">•</span> Free, hands-off amenity for your guests
                                </li> */}
                                <li>
                                    <span className="text-[#f67ceb]">•</span> Remote monitoring & smarter restocking
                                </li>
                                {/* <li>
                                    <span className="text-[#f67ceb]">•</span> Ideal for offices, apartments, gyms
                                </li> */}
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#3e1e65] shadow-lg text-white">
                            <div className="flex gap-x-1 mb-1">
                                <Clock className="w-6 h-6 text-[#f67ceb] mr-2" />
                                <p className="text-2xl" style={{ fontFamily: "'Luckiest Guy', cursive" }}>Need a Machine Fast?</p>
                            </div>
                            <p className="font-medium">
                                We can install in as little as <span className="italic text-[#f67ceb] font-semibold">3–7 days</span> in the Atlanta area!
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#3e1e65] shadow-lg text-white">
                            <div className="flex gap-x-1 mb-1">
                                <Mail className="w-6 h-6 text-[#f67ceb] mr-2" />
                                <p className="text-2xl" style={{ fontFamily: "'Luckiest Guy', cursive" }}>Want to reach out on your terms?</p>
                            </div>
                            <p className="font-medium">
                                Reach out to us anytime at <span className="italic text-[#f67ceb] font-semibold">boogie.enterprisesatl@gmail.com</span> and we will get back to you within 1-2 business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
