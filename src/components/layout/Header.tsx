import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import headerImage from "@/assets/icons/kukkekart_logo.jpeg";
import MenuItem from "@/components/ui/MenuItem";

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
  return (
    <div className="bg-amber-50 flex items-center justify-between">
      <Image
        src={headerImage}
        alt="Logo"
        width={100}
        height={100}
        className="m-5 rounded-full shadow-2xl shadow-black hover:cursor-pointer"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex"
      >
        {Object.entries(menuItems).map(([key, value]) => (
          <MenuItem label={key} route={value} />
        ))}
      </motion.div>
    </div>
  );
}

export default Header;
