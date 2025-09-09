import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { primaryColor, secondaryColor } from "@/constants/colors";

interface ImageGridItem {
  image: any;
  name: string;
  route?: string;
  price?: string;
  description?: string;
  category?: string;
  quantity?: string;
}

function ImageGrid({
  bgColor,
  gridItems,
}: {
  bgColor: string;
  gridItems: ImageGridItem[];
}) {
  const oppositeColor = bgColor == primaryColor ? secondaryColor : primaryColor;

  return (
    <div className="p-20">
      <div className="grid grid-cols-3 gap-6">
        {gridItems.map((gridItem, index) => (
          <ScrollAnimation key={index}>
            <div
              className={`group flex flex-col items-center p-10 mx-5 my-10 border-3 rounded-3xl shadow-xl duration-500 common-font
            bg-${oppositeColor} border-${bgColor} shadow-amber-950 text-${bgColor} hover:cursor-pointer
            hover:bg-${bgColor} hover:border-${oppositeColor} hover:shadow-${oppositeColor} hover:text-${oppositeColor}
            hover:scale-110 transform`}
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
                  {gridItem.price}
                </p>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
