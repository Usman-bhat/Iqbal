"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ListCardProps {
  bname: string;
  id: string;
  bookId: string;
  theme: string;
}

export function ListCard({ bname, id, bookId }: ListCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Link href={`/${bookId}/${id}`}>
        <div className="h-full rounded-xl p-6 bg-[rgb(var(--color-secondary))] transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-[rgb(var(--color-text))] mb-4">
              {bname}
            </h3>
            <div className="mt-auto flex items-center justify-end">
              <motion.div
                whileHover={{ x: 5 }}
                className="text-[rgb(var(--color-accent))]"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ListCard;
