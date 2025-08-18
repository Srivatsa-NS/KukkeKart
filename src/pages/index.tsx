import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "@/store/pageState";
import { useState } from "react";

function Index() {
  const controls = useAnimation();
  const setCurrentPage = useSetRecoilState(currentPageState);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-amber-800">
      <div className="flex justify-center items-center relative">
        <motion.div
          className="p-20"
          style={{ width: "60%", height: "60%" }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [0, 0, -350], opacity: [0, 1, 1] }}
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
          <p className="p-8 bg-amber-50 text-5xl rounded-4xl text-amber-800 common-font">
            KukkeKart:
            <br />
            Your destination for authentic,
            <br />
            homemade spices that transform every dish.
          </p>
          <div
            className="my-5"
            onClick={() => {
              setCurrentPage("/products");
            }}
          >
            <Link href={"/products"}>
              <motion.div
                className="flex"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Button name="Explore collections" isHovered={isHovered} />
                <motion.p
                  className="my-3 mx-2 text-2xl text-amber-50"
                  animate={{ x: isHovered ? 20 : 0 }}
                  transition={{ type: "spring" }}
                >
                  {">>"}
                </motion.p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
