import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
