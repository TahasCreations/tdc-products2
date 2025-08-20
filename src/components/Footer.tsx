'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 to-white border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-['Pacifico'] text-orange-600 group-hover:text-orange-700 transition-colors duration-300">TDC Products</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Yüksek kaliteli 3D baskı ürünleri ile hayallerinizi gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex space-x-4">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-300 hover:scale-110">
                <i className="ri-facebook-fill text-orange-600"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-300 hover:scale-110">
                <i className="ri-twitter-fill text-orange-600"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-300 hover:scale-110">
                <i className="ri-instagram-fill text-orange-600"></i>
              </button>
            </div>
          </div>

          {/* Diğer footer bölümleri */}
          
        </div>

        <div className="border-t border-orange-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 TDC Products. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
