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
        if (selectedProducts.includes(value)) {
            // Deselect the machine if it's already selected
            setSelectedProducts(selectedProducts.filter((v) => v !== value));
        } else {
            // Add the machine to the selection
            setSelectedProducts([...selectedProducts, value]);
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
