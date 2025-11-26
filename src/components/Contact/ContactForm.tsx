import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MachineSelectionGrid from "@/components/Contact/MachineSelectionGrid";

// images
import single from "@/assets/machine-examples/single.png";
import slim from "@/assets/machine-examples/slim.png";
import doubleImg from "@/assets/machine-examples/double.png";

import { useEffect } from "react";

export default function ContactForm() {
    const machines = [
        { name: "Single", value: "single", img: single },
        { name: "Double", value: "double", img: doubleImg },
        { name: "Slim", value: "slim", img: slim },
        { name: "Not Sure", value: "other", img: "" },
    ];

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

    // Prefill machine selection from URL and listen for machineSelected event
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const machineParam = params.get("machine");
        if (machineParam) {
            const match = machines.find(
                (m) => m.value.toLowerCase() === machineParam.toLowerCase()
            );

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
            const match = machines.find((m) => m.value.toLowerCase() === value.toLowerCase());
            if (!match) return;

            setFormData((prev) => ({
                ...prev,
                products: Array.from(new Set([...prev.products, match.value])),
            }));
        };

        window.addEventListener("machineSelected", handler as EventListener);
        return () => window.removeEventListener("machineSelected", handler as EventListener);
    }, []);

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
            (value.trim().length < 25 || value.trim().length > 500)
        ) {
            newErrors.details = "Details must be between 25 and 500 characters.";
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
        // TODO: replace with real submit (API call / mailto etc.)
        console.log("Form submitted:", formData);
        alert("Form submitted — check console for payload.");
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
                <Label className="font-bold text-base">Which machine(s) are you interested in?</Label>
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
                    placeholder="Describe your location and why it would be a great fit..."
                    value={formData.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="min-h-[130px] resize-none"
                />
                {errors.details && (
                    <p className="text-sm italic text-[#f67ceb]">{errors.details}</p>
                )}
            </div>

            <Button type="submit" className="w-full mt-1" disabled={!isValid}>
                Submit
            </Button>
        </form>
    );
}
