import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface ImageGridItem {
  image: any;
  name: string;
  route: string;
}

interface ImageGridProps {
  gridItems: ImageGridItem[];
}

function ImageGrid({ gridItems }: ImageGridProps) {
  return (
    <div className="p-20">
      <div className="grid grid-cols-3 gap-6">
        {gridItems.map((gridItem, index) => (
          <ScrollAnimation>
            <div
              key={index}
              className="group flex flex-col items-center p-10 mx-5 my-10 border-3 rounded-3xl shadow-xl duration-500 common-font
            bg-amber-50 border-amber-800 shadow-amber-950 text-amber-800 hover:cursor-pointer
            hover:bg-amber-800 hover:border-amber-50 hover:shadow-amber-500 hover:text-amber-50
            hover:scale-110 transform"
            >
              <Image
                src={gridItem.image}
                alt={gridItem.name}
                className="w-60 h-90 object-cover rounded-2xl mb-6 group-hover:w-80 duration-500"
              />
              <p className="text-4xl text-center group-hover:text-5xl duration-500">{gridItem.name}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
