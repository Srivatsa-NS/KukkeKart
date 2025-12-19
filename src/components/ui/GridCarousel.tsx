import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import { primaryColor, secondaryColor } from "@/constants/colors";

interface GridCarouselItem {
  image: string | import('next/image').StaticImageData;
  name: string;
  alt: string;
}

interface GridCarouselProps {
  items: GridCarouselItem[];
}

function GridCarousel({ items }: GridCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="relative p-20 overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: `-${currentPage * 75}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center p-10 border-3 rounded-3xl shadow-xl duration-500 headings-font
            bg-${secondaryColor} border-${primaryColor} shadow-amber-950 text-${primaryColor} hover:cursor-pointer
            hover:bg-${primaryColor} hover:border-${secondaryColor} hover:shadow-${secondaryColor}0 hover:text-${secondaryColor}
            hover:scale-110 hover:z-10 transform origin-center flex-shrink-0`}
            style={{ width: "calc(25% - 1.5rem)" }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="w-48 h-80 object-cover rounded-2xl mb-6"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <p className="text-4xl text-center">{item.name}</p>
          </div>
        ))}
        <div
          className="flex flex-col justify-center items-center flex-shrink-0"
          style={{ width: "calc(25% - 1.5rem)" }}
        >
          <ArrowButton name="View All" textSize="text-3xl" />
        </div>
      </motion.div>

      {currentPage > 0 && (
        <button
          onClick={prevPage}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/50 transition-all cursor-pointer z-20"
        >
          {"<"}
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          onClick={nextPage}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/50 transition-all cursor-pointer z-20"
        >
          {">"}
        </button>
      )}
    </div>
  );
}

export default GridCarousel;
