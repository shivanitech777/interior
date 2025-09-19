"use client";
import HeroSection from '@/components/HeroSection'
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from "motion/react";
import { Search, Filter, Eye, ExternalLink } from 'lucide-react';

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const projects = [
    {
      id: 12,
      title: "Luxury Modern Kitchen",
      category: "Modern",
      tags: ["Modern", "Luxury", "Contemporary"],
      description: "A stunning modern kitchen with premium finishes and smart storage solutions.",
      image: "/interiorlo.webp",
      year: "2024",
      client: "Private Residence"
    },
    {
      id: 11,
      title: "Coastal Dream Kitchen",
      category: "Coastal",
      tags: ["Coastal", "Modern", "Natural"],
      description: "Inspired by ocean views with light colors and natural materials.",
      image: "/interior.jpg",
      year: "2024",
      client: "Beachfront Villa"
    },
    {
      id: 10,
      title: "Minimalist Haven",
      category: "Minimalist",
      tags: ["Minimalist", "Clean", "Functional"],
      description: "Clean lines and functional design for the modern minimalist.",
      image: "/about.jpg",
      year: "2023",
      client: "Urban Apartment"
    },
    {
      id: 9,
      title: "Vintage Charm Kitchen",
      category: "Vintage",
      tags: ["Vintage", "Classic", "Timeless"],
      description: "Classic design with modern functionality and vintage charm.",
      image: "/hero.jpg",
      year: "2023",
      client: "Historic Home"
    },
    {
      id: 8,
      title: "Smart Space Solution",
      category: "Small Space",
      tags: ["Small Space", "Smart", "Efficient"],
      description: "Maximizing every inch with clever storage and multi-functional design.",
      image: "/kit.jpg",
      year: "2024",
      client: "City Condo"
    },
    {
      id: 7,
      title: "Bohemian Kitchen Oasis",
      category: "Bohemian",
      tags: ["Bohemian", "Eclectic", "Colorful"],
      description: "Vibrant colors and eclectic design elements create a unique space.",
      image: "/fool.jpg",
      year: "2023",
      client: "Artist Studio"
    }
  ];

  const categories = ["All", "Modern", "Coastal", "Minimalist", "Vintage", "Small Space", "Bohemian"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === "All" || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });
  return (
    <>
      <HeroSection title={"Our Projects"} />

      <main className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Kitchen <span className="text-amber-600">Projects</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover our portfolio of stunning kitchen transformations, each designed with precision and crafted with passion.
            </motion.p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            className="mb-8 md:mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-white shadow-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedFilter === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (categories.indexOf(category) * 0.1) }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-64 md:h-72 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center space-x-4"
                  >
                    <motion.button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Year Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {project.year}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300"
                    animate={{
                      x: hoveredProject === project.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">{project.client}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    className="h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.0 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                      initial={{ x: "-100%" }}
                      animate={{ x: hoveredProject === project.id ? "0%" : "-100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedFilter("All"); }}
                className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </>
  )
}

export default Project