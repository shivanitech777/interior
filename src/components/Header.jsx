"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menus = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Blog", href: "/blogs" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full flex items-center justify-between border-b py-3 px-6 relative bg-white transition-all duration-300 ${scrolled ? 'shadow-lg backdrop-blur-md bg-white/95' : 'shadow-sm'
          } fixed top-0 left-0 right-0 z-40`}
      >
        <Link href="/" >
          {/* Logo - Left side */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              type: "tween",
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex items-center"
          >
            <Image
              src="/kit.jpg"
              width={120}
              height={70}
              alt="logo"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation - Center */}
        <motion.ul
          className="hidden md:flex gap-12 uppercase text-[15px] font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {menus.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{
                scale: 1.2,
                y: -3,
                color: "#D4AF37",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative group cursor-pointer"
            >
              <Link href={item.href} className="text-gray-800 hover:text-yellow-600">{item.name}</Link>
              <motion.span
                className="absolute left-0 bottom-[-5px] h-[2px] bg-yellow-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button - Right side */}
        <motion.div
          whileTap={{ scale: 0.8, rotate: 90 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="md:hidden"
          onClick={() => setShow(!show)}
        >
          <RiMenu2Fill fontSize={32} className="cursor-pointer hover:text-yellow-600 text-black" />
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {show && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setShow(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-2xl flex flex-col items-center justify-center gap-8 z-50"
            >
              {menus.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="text-xl font-semibold text-gray-800 hover:text-yellow-600"
                    onClick={() => setShow(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


