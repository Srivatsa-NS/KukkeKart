import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BrownButton from "./BrownButton";
import ScrollAnimation from "./ScrollAnimation";
import { primaryColor } from "@/constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Slide {
  image: string | import("next/image").StaticImageData;
  alt: string;
  description: string;
  buy: boolean;
}

interface CarouselProps {
  slides: Slide[];
}

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `-${current * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full px-4 md:px-20 lg:px-40 xl:px-96 pb-10 md:pb-20 flex-shrink-0 flex flex-col items-center"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              className="rounded-4xl shadow-2xl shadow-amber-950 w-60 sm:w-72 md:w-96 lg:w-auto"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />

            <ScrollAnimation>
              <AnimatePresence mode="wait">
                {current === index && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className={`mt-6 text-md md:text-xl lg:text-2xl font-medium text-amber-900 body-font text-center`}
                  >
                    {slide.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </ScrollAnimation>
          </div>
        ))}
      </motion.div>

      <div
        className="absolute left-2 sm:left-0 md:left-10 top-1/4 sm:top-1/3 -translate-y-1/2"
        onClick={prevSlide}
      >
        <div className="block sm:hidden">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`text-2xl text-${primaryColor}`}
          />
        </div>
        <div className="hidden sm:block scale-50 md:scale-100">
          <BrownButton name="<" textSize="text-xl md:text-2xl lg:text-4xl" />
        </div>
      </div>

      <div className="absolute mb-5 bottom-0 sm:bottom-12 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full hover:cursor-pointer ${
              current === i ? "bg-amber-950" : `bg-${primaryColor}`
            }`}
          />
        ))}
      </div>

      <div
        className="absolute right-2 sm:right-0 md:right-10 top-1/4 sm:top-1/3 -translate-y-1/2"
        onClick={nextSlide}
      >
        <div className="block sm:hidden">
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`text-2xl text-${primaryColor}`}
          />
        </div>
        <div className="hidden sm:block scale-50 md:scale-100">
          <BrownButton name=">" textSize="text-xl md:text-2xl lg:text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
