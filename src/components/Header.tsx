'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-orange-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-['Pacifico'] text-orange-600 hover:text-orange-700 transition-colors duration-300">TDC Products</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Ürünler
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Hakkımızda
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              İletişim
            </Link>
            {/* TDC BİST Butonu - Sağda, mavi arka plan, parlama efekti */}
            <Link href="/tdc-bist" className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden group whitespace-nowrap">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <span className="font-black text-black">TDC BİST</span>
                <i className="ri-line-chart-line text-black"></i>
              </span>
              {/* Parlama efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Link>
          </nav>

          {/* Diğer butonlar */}
          
        </div>
      </div>
    </header>
  );
}
