import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";

interface GridCarouselItem {
  image: any;
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
            className="group flex flex-col items-center p-10 border-3 rounded-3xl shadow-xl duration-500 common-font
            bg-amber-50 border-amber-800 shadow-amber-950 text-amber-800 hover:cursor-pointer
            hover:bg-amber-800 hover:border-amber-50 hover:shadow-amber-500 hover:text-amber-50
            hover:scale-110 transform flex-shrink-0"
            style={{ width: "calc(25% - 1.5rem)" }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="w-48 h-80 object-cover rounded-2xl mb-6 group-hover:w-80 duration-500"
            />
            <p className="text-4xl text-center group-hover:text-5xl duration-500">{item.name}</p>
          </div>
        ))}
        <div
          className="flex flex-col justify-center items-center flex-shrink-0"
          style={{ width: "calc(25% - 1.5rem)" }}
        >
          <ArrowButton name="View All" textSize="3xl" />
        </div>
      </motion.div>

      {currentPage > 0 && (
        <button
          onClick={prevPage}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all"
        >
          {"<"}
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          onClick={nextPage}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all"
        >
          {">"}
        </button>
      )}
    </div>
  );
}

export default GridCarousel;
