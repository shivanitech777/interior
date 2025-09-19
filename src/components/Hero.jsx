"use client";
import React from "react";
import ShinyText from "./button";
import BlurText from "./BlurText";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen  overflow-hidden">

      <motion.div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        <motion.h1
          className="text-5xl md:text-6xl text-gray-900 font-serif"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <BlurText
            text="DESIGN"
            delay={300}
            animateBy="words"
            direction="top"
          />
          <BlurText
            text="BUILD"
            delay={400}
            animateBy="words"
            direction="top"
          />
          <BlurText
            text="KITCHENS"
            delay={500}
            animateBy="words"
            direction="top"
            className="text-yellow-600 font-serif"
          />
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-600 text-lg font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Kitchens should be designed around what&apos;s truly important, family,
          food and life.
        </motion.p>

        <motion.button
          className="mt-8 w-fit px-6 py-3 bg-gray-900 text-white square hover:bg-gray-800 transition-all font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShinyText
            text="VIEW KITCHENS "
            disabled={false}
            speed={3}
            className='custom-class'
          />
        </motion.button>

      </motion.div>

      <motion.div
        className="bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
        initial={{ opacity: 0, x: 100, scale: 1.1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        drag
        dragConstraints={{
          top: -20,
          left: -20,
          right: 20,
          bottom: 20,
        }}
        dragTransition={{
          bounceStiffness: 300,
          bounceDamping: 20
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-yellow-500 rounded-full"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
