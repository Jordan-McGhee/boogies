import MachineSelectCard from "./MachineSelectCard";

interface MachineSelectionGridProps {
    selectedProducts: string[];
    setSelectedProducts: (products: string[]) => void;
    machines: { name: string; value: string; img: string }[];
}

export default function MachineSelectionGrid({
    selectedProducts,
    setSelectedProducts,
    machines,
}: MachineSelectionGridProps) {

    const toggleProduct = (value: string) => {
        const isLastMachine = value === machines[machines.length - 1].value;

        if (isLastMachine) {
            // If the last machine is selected, deselect all others and select only the last machine
            setSelectedProducts([value]);
        } else {
            if (selectedProducts.includes(value)) {
                // Deselect the machine if it's already selected
                setSelectedProducts(selectedProducts.filter((v) => v !== value));
            } else {
                // Add the machine to the selection, but ensure the last machine is not selected
                setSelectedProducts([...selectedProducts.filter((v) => v !== machines[machines.length - 1].value), value]);
            }
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {machines.map((machine) => (
            <MachineSelectCard
                key={machine.value}
                name={machine.name}
                value={machine.value}
                img={machine.img}
                selected={selectedProducts.includes(machine.value)}
                onClick={() => toggleProduct(machine.value)}
            />
            ))}
        </div>
    );
}
