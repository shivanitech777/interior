"use client";

import React, { useState } from "react";
import { ChevronRight, Star, Award, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "Premium Quality",
    description: "We deliver exceptional quality with premium materials and expert craftsmanship for lasting beauty and durability.",
    stats: "500+ Projects"
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Award Winning Design",
    description: "Our innovative designs have won multiple industry awards, combining functionality with stunning aesthetics.",
    stats: "15+ Awards"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Expert Team",
    description: "Our certified professionals bring decades of experience to transform your vision into reality with precision.",
    stats: "50+ Experts"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Timely Delivery",
    description: "We respect your time and deliver projects on schedule without compromising on quality or attention to detail.",
    stats: "98% On-Time"
  }
];

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative group overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src="/interior.jpg"
                alt="Modern Kitchen Interior"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Stats Badge */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">98% Satisfaction</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-6 right-6 w-6 h-6 bg-amber-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Header */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-xs sm:text-sm font-serif tracking-widest text-amber-600 uppercase"
                whileHover={{ letterSpacing: "0.2em" }}
                transition={{ duration: 0.2 }}
              >
                Why Choose Us
              </motion.p>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Extremely high{" "}
                <motion.span
                  className="text-amber-600 block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  standard of customer
                </motion.span>{" "}
                satisfaction
              </motion.h2>
            </motion.div>

            {/* Features List */}
            <motion.div
              className="space-y-4 lg:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`group p-4 lg:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${activeFeature === index
                      ? 'border-amber-200 bg-amber-50 shadow-lg'
                      : 'border-gray-100 bg-white hover:border-amber-100 hover:bg-amber-25 shadow-sm hover:shadow-md'
                    }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <motion.div
                      className={`p-3 rounded-xl transition-all duration-300 ${activeFeature === index
                          ? 'bg-amber-200 text-amber-700'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-amber-100 group-hover:text-amber-600'
                        }`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <motion.h3
                          className={`font-bold text-lg lg:text-xl transition-colors duration-300 ${activeFeature === index ? 'text-amber-700' : 'text-gray-900 group-hover:text-amber-700'
                            }`}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.title}
                        </motion.h3>

                        <motion.span
                          className="text-sm font-semibold text-amber-600 bg-amber-100 px-2 py-1 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                        >
                          {feature.stats}
                        </motion.span>
                      </div>

                      <motion.p
                        className={`text-sm lg:text-base transition-colors duration-300 leading-relaxed ${activeFeature === index ? 'text-gray-700' : 'text-gray-600'
                          }`}
                        animate={{
                          opacity: activeFeature === index ? 1 : 0.8,
                          y: activeFeature === index ? 0 : 2
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>

                      {/* Progress Bar */}
                      <motion.div
                        className="h-1 bg-gray-200 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.9 + (index * 0.1) }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                          initial={{ x: "-100%" }}
                          animate={{ x: activeFeature === index ? "0%" : "-100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{
                        rotate: activeFeature === index ? 90 : 0,
                        x: activeFeature === index ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${activeFeature === index ? 'text-amber-600' : 'text-gray-400'
                        }`} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
