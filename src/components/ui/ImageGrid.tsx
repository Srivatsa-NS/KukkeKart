import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { primaryColor, secondaryColor } from "@/constants/colors";

interface ImageGridItem {
  image: any;
  name: string;
  route: string;
}

function ImageGrid({
  bgColor,
  gridItems,
}: {
  bgColor: string;
  gridItems: ImageGridItem[]
}) {
  return (
    <div className="p-20">
      <div className="grid grid-cols-3 gap-6">
        {gridItems.map((gridItem, index) => (
          <ScrollAnimation key={index}>
            <div
              className={`group flex flex-col items-center p-10 mx-5 my-10 border-3 rounded-3xl shadow-xl duration-500 common-font
            bg-${secondaryColor} border-${primaryColor} shadow-amber-950 text-${primaryColor} hover:cursor-pointer
            hover:bg-${primaryColor} hover:border-${secondaryColor} hover:shadow-${secondaryColor}0 hover:text-${secondaryColor}
            hover:scale-110 transform`}
            >
              <Image
                src={gridItem.image}
                alt={gridItem.name}
                className="w-60 h-90 object-cover rounded-2xl mb-6 group-hover:w-80 duration-500"
              />
              <p className="text-4xl text-center group-hover:text-5xl duration-500">
                {gridItem.name}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
