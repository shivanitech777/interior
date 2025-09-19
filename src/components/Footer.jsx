

"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, ArrowUp, Heart } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
    
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
      

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="flex items-center text-2xl font-bold text-white mb-4">
                  <motion.span
                    className="bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-2 rounded-lg mr-3 text-white shadow-lg"
                    animate={{
                      boxShadow: ["0 4px 20px rgba(245, 158, 11, 0.3)", "0 8px 30px rgba(245, 158, 11, 0.5)", "0 4px 20px rgba(245, 158, 11, 0.3)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    K
                  </motion.span>
                  KITCHOR
                </h1>
              </motion.div>

              <p className="text-gray-400 leading-relaxed">
                Transforming spaces with innovative kitchen designs. Your dream kitchen awaits.
              </p>

             
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <span className="text-white font-medium group-hover:text-amber-300 transition-colors">+1 875 333 489</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <span className="text-gray-400 group-hover:text-amber-300 transition-colors">hello@kitchor.com</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <span className="text-gray-400 group-hover:text-amber-300 transition-colors">123 Design Street, NY</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <div className="text-gray-400 group-hover:text-amber-300 transition-colors">
                    <div className="font-medium text-white">Mon-Fri: 9AM-6PM</div>
                    <div className="text-sm">Round-the-clock support</div>
                  </div>
                </motion.div>
              </div>

         
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebookF, href: "#", color: "hover:text-blue-400" },
                  { Icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
                  { Icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                  { Icon: FaLinkedinIn, href: "#", color: "hover:text-blue-500" },
                  { Icon: FaPinterest, href: "#", color: "hover:text-red-400" },
                  { Icon: FaYoutube, href: "#", color: "hover:text-red-500" }
                ].map(({ Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:bg-white/20`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="w-2 h-6 bg-amber-500 rounded-full mr-3"></span>
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Kitchen Design",
                  "Custom Cabinets",
                  "Interior Consultation",
                  "Space Planning",
                  "Project Management",
                  "Installation Services"
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer group flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="w-2 h-6 bg-amber-500 rounded-full mr-3"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/" },
                  { name: "Projects", href: "/projects" },
                  { name: "Blog", href: "/blogs" },
                  { name: "Contact", href: "/contact" },
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors group flex items-center"
                    >
                      <motion.span
                        className="w-1 h-1 bg-amber-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"
                        whileHover={{ x: 5 }}
                      ></motion.span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

      
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="w-2 h-6 bg-amber-500 rounded-full mr-3"></span>
                Recent Work
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["/interior.jpg", "/about.jpg", "/hero.jpg", "/kit.jpg"].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group overflow-hidden rounded-lg aspect-square"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        className="text-white text-center"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-sm font-bold">+</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {new Date().getFullYear()} Kitchor. Made with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>All rights reserved.</span>
              </div>

              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600/20 text-amber-400 rounded-lg hover:bg-amber-600/30 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">Back to Top</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUp className="w-4 h-4 group-hover:text-white transition-colors" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
