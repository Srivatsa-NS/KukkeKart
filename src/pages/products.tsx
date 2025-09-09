import { useState } from "react";
import ImageGrid from "@/components/ui/ImageGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import SortDropdown from "@/components/ui/SortDropdown";
import { allProducts } from "@/constants/GridItems";
import { primaryColor, secondaryColor } from "@/constants/colors";

function Products() {
  const [sortedProducts, setSortedProducts] = useState(allProducts);
  const [gridKey, setGridKey] = useState(0);

  const handleSortChange = (sortType: string) => {
    let sorted = [...allProducts];

    switch (sortType) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sorted.sort(
          (a, b) =>
            parseInt(a.price.replace("₹", "")) -
            parseInt(b.price.replace("₹", ""))
        );
        break;
      case "price-desc":
        sorted.sort(
          (a, b) =>
            parseInt(b.price.replace("₹", "")) -
            parseInt(a.price.replace("₹", ""))
        );
        break;
      default:
        sorted = allProducts;
    }

    setSortedProducts(sorted);
    setGridKey(prev => prev + 1);
  };

  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-5">
          <p className="common-font text-amber-50 text-6xl">Our products</p>
        </div>
        <div className="px-25 flex justify-end">
          <SortDropdown onSortChange={handleSortChange} />
        </div>
      </ScrollAnimation>
      <ImageGrid key={gridKey} bgColor={primaryColor} gridItems={sortedProducts} />
    </div>
  );
}

export default Products;
