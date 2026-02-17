import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "@/store/pageState";
import ScrollAnimation from "./ScrollAnimation";
import ProductModal from "./ProductModal";
import { primaryColor, secondaryColor } from "@/constants/colors";
import { cartStore } from "@/store/cartStore";

interface ImageGridItem {
  image: string | import("next/image").StaticImageData;
  name: string;
  route?: string;
  price?: number;
  description?: string;
  category?: string;
  quantity?: string;
  showAddToCart?: boolean;
}

function ImageGrid({
  bgColor,
  gridItems,
}: {
  bgColor: string;
  gridItems: ImageGridItem[];
}) {
  const [, setCartUpdate] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ImageGridItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const setCurrentPage = useSetRecoilState(currentPageState);
  const oppositeColor = bgColor == primaryColor ? secondaryColor : primaryColor;

  const forceUpdate = () => {
    setCartUpdate((prev) => prev + 1);
  };

  const handleItemClick = (gridItem: ImageGridItem) => {
    if (gridItem.showAddToCart) {
      setSelectedProduct(gridItem);
      setIsModalOpen(true);
    } else if (gridItem.route) {
      setCurrentPage(gridItem.route);
      const query = gridItem.name ? { category: gridItem.name } : {};
      router.push({
        pathname: gridItem.route,
        query,
      });
    }
  };

  const UNIT_TO_GRAMS: Record<string, number> = {
    "250g": 250,
    "500g": 500,
    "1kg": 1000,
  };

  return (
    <div className="px-2 sm:px-4 md:px-10 lg:px-20 pt-5 pb-20 max-w-full overflow-x-hidden md:mt-10 min-[400px]:max-[550px]:m-10 min-[550px]:max-[640px]:m-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-1 sm:gap-x-2 sm:gap-y-2 md:gap-x-3 md:gap-y-4 lg:gap-x-1 lg:gap-y-6 max-w-full">
        {gridItems.map((gridItem, index) => (
          <ScrollAnimation key={index}>
            <div
              className={`group flex flex-col items-center justify-between py-5 sm:p-6 md:px-4 md:py-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10 mx-0 sm:mx-3 max-[600px]:mx-1 min-[500px]:max-[600px]:mx-2 max-[500px]:mx-0 min-[550px]:max-[640px]:m-5 md:mx-3 lg:mx-10 mt-3 border-3 rounded-3xl shadow-xl duration-500 body-font relative cursor-pointer min-h-[300px] sm:min-h-[450px] md:min-h-[450px] lg:min-h-[500px]
            bg-${oppositeColor} border-${bgColor} shadow-amber-950 text-${bgColor} hover:bg-${bgColor} 
            hover:border-${oppositeColor} hover:shadow-${oppositeColor} hover:text-${oppositeColor} hover:scale-110 
            transform`}
              onClick={() => handleItemClick(gridItem)}
            >
              <div className="flex flex-col items-center gap-6">
                <Image
                  src={gridItem.image}
                  alt={gridItem.name}
                  className="w-32 sm:w-48 md:w-48 lg:w-52 h-40 sm:h-60 md:h-64 lg:h-72 object-cover rounded-2xl group-hover:scale-110 duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />

                <div className="text-center flex flex-col gap-2">
                  <span className="text-md sm:text-2xl md:text-4xl lg:text-3xl group-hover:text-xl sm:group-hover:text-3xl md:group-hover:text-5xl lg:group-hover:text-4xl duration-500 whitespace-nowrap">
                    {gridItem.name}
                  </span>

                  {gridItem.showAddToCart &&
                    cartStore.getItemQuantity(gridItem.name) > 0 &&
                    (() => {
                      const cartItems = cartStore
                        .getItems()
                        .filter((item) => item.name === gridItem.name);

                      const quantityMap = cartItems.reduce((acc, item) => {
                        acc[item.quantity] =
                          (acc[item.quantity] || 0) + item.cartQuantity;
                        return acc;
                      }, {} as Record<string, number>);

                      const totalGrams = Object.entries(quantityMap).reduce(
                        (sum, [qty, count]) => {
                          const gramsPerUnit = UNIT_TO_GRAMS[qty] || 0;
                          return sum + gramsPerUnit * count;
                        },
                        0
                      );

                      const totalKg = (totalGrams / 1000).toFixed(2);

                      return (
                        <div className="text-xs sm:text-sm font-semibold">
                          <p>{totalKg} kg</p>
                          <p>Added to cart</p>
                        </div>
                      );
                    })()}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          bgColor={bgColor}
          onUpdate={forceUpdate}
        />
      )}
    </div>
  );
}

export default ImageGrid;
