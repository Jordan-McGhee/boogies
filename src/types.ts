// machine types
export type Industry = "mini-market" | "nicotine" | "pickleball";
export type Perk = "AI-Integrated" | "ID-Verification" | "Rent & Return";

export interface Machine {
    name: string;
    extra_info?: string;
    industry?: Industry;
    perk?: Perk;
    description: string;
    images: string[];
}

// prop types
export interface SectionProps {
    currentIndustry: Industry;
    setIndustry: (industry: Industry) => void;
}

export type IndustryButtonProps = {
    industry: string;
    currentIndustry: string;
    setIndustry: (industry: string) => void;
    icon: React.ReactNode;
    label: string;
};

export interface MachineCardProps {
    name: string;
    perk?: string;
    description: string;
    images: string[];
    extra_info?: string;
}

export interface MachinesCarouselProps {
    machines: Machine[];
}