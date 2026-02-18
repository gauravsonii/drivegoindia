"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Book Car",
        description: "Premium sedans and SUVs for luxury and comfort.",
        icon: (
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m0 0l-4-4-4 4m8 10h-8m0 0l4 4 4-4M5 13h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
            </svg>
        ),
        link: "#cars",
        color: "from-orange-600/20 via-black to-green-600/20",
        border: "border-orange-500/30"
    },
    {
        title: "Book Bike",
        description: "Sport bikes and cruisers for the thrill-seekers.",
        icon: (
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        link: "#bikes",
        color: "from-orange-600/20 via-black to-green-600/20",
        border: "border-orange-500/30"
    },
    {
        title: "Book Activa",
        description: "Efficient and stylish scooters for city commutes.",
        icon: (
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        link: "#scooters",
        color: "from-orange-600/20 via-black to-green-600/20",
        border: "border-orange-500/30"
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black/40">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-4 font-heading tracking-tighter">Choose Your Ride</h2>
                    <p className="text-gray-400 max-w-xl mx-auto font-body text-lg italic">
                        Select a category to explore our wide range of meticulously maintained vehicles.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.a
                            key={service.title}
                            href={service.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-3xl border ${service.border} bg-gradient-to-br ${service.color} glass block text-left group transition-all`}
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-3 font-heading">{service.title}</h3>
                            <p className="text-gray-400 mb-6 font-light">
                                {service.description}
                            </p>
                            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                                View Fleet
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
