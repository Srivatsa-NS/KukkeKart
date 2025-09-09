import { useState } from "react";
import ImageGrid from "@/components/ui/ImageGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import SortDropdown from "@/components/ui/SortDropdown";
import FilterDropdown from "@/components/ui/FilterDropdown";
import Button from "@/components/ui/Button";
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
      result = result.filter((product) => product.category === filterCategory);
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
    setGridKey((prev) => prev + 1);
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
    setGridKey((prev) => prev + 1);
  };

  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-8">
          <p className="common-font text-amber-50 text-6xl">Our products</p>
        </div>
      </ScrollAnimation>

      <div className="px-20 flex justify-between items-start mb-6">
        <div className="flex gap-4 items-start">
          <FilterDropdown onFilterChange={handleFilterChange} selectedValue={currentFilter} />
          <SortDropdown onSortChange={handleSortChange} selectedValue={currentSort} />
        </div>
        <button
          onClick={handleClearAll}
          className={`px-4 py-2 border rounded-lg bg-${secondaryColor} text-${primaryColor} border-${primaryColor} hover:bg-${primaryColor} hover:text-${secondaryColor} hover:border-${secondaryColor} transition-colors duration-500 cursor-pointer`}
        >
          Clear All
        </button>
      </div>
      <ImageGrid
        key={gridKey}
        bgColor={primaryColor}
        gridItems={displayedProducts}
      />
    </div>
  );
}

export default Products;
