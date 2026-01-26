import { useState } from "react";
import { primaryColor } from "@/constants/colors";

interface SortDropdownProps {
  onSortChange: (sortType: string) => void;
  selectedValue?: string;
  isClearing?: boolean;
}

function SortDropdown({ onSortChange, selectedValue, isClearing }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const getSelectedLabel = () => {
    if (!selectedValue) return "Sort by";
    const option = options.find(opt => opt.value === selectedValue);
    return option ? option.label : "Sort by";
  };

  const options = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" }
  ];

  const handleSelect = (value: string) => {
    setIsOpen(false);
    onSortChange(value);
  };

  return (
    <div className="relative">
      <button
        onClick={() => !isClearing && setIsOpen(!isOpen)}
        className={`px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 pr-8 w-full sm:w-48 md:w-56 text-sm sm:text-base md:text-lg border rounded-lg bg-amber-50 text-${primaryColor} border-${primaryColor} relative transition-all duration-700 font-semibold ${isClearing ? 'animate-pulse scale-95 opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {getSelectedLabel()}
        <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-500 text-base sm:text-lg ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <div className={`absolute top-full left-0 w-full bg-amber-50 border border-${primaryColor} rounded-lg mt-1 overflow-hidden transition-all duration-500 z-10 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`w-full px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 text-sm sm:text-base md:text-lg text-left hover:bg-${primaryColor} hover:text-amber-50 transition-colors duration-200 font-medium`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortDropdown;
