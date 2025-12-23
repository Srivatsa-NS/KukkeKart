import { currentPageState } from "@/store/pageState";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MenuItem = ({ label, route, onClick }: { label: string | React.ReactNode; route: string; onClick?: () => void }) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  return (
    <Link href={route}>
      <motion.div
        variants={item}
        whileHover={{
          backgroundColor: "#92400e",
          color: "#fffbeb",
          transition: { duration: 0.5 },
        }}
        style={{
          color: currentPage === route ? "#fffbeb" : "#92400e",
          backgroundColor: currentPage == route ? "#92400e" : "#fffbeb",
        }}
        onClick={() => {
          setCurrentPage(route);
          onClick?.();
        }}
        className="mx-4 px-5 rounded-2xl menu-item headings-font hover:cursor-pointer"
      >
        {label}
      </motion.div>
    </Link>
  );
};

export default MenuItem;
