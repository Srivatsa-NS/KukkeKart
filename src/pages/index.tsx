import heroImage from "@/assets/optimized/hero-image.webp";
import { bestSellers } from "@/constants/CarouselSlides";
import { categories } from "@/constants/GridItems";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "@/store/pageState";
import Carousel from "@/components/ui/Carousel";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ArrowButton from "@/components/ui/ArrowButton";
import ImageGrid from "@/components/ui/ImageGrid";
import { useEffect, useState } from "react";

import { primaryColor, secondaryColor } from "@/constants/colors";

function Index() {
  const controls = useAnimation();
  const setCurrentPage = useSetRecoilState(currentPageState);
  const [xValue, setXValue] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      if (window.innerWidth >= 1280) setXValue(-300);
      else setXValue(0);
      setWindowWidth(window.innerWidth);
    };
    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  return (
    <div className={`bg-${secondaryColor}`}>
      <div
        className={`bg-${primaryColor} p-3 w-full`}
        style={{
          marginTop:
            windowWidth <= 426 ? "-80px" : windowWidth <= 768 ? "-35px" : "0",
        }}
      >
        <div className="flex flex-col xl:flex-row justify-center items-center relative">
          <motion.div
            className="p-4 md:p-10 xl:p-20 w-full lg:w-4/5 xl:w-3/5"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [0, 0, xValue], opacity: [0, 1, 1] }}
            transition={{ duration: 1.5, times: [0, 0.5, 1] }}
            onAnimationComplete={() => controls.start("visible")}
          >
            <Image
              src={heroImage}
              alt="hero-img"
              className="rounded-4xl w-full"
            />
          </motion.div>

          <motion.div
            className="static xl:absolute xl:right-20 flex flex-col max-md:flex-row max-md:items-center max-md:gap-4 justify-items-end mt-4 xl:mt-0 px-4 xl:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <p
              className={`p-2 sm:p-4 md:p-6 xl:p-8 md:mx-0 max-md:mx-0 bg-${secondaryColor} text-sm sm:text-md md:text-2xl lg:text-2xl xl:text-2xl rounded-4xl text-${primaryColor} body-font font-black max-[426px]:text-center`}
            >
              KukkeKart:
              <br />
              Your destination for authentic,
              <br className="hidden md:block" />
              homemade spices that transform every dish.
            </p>
            <div
              className="my-6 xl:my-10 max-md:my-0 max-[426px]:scale-75"
              onClick={() => {
                setCurrentPage("/products");
              }}
            >
              <Link href={"/products"}>
                <ArrowButton
                  name="Explore Collections"
                  textSize="text-sm max-md:text-md sm:text-md md:text-base xl:text-xl"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollAnimation
        className={`relative mb-2 md:mb-10 bg-${secondaryColor} items-center w-full px-10 py-10 text-${primaryColor}`}
      >
        <p className="headings-font text-4xl md:text-5xl lg:text-6xl absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          Our Best Sellers
        </p>
      </ScrollAnimation>
      <ScrollAnimation className={`bg-${secondaryColor} w-full`}>
        <Carousel slides={bestSellers} />
      </ScrollAnimation>
      <div className={`bg-${primaryColor} w-full`}>
        <ScrollAnimation
          className={`bg-${primaryColor} items-center w-full pt-10 text-${secondaryColor}`}
        >
          <p className="headings-font text-4xl md:text-5xl lg:text-6xl absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            Our Assortment
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <ImageGrid bgColor={`${primaryColor}`} gridItems={categories} />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Index;
