import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

function Index() {
  const controls = useAnimation();

  return (
    <div className="body-style">
      <div className="flex justify-center items-center relative">
        <motion.div
          className="p-20"
          style={{ width: "60%", height: "60%" }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [0, 0, -350], opacity: [0, 1, 1] }}
          transition={{ duration: 1.5, times : [0, 0.5, 1] }}
          onAnimationComplete={() => controls.start("visible")}
        >
          <Image src={heroImage} alt="hero-img" className="rounded-4xl" />
        </motion.div>

        <motion.div
          className="absolute right-20"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <p className="p-8 bg-amber-50 text-2xl rounded-4xl hero-text">
            KukkeKart:
            <br />
            Your destination for authentic,
            <br />
            homemade spices that transform every dish.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
