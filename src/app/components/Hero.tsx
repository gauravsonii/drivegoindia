"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.3] scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')",
                        filter: "brightness(0.2)"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                        Luxury Rental Experience
                    </span>
                    <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-tight font-heading">
                        DriveGo<span className="text-orange-600">India</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light font-body italic">
                        Premium Cars, Bikes & Activas for your next journey. Experience the freedom of the road with our elite fleet.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/20 w-full sm:w-auto"
                        >
                            Check Availability
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass text-white rounded-full font-bold text-lg transition-all w-full sm:w-auto"
                        >
                            Learn More
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;