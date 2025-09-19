"use client";
import React from "react";
import CountUp from "./CountUp";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section className="py-8 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Creative solutions{" "}
              <motion.span
                className="text-yellow-600 block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                by professional designers
              </motion.span>
            </motion.h2>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -inset-4 bg-yellow-100 rounded-3xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative text-center py-8">
                <CountUp
                  from={0}
                  to={36}
                  separator=","
                  direction="up"
                  duration={10}
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black text-yellow-600 leading-none"
                />

                <motion.p
                  className="text-gray-700 mt-2 text-lg sm:text-xl font-serif"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Years of experience
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 lg:space-y-8"
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-serif">
                kitchor is a specialist independent design studio focusing on kitchens,
                bedrooms and furniture. From our two kitchor showrooms, we offer the very
                finest German, Italian and British design, fully supported by installation
                and interior design services.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-serif">
                Our philosophy is that great design doesn&apos;t need to be exclusive.
                This conviction was fundamental to us when we started in 2013 and holds
                true today.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-800 font-medium font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-yellow-50 transition-colors group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.span
                  className="text-yellow-600 text-xl font-bold"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
                <span className="group-hover:text-yellow-700 transition-colors text-sm sm:text-base">
                  Reasonable Prices
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-yellow-50 transition-colors group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.span
                  className="text-yellow-600 text-xl font-bold"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
                <span className="group-hover:text-yellow-700 transition-colors text-sm sm:text-base">
                  Exclusive Design
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-yellow-50 transition-colors group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.span
                  className="text-yellow-600 text-xl font-bold"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
                <span className="group-hover:text-yellow-700 transition-colors text-sm sm:text-base">
                  Professional Team
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-yellow-50 transition-colors group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.span
                  className="text-yellow-600 text-xl font-bold"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
                <span className="group-hover:text-yellow-700 transition-colors text-sm sm:text-base">
                  Best Designing Team
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 lg:mt-8"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative group overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.img
                  src="/about.jpg"
                  alt="Modern Kitchen"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800 shadow-lg"
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.2 },
                    scale: { duration: 0.5, delay: 1.2 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  Premium Quality
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
