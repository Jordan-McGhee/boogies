// src/machines.ts
import type { Machine } from "@/types";

// mini-market images
import slim_side from "@/assets/machine-examples/mini-markets/slim-side.png";
import slim_side_luxury from "@/assets/machine-examples/mini-markets/slim-side-luxury.png";
import single_side from "@/assets/machine-examples/mini-markets/single-side.png";
import single_side_luxury from "@/assets/machine-examples/mini-markets/single-side-luxury.png";
import freeze_side from "@/assets/machine-examples/mini-markets/freeze-side.png";
import freeze_side_luxury from "@/assets/machine-examples/mini-markets/freeze-side-luxury.png";
import double_side from "@/assets/machine-examples/mini-markets/duo-side.png";
import double_side_luxury from "@/assets/machine-examples/mini-markets/duo-side-luxury.png";

// nicotine images
import mini from "@/assets/machine-examples/nicotine/boogies-mini.png";
import tower from "@/assets/machine-examples/nicotine/boogies-tower.png";

// pickleball images
import rent_rally_15 from "@/assets/machine-examples/pickleball/rent-rally15.png";
import rent_rally_30 from "@/assets/machine-examples/pickleball/rent-rally30.png";
import serve_market from "@/assets/machine-examples/pickleball/serve-market.png";

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

export const nicotine_machines: Machine[] = [
    {
        name: "Mini",
        industry: "nicotine",
        perk: "ID-Verification",
        extra_info: "Wall-Mounted",
        description:
            "Best for venues where floor space is limited. Delivers a smooth, age-verified experience with cashless payments.",
        images: [mini],
    },
    {
        name: "Tower",
        industry: "nicotine",
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
        name: "Rent&Rally 15",
        industry: "pickleball",
        perk: "Rent & Return",
        description:
            "A compact, locker-based rental system with 15 slots available. Fully cashless & self-service.",
        images: [rent_rally_15],
    },
    {
        name: "Rent&Rally 30",
        industry: "pickleball",
        perk: "Rent & Return",
        description:
            "A high-capacity rental system with 30 lockers available. Built to support peak hours & high player volume.",
        images: [rent_rally_30],
    },
    {
        name: "Serve Market",
        industry: "pickleball",
        perk: "Rent & Return",
        description:
            "A hybrid system combining 21 rental lockers with front-facing vending for other pickleball necessities.",
        images: [serve_market],
    },
];

// helpers
export const machinesByIndustry = {
    "mini-market": mini_market_machines,
    // keep legacy key 'nicotine' for compatibility, and also expose 'nicotine'
    nicotine: nicotine_machines,
    "nicotine": nicotine_machines,
    pickleball: pickleball_machines,
} as const;

export const allMachines: Machine[] = [
    ...mini_market_machines,
    ...nicotine_machines,
    ...pickleball_machines,
];
