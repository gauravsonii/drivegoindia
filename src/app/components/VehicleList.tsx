"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Vehicle {
    id: number;
    name: string;
    type: string;
    image: string;
    details: string;
    price: string;
    contact: string;
}

interface VehicleListProps {
    id: string;
    title: string;
    vehicles: Vehicle[];
}

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden group border border-white/5 hover:border-orange-500/30 transition-all card-gradient"
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 rounded-full text-xs font-bold text-white shadow-lg">
                    {vehicle.price}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-black mb-2 text-white font-heading tracking-tight">{vehicle.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {vehicle.details}
                </p>

                <div className="flex flex-col gap-3">
                    <a
                        href={`tel:${vehicle.contact}`}
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold transition-all border border-white/10"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.587 4.587l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call to Book
                    </a>
                    <a
                        href={`https://wa.me/${vehicle.contact.replace(/\s+/g, '')}`}
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-br from-black via-black/80 to-green-600/40 hover:to-green-600/60 text-green-400 rounded-2xl font-semibold transition-all border border-green-500/20"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const VehicleList = ({ id, title, vehicles }: VehicleListProps) => {
    return (
        <section id={id} className="py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-2 text-white font-heading tracking-tighter uppercase italic">
                            {title}
                        </h2>
                        <div className="h-1.5 w-24 bg-orange-600 rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {vehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VehicleList;
