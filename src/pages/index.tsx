import heroImage from "@/assets/images/hero-image.jpg";
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
import Grid from "@/components/ui/ImageGrid";

function Index() {
  const controls = useAnimation();
  const setCurrentPage = useSetRecoilState(currentPageState);

  return (
    <div className="bg-amber-50">
      <div className="bg-amber-800 p-3">
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
            <p className="p-8 bg-amber-50 text-4xl rounded-4xl text-amber-800 common-font">
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
      <ScrollAnimation className="relative mb-10 bg-amber-50 items-center w-full px-10 py-10 text-amber-800">
        <p className="common-font text-6xl absolute left-1/2 -translate-x-1/2">
          Our Best Sellers
        </p>
      </ScrollAnimation>
      <ScrollAnimation className="bg-amber-50">
        <Carousel slides={bestSellers} />
      </ScrollAnimation>
      <div className="bg-amber-800">
        <ScrollAnimation className="bg-amber-800 items-center w-full pt-10 text-amber-50">
          <p className="common-font text-6xl absolute left-1/2 -translate-x-1/2">
            Our Assortment
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <Grid gridItems={categories} />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Index;
