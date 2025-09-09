import ImageGrid from "@/components/ui/ImageGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { allProducts } from "@/constants/GridItems";
import { primaryColor, secondaryColor } from "@/constants/colors";

function Products() {
  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-5">
          <p className="common-font text-amber-50 text-6xl">
            Our products
          </p>
        </div>
      </ScrollAnimation>
      <ImageGrid bgColor={primaryColor} gridItems={allProducts} />
    </div>
  );
}

export default Products;
