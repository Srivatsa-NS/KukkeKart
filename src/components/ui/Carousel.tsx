import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BrownButton from "./BrownButton";
import ScrollAnimation from "./ScrollAnimation";
import { primaryColor, secondaryColor } from "@/constants/colors";

interface Slide {
  image: any;
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
            className="w-full px-96 pb-20 flex-shrink-0 flex flex-col items-center"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              className="rounded-4xl shadow-2xl shadow-amber-950"
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
                    className="mt-6 text-4xl font-medium text-amber-900 common-font"
                  >
                    {slide.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </ScrollAnimation>
            <ScrollAnimation>
              {slide.buy && (
                <div className="mt-7">
                  <BrownButton name="Add to Cart" textSize="2xl"/>
                </div>
              )}
            </ScrollAnimation>
          </div>
        ))}
      </motion.div>

      <div
        className="absolute left-10 top-1/3 -translate-y-1/2"
        onClick={prevSlide}
      >
        <BrownButton name="<" textSize="4xl"/>
      </div>

      <div className="absolute mb-5 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full hover:cursor-pointer ${
              current === i ? "bg-amber-950" : `bg-${primaryColor}`
            }`}
          />
        ))}
      </div>

      <div
        className="absolute right-10 top-1/3 -translate-y-1/2"
        onClick={nextSlide}
      >
        <BrownButton name=">" textSize="4xl"/>
      </div>
    </div>
  );
}

export default Carousel;
