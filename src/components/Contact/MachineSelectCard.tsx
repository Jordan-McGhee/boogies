import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";

interface MachineSelectCardProps {
    name: string;
    value: string;
    img: string;
    selected: boolean;
    onClick: () => void;
}

export default function MachineSelectCard({
    name,
    img,
    selected,
    onClick,
}: MachineSelectCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "p-3 rounded-xl border transition-all flex flex-col items-center gap-2 bg-[#3e1e65] hover:bg-[#9d4dff]/20 shadow-md",
                "cursor-pointer select-none",
                selected ? "border-none ring-1 ring-[#f67ceb] bg-[#9d4dff]/20" : "border-white/10"
            )}
        >
            <div className="w-14 h-14 relative flex items-center justify-center">
                {img === "" ? (
                    <HelpCircle className="text-[#f67ceb] w-full h-full" />
                ) : (
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-contain"
                    />
                )}
            </div>

            <p className="text-sm font-semibold text-white">{name}</p>
        </button>
    );
}
