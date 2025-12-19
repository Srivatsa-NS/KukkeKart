import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import QuantityControls from "./QuantityControls";
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
  const oppositeColor = bgColor == primaryColor ? secondaryColor : primaryColor;

  const forceUpdate = () => {
    setCartUpdate((prev) => prev + 1);
    console.log(cartStore.getItems());
  };

  return (
    <div className="px-2 sm:px-4 md:px-10 lg:px-20 pt-5 pb-20 max-w-full overflow-x-hidden mt-10 min-[400px]:max-[550px]:m-10 min-[550px]:max-[640px]:m-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6 max-w-full">
        {gridItems.map((gridItem, index) => (
          <ScrollAnimation key={index}>
            <div
              className={`group flex flex-col items-center py-5 sm:p-6 md:px-4 md:py-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10 mx-0 sm:mx-3 max-[600px]:mx-1 min-[500px]:max-[600px]:mx-2 max-[500px]:mx-0 min-[550px]:max-[640px]:m-5 md:mx-3 lg:mx-5 mt-2 border-3 rounded-3xl shadow-xl duration-500 body-font
            bg-${oppositeColor} border-${bgColor} shadow-amber-950 text-${bgColor} hover:bg-${bgColor} 
            hover:border-${oppositeColor} hover:shadow-${oppositeColor} hover:text-${oppositeColor} hover:scale-110 
            transform`}
            >
              <Image
                src={gridItem.image}
                alt={gridItem.name}
                className="w-32 sm:w-48 md:w-60 h-40 sm:h-60 md:h-90 object-cover rounded-2xl mb-6 group-hover:scale-110 duration-500"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="text-center">
                <span className="text-md sm:text-2xl md:text-4xl group-hover:text-xl sm:group-hover:text-3xl md:group-hover:text-5xl duration-500 whitespace-nowrap">
                  {gridItem.name}
                </span>
                {gridItem.quantity && (
                  <span className="font-mono ml-2 opacity-75">
                    ({gridItem.quantity})
                  </span>
                )}
              </div>
              {gridItem.price && (
                <p className="text-base sm:text-xl md:text-3xl text-center font-bold mt-2">
                  {`₹${gridItem.price}`}
                </p>
              )}
              {gridItem.showAddToCart &&
                (cartStore.getItemQuantity(gridItem.name) > 0 ? (
                  <div
                    className={`mt-4 flex items-center gap-3 px-4 py-2 border-2 rounded-xl bg-${oppositeColor} text-${bgColor} border-${bgColor}`}
                  >
                    <div onClick={(e) => e.stopPropagation()}>
                      <QuantityControls
                        itemName={gridItem.name}
                        bgColor={bgColor}
                        textColor={bgColor}
                        borderColor={oppositeColor}
                        onUpdate={forceUpdate}
                        item={{
                          name: gridItem.name,
                          price: gridItem.price || 0,
                          quantity: gridItem.quantity || "",
                          category: gridItem.category || "",
                          image: gridItem.image,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`mt-4 flex items-center justify-center px-4 py-3 border-2 rounded-xl 
                    bg-${oppositeColor} text-${bgColor} border-${bgColor} h-15 cursor-pointer`}
                    onClick={(e) => {
                      e.stopPropagation();
                      cartStore.addItem({
                        name: gridItem.name,
                        price: gridItem.price || 0,
                        quantity: gridItem.quantity || "",
                        category: gridItem.category || "",
                        image: gridItem.image,
                      });
                      forceUpdate();
                    }}
                  >
                    <button className="font-semibold cursor-pointer text-sm sm:text-base md:text-xl">
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
