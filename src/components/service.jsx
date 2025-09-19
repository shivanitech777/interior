"use client";
import React from "react";
import { Wrench, Home, Package, Cog } from "lucide-react";
import BlurText from "./BlurText";
import { motion } from "motion/react";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-gray-800" />,
    title: "Smart care",
    description:
      "Proud of professional Ecommerce services on live chat, dedicate consultation by expertise and professional designers.",
  },
  {
    icon: <Package className="w-10 h-10 text-gray-800" />,
    title: "Kitchen Planner",
    description:
      "Enjoy fast delivery with our service. Receive interior/exterior furniture for house as quickly as you want with the best offer.",
  },
  {
    icon: <Home className="w-10 h-10 text-gray-800" />,
    title: "Home check",
    description:
      "Perfect consultation with home check. Check carefully your home before suggesting suitable interior design in your sweet home.",
  },
  {
    icon: <Cog className="w-10 h-10 text-gray-800" />,
    title: "Kitchen Design",
    description:
      "Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh, design your own style and make it special.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-8 lg:gap-16 w-full flex-col lg:flex-row">

          {/* Left Content Section */}
          <motion.div
            className="lg:w-[40%] w-full space-y-6 lg:space-y-8 md:pb-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              className="text-xs sm:text-sm font-semibold tracking-widest text-amber-600 uppercase font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.p>

            <motion.div
              className="space-y-2 md:space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BlurText
                text="We provide"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-serif"
              />
              <BlurText
                text="more than just "
                delay={300}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-serif"
              />
              <BlurText
                text="quality services"
                delay={400}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-600 leading-tight font-serif"
              />
            </motion.div>

            <motion.button
              className="group bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <span>Read More</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div
            className="lg:w-[60%] w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Icon and Title Section */}
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="relative p-3 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl group-hover:from-amber-200 group-hover:to-amber-100 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {React.cloneElement(service.icon, {
                          className: "w-8 h-8 text-gray-800 group-hover:text-amber-700 transition-colors duration-300"
                        })}
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-amber-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "20%" }}
                    transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-amber-100 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-gray-200 rounded-full opacity-30 blur-lg"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
