"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center border-white/10 card-gradient">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white font-heading">
                            Ready to <span className="text-orange-500">Ride?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Contact DriveGoIndia to check availability and reserve your vehicle today. Our team is available 24/7 to assist you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="tel:+917999663197"
                                className="group flex items-center justify-center gap-4 py-5 px-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-xl transition-all shadow-xl shadow-orange-500/20 w-full sm:w-auto"
                            >
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.587 4.587l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                Call Now
                            </a>

                            <a
                                href="https://wa.me/917999663197"
                                className="group flex items-center justify-center gap-4 py-5 px-10 bg-gradient-to-br from-black via-black/80 to-green-600/40 hover:to-green-600/60 text-white rounded-full font-bold text-xl transition-all w-full sm:w-auto font-body border border-green-500/30"
                            >
                                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                WhatsApp
                            </a>
                        </div>

                        <p className="mt-12 text-gray-500 font-medium">
                            Location: Gwalior, MP, India
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
