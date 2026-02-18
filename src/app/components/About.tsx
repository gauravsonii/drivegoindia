"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 font-body">
                            Our Story
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading tracking-tighter">
                            Redefining Vehicle <br />
                            Rental in <span className="text-gradient">India</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            DriveGoIndia was founded on a simple principle: providing high-quality vehicles with a seamless booking experience. Whether you&apos;re a tourist exploring new cities or a local needing a reliable ride, we&apos;ve got you covered.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-4xl font-black text-white mb-2 font-heading tracking-tighter">500+</h4>
                                <p className="text-gray-500 text-sm font-body">Vehicles in Fleet</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-white mb-2 font-heading tracking-tighter">24/7</h4>
                                <p className="text-gray-500 text-sm font-body">Roadside Support</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass p-2 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2070"
                                alt="Luxury Car"
                                fill
                                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Abstract decoration */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600/20 blur-3xl rounded-full" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/20 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
