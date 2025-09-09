import { useState } from "react";
import { primaryColor } from "@/constants/colors";

interface FilterDropdownProps {
  onFilterChange: (category: string) => void;
  selectedValue?: string;
}

function FilterDropdown({ onFilterChange, selectedValue }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const getSelectedLabel = () => {
    if (!selectedValue) return "All Categories";
    const category = categories.find(cat => cat.value === selectedValue);
    return category ? category.label : "All Categories";
  };

  const categories = [
    { value: "", label: "All Categories" },
    { value: "Dry Fruits", label: "Dry Fruits" },
    { value: "Fruits", label: "Fruits" },
    { value: "Whole Spices", label: "Whole Spices" },
    { value: "Seed Spices", label: "Seed Spices" },
    { value: "Other Spices", label: "Other Spices" },
    { value: "Dairy & Sweeteners", label: "Dairy & Sweeteners" }
  ];

  const handleSelect = (value: string, label: string) => {
    setIsOpen(false);
    onFilterChange(value);
  };

  return (
    <div className="mb-6 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 pr-8 w-48 border rounded-lg bg-amber-50 text-${primaryColor} border-${primaryColor} cursor-pointer relative`}
      >
        {getSelectedLabel()}
        <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <div className={`absolute top-full left-0 w-full bg-amber-50 border border-${primaryColor} rounded-lg mt-1 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleSelect(category.value, category.label)}
            className={`w-full px-4 py-2 text-left hover:bg-${primaryColor} hover:text-amber-50 transition-colors duration-200`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterDropdown;