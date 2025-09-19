"use client";
import BlogCard from '@/components/blog-card'
import HeroSection from '@/components/HeroSection'
import React, { useState } from 'react'
import { motion } from "motion/react";
import { Search, Calendar, User, Tag, TrendingUp } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "10 Modern Kitchen Design Trends for 2024",
      excerpt: "Discover the latest kitchen design trends that are shaping modern homes this year.",
      image: "/interior.jpg",
      category: "Design Trends",
      author: "Sarah Johnson",
      date: "2024-03-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Maximizing Small Kitchen Spaces: Smart Storage Solutions",
      excerpt: "Learn clever storage solutions and design tricks to make your small kitchen feel spacious.",
      image: "/about.jpg",
      category: "Small Spaces",
      author: "Mike Chen",
      date: "2024-03-10",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "The Art of Kitchen Lighting: A Complete Guide",
      excerpt: "From task lighting to ambient illumination, master the art of kitchen lighting design.",
      image: "/hero.jpg",
      category: "Lighting",
      author: "Emma Davis",
      date: "2024-03-08",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Kitchen Materials: Eco-Friendly Options",
      excerpt: "Explore environmentally conscious materials and sustainable design practices for kitchens.",
      image: "/kit.jpg",
      category: "Sustainability",
      author: "David Wilson",
      date: "2024-03-05",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 5,
      title: "Color Psychology in Kitchen Design",
      excerpt: "How different colors affect mood and functionality in kitchen spaces.",
      image: "/fool.jpg",
      category: "Color Design",
      author: "Lisa Thompson",
      date: "2024-03-01",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 6,
      title: "Smart Kitchen Technology: The Future is Here",
      excerpt: "Explore the latest smart appliances and technology transforming modern kitchens.",
      image: "/interiorlo.webp",
      category: "Technology",
      author: "Alex Rodriguez",
      date: "2024-02-28",
      readTime: "6 min read",
      featured: true
    }
  ];

  const categories = ["All", "Design Trends", "Small Spaces", "Lighting", "Sustainability", "Color Design", "Technology"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <HeroSection title={"Interior Design Blog"} />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Latest <span className="text-amber-600">Insights</span> & Trends
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Stay updated with the latest kitchen design trends, tips, and inspiration from our expert team.
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
                placeholder="Search articles..."
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
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
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

          {/* Featured Posts Section */}
          {selectedCategory === "All" && (
            <motion.section
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Featured Articles</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* All Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    className="w-full mt-4 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Blog