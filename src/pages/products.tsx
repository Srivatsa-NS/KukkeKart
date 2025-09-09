import { useState } from "react";
import ImageGrid from "@/components/ui/ImageGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import SortDropdown from "@/components/ui/SortDropdown";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { allProducts } from "@/constants/GridItems";
import { primaryColor, secondaryColor } from "@/constants/colors";

function Products() {
  const [displayedProducts, setDisplayedProducts] = useState(allProducts);
  const [currentFilter, setCurrentFilter] = useState("");
  const [currentSort, setCurrentSort] = useState("");
  const [gridKey, setGridKey] = useState(0);

  const applyFilterAndSort = (filterCategory: string, sortType: string) => {
    let result = [...allProducts];
    
    // Apply filter first
    if (filterCategory) {
      result = result.filter(product => product.category === filterCategory);
    }
    
    // Apply sort to filtered results
    switch (sortType) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        result.sort(
          (a, b) =>
            parseInt(a.price.replace("₹", "")) -
            parseInt(b.price.replace("₹", ""))
        );
        break;
      case "price-desc":
        result.sort(
          (a, b) =>
            parseInt(b.price.replace("₹", "")) -
            parseInt(a.price.replace("₹", ""))
        );
        break;
    }
    
    setDisplayedProducts(result);
    setGridKey(prev => prev + 1);
  };

  const handleSortChange = (sortType: string) => {
    setCurrentSort(sortType);
    applyFilterAndSort(currentFilter, sortType);
  };

  const handleFilterChange = (category: string) => {
    setCurrentFilter(category);
    applyFilterAndSort(category, currentSort);
  };

  const handleClearAll = () => {
    setCurrentFilter("");
    setCurrentSort("");
    setDisplayedProducts(allProducts);
    setGridKey(prev => prev + 1);
  };

  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-5">
          <p className="common-font text-amber-50 text-6xl">Our products</p>
        </div>
        <div className="px-20 flex justify-end gap-4">
          <button
            onClick={handleClearAll}
            className={`px-4 py-2 h-10 border rounded-lg bg-amber-50 text-${primaryColor} border-${primaryColor} hover:bg-${primaryColor} hover:text-amber-50 transition-colors duration-200`}
          >
            Clear
          </button>
          <FilterDropdown onFilterChange={handleFilterChange} />
          <SortDropdown onSortChange={handleSortChange} />
        </div>
      </ScrollAnimation>
      <ImageGrid key={gridKey} bgColor={primaryColor} gridItems={displayedProducts} />
    </div>
  );
}

export default Products;
