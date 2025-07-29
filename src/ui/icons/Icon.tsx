import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

interface IconProps {
  name: string;
  label?: string;
  size?: number;
}

export default function Icon({ name, label }: IconProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-sm text-offwhite rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-sm shadow-lg shadow-lime/20 cursor-pointer"
      whileHover={{
        scale: 1.2,
        rotate: Math.random() * 10 - 5,
        x: Math.random() * 15 - 7,
        y: Math.random() * 15 - 7,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <StackIcon name={name} className="w-8 h-8 sm:w-10 sm:h-10" variant="dark" />
      <span className="text-xs sm:text-sm tracking-wide">{label}</span>
    </motion.div>
  );
}
