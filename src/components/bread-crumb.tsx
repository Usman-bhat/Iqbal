"use client"
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from '@/app/ThemeProvider';

interface BreadCrumbProps {
  breadcrumbs: { href: string; label: string }[];
}

export function MyBreadCrumb({ breadcrumbs }: BreadCrumbProps) {
  const { theme } = useTheme();

  return (
    <nav className="bg-[rgb(var(--color-primary))] py-4">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 text-sm"
        >
          <a 
            href="/" 
            className="flex items-center text-[rgb(var(--color-accent))] hover:opacity-80 transition-opacity"
          >
            <HomeIcon className="h-4 w-4" />
          </a>
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-[rgb(var(--color-text))] opacity-40" />
              <a
                href={breadcrumb.href}
                className="ml-2 text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-accent))] transition-colors"
              >
                {breadcrumb.label}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}
