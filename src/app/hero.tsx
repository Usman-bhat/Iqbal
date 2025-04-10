"use client";

import { Typography } from "@material-tailwind/react";
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

function Hero() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen pt-16 bg-[rgb(var(--color-primary))]">
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative mb-8">
            <img
              src={`/image/iqbal_${theme}.png`}
              alt="Iqbal"
              className="w-64 h-64 object-cover rounded-full shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-[rgb(var(--color-accent))] opacity-10"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[rgb(var(--color-text))]">
            Allama Iqbal
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[rgb(var(--color-text))] opacity-90">
            Poet of the East, philosopher, and visionary who inspired millions
            through his profound poetry and philosophical thoughts.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScrollLink
              to="poetry-section"
              smooth={true}
              duration={500}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[rgb(var(--color-accent))] rounded-full text-[rgb(var(--color-accent))] hover:text-white cursor-pointer"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(var(--color-accent))] group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Explore Poetry</span>
              <span className="relative invisible">Explore Poetry</span>
            </ScrollLink>

            <Link
              href="/learn-more"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[rgb(var(--color-text))] rounded-full text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-primary))]"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--color-primary))] duration-300 -translate-x-full bg-[rgb(var(--color-text))] group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
              <span className="relative invisible">Learn More</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
