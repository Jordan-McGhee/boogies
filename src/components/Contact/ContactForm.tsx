import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ui imports
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import MachineSelectionGrid from "@/components/Contact/MachineSelectionGrid";
// machine data
import { machinesByIndustry } from "@/machines";
import type { Industry } from "@/types";

export default function ContactForm({ currentIndustry }: { currentIndustry?: Industry }) {
    // Build UI machines for the selected industry; prefer 'side' images when available
    const industryKey = currentIndustry ?? ("mini-market" as Industry);
    const sourceList = (machinesByIndustry as any)[industryKey] || [];
    type UIMachine = { name: string; value: string; img: string };
    const machines: UIMachine[] = sourceList.map((m: any) => ({
        name: m.name,
        value: m.name.toLowerCase().replace(/\s+/g, "-"),
        img: String((m.images || []).find((s: string) => /side/i.test(s)) || (m.images && m.images[0]) || ""),
    }));

    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        products: string[];
        details: string;
    }>({
        name: "",
        email: "",
        products: [],
        details: "",
    });

    const [sending, setSending] = useState(false);

    // Prefill machine selection from URL and listen for machineSelected event.
    // Re-run whenever the industryKey (and therefore `machines`) changes.
    useEffect(() => {
        const normalize = (s?: string) => (s || "").toLowerCase().replace(/[-\s]+/g, "");

        const params = new URLSearchParams(window.location.search);
        const machineParam = params.get("machine");
        if (machineParam) {
            const match = machines.find((m: UIMachine) => normalize(m.value) === normalize(machineParam));

            if (match) {
                setFormData((prev) => ({
                    ...prev,
                    products: Array.from(new Set([...prev.products, match.value])),
                }));
            }
        }

        const handler = (e: Event) => {
            const value = (e as CustomEvent<string>).detail as string;
            if (!value) return;
            const match = machines.find((m: UIMachine) => normalize(m.value) === normalize(value));
            if (!match) return;

            setFormData((prev) => ({
                ...prev,
                products: Array.from(new Set([...prev.products, match.value])),
            }));
        };

        window.addEventListener("machineSelected", handler as EventListener);
        return () => window.removeEventListener("machineSelected", handler as EventListener);
    }, [industryKey]);

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        details?: string;
    }>({});

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateField = (name: string, value: string) => {
        const newErrors: typeof errors = { ...errors };

        if (name === "name" && value.trim().length <= 1) {
            newErrors.name = "Name must be at least 2 characters long.";
        } else if (name === "name") {
            delete newErrors.name;
        }

        if (name === "email" && !validateEmail(value)) {
            newErrors.email = "Please enter a valid email address.";
        } else if (name === "email") {
            delete newErrors.email;
        }

        if (
            name === "details" &&
            (value.trim().length < 10 || value.trim().length > 500)
        ) {
            newErrors.details = "Details must be between 10 and 500 characters.";
        } else if (name === "details") {
            delete newErrors.details;
        }

        setErrors(newErrors);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        validateField(e.target.name, e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (Object.keys(errors).length > 0) return;

        setSending(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            details: formData.details,
            products: formData.products,
        };

        emailjs.send("service_s686vqu", "template_go0lu6i", templateParams, "Qlrkj9ClLXx1lmhUV").then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Your message has been sent! 🎉");

                setFormData({
                    name: "",
                    email: "",
                    products: [],
                    details: "",
                });
            },
            (error) => {
                console.log("FAILED...", error);
                toast.error("Something went wrong sending your message. Please try again.");
            }
        ).finally(() => {
            setSending(false);
        });
    };

    const isValid = Object.keys(errors).length === 0;

    return (
        <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#3e1e65] p-6 rounded-2xl border border-white/10"
        >
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <Label className="font-bold text-base">
                        Name <span className="text-[#ff4fd0]">*</span>
                    </Label>
                    <Input
                        required
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mt-3"
                    />
                    {errors.name && (
                        <p className="text-sm italic text-[#f67ceb]">{errors.name}</p>
                    )}
                </div>

                <div className="flex-1">
                    <Label className="font-bold mb-1 text-base">
                        Email <span className="text-[#ff4fd0]">*</span>
                    </Label>
                    <Input
                        required
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mt-3"
                    />
                    {errors.email && (
                        <p className="text-sm italic text-[#f67ceb]">{errors.email}</p>
                    )}
                </div>
            </div>

            {/* Machine Select Cards */}
            <div>
                <Label className="font-bold text-base">
                    Which machine(s) are you interested in?
                </Label>
                <MachineSelectionGrid
                    selectedProducts={formData.products}
                    setSelectedProducts={(products) =>
                        setFormData({ ...formData, products })
                    }
                    machines={machines}
                />
            </div>

            {/* Details */}
            <div className="flex flex-col space-y-3">
                <Label className="font-bold text-base">
                    Tell us about your space <span className="text-[#ff4fd0]">*</span>
                </Label>
                <Textarea
                    required
                    name="details"
                    placeholder="Helpful information includes foot traffic, building type, and any specific needs or questions you have!"
                    value={formData.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="min-h-[130px] resize-none"
                />
                {errors.details && (
                    <p className="text-sm italic text-[#f67ceb]">{errors.details}</p>
                )}
            </div>

            <Button type="submit" className="w-full mt-1" disabled={!isValid || sending}>
                {sending ? "Sending..." : "Submit"}
            </Button>
        </form>
    );
}
