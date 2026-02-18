"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-500/30 group-hover:scale-105 transition-transform relative">
                <Image src="/assets/favicon.ico" alt="Logo" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                DriveGo<span className="text-orange-500">India</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium vehicle rental service across India. Experience luxury, comfort, and reliability with DriveGoIndia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-gray-500 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-500 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-500 hover:text-white transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Fleet</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#cars" className="text-gray-500 hover:text-white transition-colors text-sm font-body font-medium">Cars</Link>
              </li>
              <li>
                <Link href="#bikes" className="text-gray-500 hover:text-white transition-colors text-sm font-body font-medium">Bikes</Link>
              </li>
              <li>
                <Link href="#scooters" className="text-gray-500 hover:text-white transition-colors text-sm font-body font-medium">Activas</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm font-body">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                gwaliorrentalcar@gmail.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-body">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.587 4.587l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 79996 63197
              </li>
              <li>
                <a
                  href="https://www.instagram.com/car_rental_service_gwalior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm font-body"
                >
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold font-body">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold font-body">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
