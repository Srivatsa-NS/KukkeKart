import heroImage from "@/assets/images/hero-image.jpg";
import { bestSellers } from "@/constants/carouselSlides";
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

import { primaryColor, secondaryColor } from "@/constants/colors";

function Index() {
  const controls = useAnimation();
  const setCurrentPage = useSetRecoilState(currentPageState);

  return (
    <div className={`bg-${secondaryColor}`}>
      <div className={`bg-${primaryColor} p-3`}>
        <div className="flex justify-center items-center relative">
          <motion.div
            className="p-20"
            style={{ width: "60%", height: "60%" }}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [0, 0, -300], opacity: [0, 1, 1] }}
            transition={{ duration: 1.5, times: [0, 0.5, 1] }}
            onAnimationComplete={() => controls.start("visible")}
          >
            <Image src={heroImage} alt="hero-img" className="rounded-4xl" />
          </motion.div>

          <motion.div
            className="absolute right-20 flex-col justify-items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <p
              className={`p-8 bg-${secondaryColor} text-4xl rounded-4xl text-${primaryColor} common-font`}
            >
              KukkeKart:
              <br />
              Your destination for authentic,
              <br />
              homemade spices that transform every dish.
            </p>
            <div
              className="my-10"
              onClick={() => {
                setCurrentPage("/products");
              }}
            >
              <Link href={"/products"}>
                <ArrowButton name="Explore Collections" textSize="2xl" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollAnimation
        className={`relative mb-10 bg-${secondaryColor} items-center w-full px-10 py-10 text-${primaryColor}`}
      >
        <p className="common-font text-6xl absolute left-1/2 -translate-x-1/2">
          Our Best Sellers
        </p>
      </ScrollAnimation>
      <ScrollAnimation className={`bg-${secondaryColor}`}>
        <Carousel slides={bestSellers} />
      </ScrollAnimation>
      <div className={`bg-${primaryColor}`}>
        <ScrollAnimation
          className={`bg-${primaryColor} items-center w-full pt-10 text-${secondaryColor}`}
        >
          <p className="common-font text-6xl absolute left-1/2 -translate-x-1/2">
            Our Assortment
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <ImageGrid bgColor={`bg-${primaryColor}`} gridItems={categories} />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Index;
