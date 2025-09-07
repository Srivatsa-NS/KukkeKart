import GridCarousel from "@/components/ui/GridCarousel";
import ImageGrid from "@/components/ui/ImageGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { productsGrid } from "@/constants/carouselSlides";
import { categories } from "@/constants/GridItems";
import { primaryColor, secondaryColor } from "@/constants/colors";

function Products() {
  return (
    <div>
      <div className={`bg-${primaryColor}`}>
        <ScrollAnimation>
          <p
            className={`flex justify-center common-font text-7xl text-${secondaryColor}`}
          >
            Our products
          </p>
          <GridCarousel items={productsGrid} />
        </ScrollAnimation>
      </div>
      <div className={`bg-${secondaryColor}`}>
        <ScrollAnimation
          className={`bg-${primaryColor} items-center w-full pt-10 text-${secondaryColor}`}
        >
          <p className="common-font text-6xl absolute left-1/2 -translate-x-1/2">
            Our Assortment
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <ImageGrid bgColor={`bg-${secondaryColor}`} gridItems={categories} />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Products;
