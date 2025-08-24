import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/icons/kukkekart_intro.jpeg";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          className="flex items-center justify-center h-screen bg-amber-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 0.9, 0.7], opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={logo}
              alt="Logo"
              width={500}
              height={500}
              className="rounded-full shadow-2xl shadow-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
