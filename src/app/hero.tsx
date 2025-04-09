"use client";

import { Typography } from "@material-tailwind/react";
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

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
          
          <div className="mt-10 flex gap-4">
            <button className="btn bg-[rgb(var(--color-accent))] text-white">
              Explore Poetry
            </button>
            <button className="btn bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))]">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
