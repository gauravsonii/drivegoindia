"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl`}
    >
      <div
        className={`glass rounded-full px-6 py-2 flex items-center justify-between transition-all duration-300 nav-glow ${scrolled ? "bg-black/90 shadow-[0_0_30px_rgba(249,115,22,0.2)] border-orange-500/50" : "bg-black/60 border-white/10"
          } border`}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50 group-hover:scale-105 transition-transform relative">
            <Image
              src="/assets/favicon.ico"
              alt="DriveGoIndia Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white font-heading">
            DriveGo<span className="text-orange-500">India</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-orange-400 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="tel:+917999663197"
            className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 glass-premium rounded-3xl p-8 bg-black/95 shadow-2xl border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-gray-300 hover:text-orange-400 transition-colors font-heading"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+917999663197"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-4 bg-orange-600 text-white rounded-2xl text-center font-bold text-xl"
              >
                Call to Book
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
