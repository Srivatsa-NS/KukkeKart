import GridCarousel from "@/components/ui/GridCarousel";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { productsGrid } from "@/constants/CarouselSlides";
import React from "react";

function Products() {
  return (
    <div>
      <div className="bg-amber-800">
        <ScrollAnimation>
          <p className="flex justify-center common-font text-7xl text-amber-50">
            Our products
          </p>
          <GridCarousel items={productsGrid} />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Products;
