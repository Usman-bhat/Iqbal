import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface FontSizeControlProps {
  fontSize: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function FontSizeControl({ fontSize, onIncrease, onDecrease }: FontSizeControlProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onDecrease}
        className="p-2 rounded-full bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all"
        aria-label="Decrease font size"
      >
        <MinusIcon className="h-4 w-4" />
      </motion.button>
      
      <span className="text-[rgb(var(--color-text))] min-w-[3rem] text-center">
        {fontSize}px
      </span>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onIncrease}
        className="p-2 rounded-full bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all"
        aria-label="Increase font size"
      >
        <PlusIcon className="h-4 w-4" />
      </motion.button>
    </div>
  );
}