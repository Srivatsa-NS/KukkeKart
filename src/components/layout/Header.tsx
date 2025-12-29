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
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const isCartActive = router.pathname === "/cart";

  return (
    <div
      className={`bg-${secondaryColor} flex items-center justify-between relative py-1 sm:py-0 max-[426px]:py-0`}
    >
      <Image
        src={headerImage}
        alt="Logo"
        width={100}
        height={100}
        className="m-5 rounded-full shadow-2xl shadow-black hover:cursor-pointer w-16 h-16 md:w-24 md:h-24 max-[426px]:w-10 max-[426px]:h-10 max-[426px]:m-2"
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
      <div className="lg:hidden flex items-center gap-3">
        <Link href="/cart">
          <button
            className={`m-5 text-3xl max-[426px]:text-xl max-[426px]:m-2`}
            style={{
              color: isCartActive ? "#fffbeb" : "#92400e",
              backgroundColor: isCartActive ? "#92400e" : "transparent",
              borderRadius: isCartActive ? "0.5rem" : "0",
              padding: isCartActive ? "0.5rem" : "0",
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </Link>
        <button
          className={`m-5 text-3xl text-${primaryColor} max-[426px]:text-xl max-[426px]:m-2`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
