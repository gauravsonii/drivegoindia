"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl glass scrollbar-hide"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-black text-white mb-2 font-heading tracking-tight italic uppercase">
                                Terms & <span className="text-orange-500">Conditions</span>
                            </h2>
                            <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full" />
                        </div>

                        <div className="space-y-8 text-gray-300 font-body">
                            {/* Header Section */}
                            <div className="text-center">
                                <p className="text-xl font-bold text-white mb-1">🏍️🚗✨ PATEL TOUR & TRAVELS</p>
                                <p className="text-orange-500 font-medium">Premium Bike & Car Rental Service</p>
                            </div>

                            {/* Car Price List */}
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-xl">💰</span> CAR RENT PRICE LIST
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🚗 Swift / Baleno</span>
                                        <span className="font-bold text-orange-500 text-right">₹2500 / Day</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🚙 Dzire</span>
                                        <span className="font-bold text-orange-500 text-right">₹2800 / Day</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🚙 Honda City</span>
                                        <span className="font-bold text-orange-500 text-right">₹3500 / Day</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🚙 Scorpio</span>
                                        <span className="font-bold text-orange-500 text-right">₹4500 / Day</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🚙 Fortuner</span>
                                        <span className="font-bold text-orange-500 text-right">₹7000 / Day</span>
                                    </div>
                                </div>
                                <ul className="mt-4 space-y-1 text-sm text-gray-400">
                                    <li>✔ Self Drive Available</li>
                                    <li>✔ Driver Available (Extra Charges)</li>
                                    <li>✔ Local & Outstation Trip</li>
                                </ul>
                            </div>

                            {/* Bike Price List */}
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-xl">💰</span> BIKE RENT PRICE LIST
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🏍 Royal Enfield Bullet</span>
                                        <span className="font-bold text-orange-500 text-right">₹1200 / Day</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🏍 Sports Bike</span>
                                        <span className="font-bold text-orange-500 text-right">₹1500 / Day</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                                        <span>🛵 Scooty</span>
                                        <span className="font-bold text-orange-500 text-right">₹600 / Day</span>
                                    </div>
                                </div>
                                <ul className="mt-4 space-y-1 text-sm text-gray-400">
                                    <li>✔ Helmet Available</li>
                                    <li>✔ Good Condition Vehicles</li>
                                </ul>
                            </div>

                            {/* Required Documents */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-3">📋 REQUIRED DOCUMENTS</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">✔</span>
                                        <span>Valid Driving License</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">✔</span>
                                        <span>Aadhar / ID Proof</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">✔</span>
                                        <span>Refundable Security Deposit</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Why Choose Us */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-3">⭐ WHY CHOOSE US</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✅</span> Best Price Guarantee
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✅</span> Clean & Well Maintained
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✅</span> Instant Booking
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✅</span> Easy Process
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✅</span> 24×7 Support
                                    </div>
                                </div>
                            </div>

                            {/* Footer Section */}
                            <div className="text-center pt-8 border-t border-white/5">
                                <p className="text-white font-bold mb-1">📞 Booking Open Now</p>
                                <p className="text-lg font-black text-orange-500 font-heading">Patel Tour & Travels</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Safe Ride • Trusted Service • Best Price</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TermsModal;
