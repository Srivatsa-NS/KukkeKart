import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import headerImage from "@/assets/optimized/kukkekart_logo.webp";
import MenuItem from "@/components/ui/MenuItem";
import { secondaryColor, primaryColor } from "@/constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const container = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const menuItems = {
  Home: "/",
  Products: "/products",
  "About us": "/about",
  "Contact us": "/contact",
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`bg-${secondaryColor} flex items-center justify-between relative py-1 sm:py-0`}
    >
      <Image
        src={headerImage}
        alt="Logo"
        width={100}
        height={100}
        className="m-5 rounded-full shadow-2xl shadow-black hover:cursor-pointer w-16 h-16 md:w-24 md:h-24"
        priority
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex"
      >
        {Object.entries(menuItems).map(([key, value]) => (
          <MenuItem key={key} label={key} route={value} />
        ))}
        <MenuItem
          key="cart"
          label={<FontAwesomeIcon icon={faShoppingCart} />}
          route="/cart"
        />
      </motion.div>
      <button
        className={`lg:hidden m-5 text-3xl text-${primaryColor}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className={`fixed top-0 left-0 w-full h-full bg-${secondaryColor} flex flex-col items-end justify-center lg:hidden shadow-lg z-50`}
          >
            <button
              className={`absolute top-10 right-5 text-3xl text-${primaryColor}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {Object.entries(menuItems).map(([key, value]) => (
              <MenuItem
                key={key}
                label={key}
                route={value}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <MenuItem
              key="cart"
              label={<FontAwesomeIcon icon={faShoppingCart} />}
              route="/cart"
              onClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
