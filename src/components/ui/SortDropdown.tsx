import { useState } from "react";
import { primaryColor } from "@/constants/colors";

interface SortDropdownProps {
  onSortChange: (sortType: string) => void;
}

function SortDropdown({ onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort by");

  const options = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" }
  ];

  const handleSelect = (value: string, label: string) => {
    setSelected(label);
    setIsOpen(false);
    onSortChange(value);
  };

  return (
    <div className="mb-6 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 pr-8 w-48 border rounded-lg bg-amber-50 text-${primaryColor} border-${primaryColor} cursor-pointer relative`}
      >
        {selected}
        <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <div className={`absolute top-full left-0 w-full bg-amber-50 border border-${primaryColor} rounded-lg mt-1 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value, option.label)}
            className={`w-full px-4 py-2 text-left hover:bg-${primaryColor} hover:text-amber-50 transition-colors duration-200`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortDropdown;
