// src/machines.ts
import type { Machine } from "@/types";

// mini-market images
import slim_side from "@/assets/machine-examples/slim-side.png";
import slim_side_luxury from "@/assets/machine-examples/slim-side-luxury.png";
import single_side from "@/assets/machine-examples/single-side.png";
import single_side_luxury from "@/assets/machine-examples/single-side-luxury.png";
import freeze_side from "@/assets/machine-examples/freeze-side.png";
import freeze_side_luxury from "@/assets/machine-examples/freeze-side-luxury.png";
import double_side from "@/assets/machine-examples/duo-side.png";
import double_side_luxury from "@/assets/machine-examples/duo-side-luxury.png";

// tobacco images
import mini from "@/assets/machine-examples/nicotine/boogies-mini.png";
import tower from "@/assets/machine-examples/nicotine/boogies-tower.png";

export const mini_market_machines: Machine[] = [
    {
        name: "Slim",
        industry: "mini-market",
        perk: "AI-Integrated",
        description:
            "A compact solution offering full AI-powered checkout in a smaller footprint. Better for tight fits!",
        images: [slim_side, slim_side_luxury],
    },
    {
        name: "Single",
        industry: "mini-market",
        perk: "AI-Integrated",
        description:
            "A streamlined single-column AI-enabled vending unit with smart tracking and fast grab-and-go access.",
        images: [single_side, single_side_luxury],
    },
    {
        name: "Freeze",
        industry: "mini-market",
        perk: "AI-Integrated",
        description:
            "A compact  machine designed for frozen food items. Perfect for quick meals and ice cream on the go!",
        images: [freeze_side, freeze_side_luxury],
    },
    {
        name: "Double",
        industry: "mini-market",
        perk: "AI-Integrated",
        description:
            "A spacious, AI-powered double-column machine built for higher-traffic locations and broader product variety.",
        images: [double_side, double_side_luxury],
    },
];

export const tobacco_machines: Machine[] = [
    {
        name: "Mini",
        industry: "tobacco",
        perk: "ID-Verification",
        extra_info: "Wall-Mounted",
        description:
            "Best for venues where floor space is limited. Delivers a smooth, age-verified experience with cashless payments.",
        images: [mini],
    },
    {
        name: "Tower",
        industry: "tobacco",
        perk: "ID-Verification",
        extra_info: "Free-Standing",
        description:
            "Our highest-capacity machine. Features advanced age verification and a wider selection of products.",
        images: [tower],
    },
];

// Placeholder pickleball machines
export const pickleball_machines: Machine[] = [
    {
        name: "Pickleball Machines (Coming Soon)",
        industry: "pickleball",
        perk: "Rent & Return",
        extra_info: "2–4 planned models",
        description:
            "We’re finalizing our pickleball vending lineup now. Reach out if you want to be an early host location.",
        images: [],
    },
];

// helpers
export const machinesByIndustry = {
    "mini-market": mini_market_machines,
    // keep legacy key 'nicotine' for compatibility, and also expose 'tobacco'
    nicotine: tobacco_machines,
    "tobacco": tobacco_machines,
    pickleball: pickleball_machines,
} as const;

export const allMachines: Machine[] = [
    ...mini_market_machines,
    ...tobacco_machines,
    ...pickleball_machines,
];
