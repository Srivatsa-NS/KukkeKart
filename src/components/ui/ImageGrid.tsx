import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { primaryColor, secondaryColor } from "@/constants/colors";
import { cartStore } from "@/store/cartStore";

interface ImageGridItem {
  image: any;
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
  const [cartUpdate, setCartUpdate] = useState(0);
  const oppositeColor = bgColor == primaryColor ? secondaryColor : primaryColor;

  const forceUpdate = () => {
    setCartUpdate((prev) => prev + 1);
    console.log(cartStore.getItems());
  };

  return (
    <div className="px-20 pt-5 pb-20">
      <div className="grid grid-cols-3 gap-6">
        {gridItems.map((gridItem, index) => (
          <ScrollAnimation key={index}>
            <div
              className={`group flex flex-col items-center p-10 mx-5 my-10 border-3 rounded-3xl shadow-xl duration-500 common-font
            bg-${oppositeColor} border-${bgColor} shadow-amber-950 text-${bgColor} hover:bg-${bgColor} 
            hover:border-${oppositeColor} hover:shadow-${oppositeColor} hover:text-${oppositeColor} hover:scale-110 
            transform`}
            >
              <Image
                src={gridItem.image}
                alt={gridItem.name}
                className="w-60 h-90 object-cover rounded-2xl mb-6 group-hover:w-80 duration-500"
              />
              <div className="text-center">
                <span className="text-4xl group-hover:text-5xl duration-500">
                  {gridItem.name}
                </span>
                {gridItem.quantity && (
                  <span className="font-mono ml-2 opacity-75">
                    ({gridItem.quantity})
                  </span>
                )}
              </div>
              {gridItem.price && (
                <p className="text-3xl text-center font-bold mt-2">
                  {`₹${gridItem.price}`}
                </p>
              )}
              {gridItem.showAddToCart &&
                (cartStore.getItemQuantity(gridItem.name) > 0 ? (
                  <div
                    className={`mt-4 flex items-center gap-3 px-4 py-2 border-2 rounded-xl bg-${oppositeColor} text-${bgColor} border-${bgColor}`}
                  >
                    <button
                      className={`w-10 h-10 rounded-xl border-2 bg-${bgColor} text-${oppositeColor} border-${oppositeColor} font-bold text-xl shadow-lg cursor-pointer`}
                      onClick={(e) => {
                        e.stopPropagation();
                        cartStore.removeItem(gridItem.name);
                        forceUpdate();
                      }}
                    >
                      −
                    </button>
                    <span className="font-semibold text-xl min-w-[40px] text-center">
                      {cartStore.getItemQuantity(gridItem.name)}
                    </span>
                    <button
                      className={`w-10 h-10 rounded-xl border-2 bg-${bgColor} text-${oppositeColor} border-${oppositeColor} font-bold text-xl shadow-lg cursor-pointer`}
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
                      +
                    </button>
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
                    <button className="font-semibold cursor-pointer text-xl">
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
