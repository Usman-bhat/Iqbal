"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/outline";

export function Testimonial() {
  return (
    <section className="bg-[rgb(var(--color-primary))] py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgb(var(--color-accent))] bg-opacity-10 flex items-center justify-center"
            >
              <UserIcon className="w-8 h-8 text-[rgb(var(--color-accent))]" />
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--color-text))]">
              Who am I
            </h2>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-[rgb(var(--color-accent))] text-9xl">"</span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative text-lg leading-relaxed text-[rgb(var(--color-text))] opacity-90"
              >
                A dedicated student committed to making the internet a positive space by 
                sharing informative and uplifting content. I believe that knowledge is a 
                powerful tool, and it's our responsibility, as emphasized in the Quran 
                and Islamic teachings, to transfer knowledge for the betterment of society.
              </motion.p>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-[rgb(var(--color-text))] opacity-90"
            >
              This mission is rooted in the profound Islamic view that encourages the 
              dissemination of meaningful knowledge to benefit others. Aspiring to 
              contribute positively, I strive to create content that aligns with these 
              values, fostering an environment of learning, understanding, and enlightenment.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[rgb(var(--color-accent))] bg-opacity-10 text-[rgb(var(--color-accent))]"
          >
            <span className="text-sm font-medium text-white">Developer</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
