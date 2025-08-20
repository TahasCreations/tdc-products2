'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20white%20background%20with%20elegant%20silhouettes%20of%20anime%20and%20gaming%20figurines%20scattered%20around%20the%20edges%2C%20minimalist%20design%20with%20subtle%20shadows%2C%20professional%20studio%20lighting%2C%20high-end%20product%20photography%20style&width=1920&height=1080&seq=hero-white&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hayalinizdeki
              <span className="block text-orange-500 font-['Pacifico'] animate-pulse">3D Figürler</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Anime, oyun ve film karakterlerinizi yüksek kaliteli 3D baskı teknolojisi ile gerçeğe dönüştürüyoruz. Her detay özenle işlenmiş, kusursuz kalite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center whitespace-nowrap transform hover:-translate-y-1">
                Ürünleri Keşfet
              </Link>
              <Link href="/about" className="bg-white hover:bg-gray-50 text-orange-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 border-orange-500 hover:scale-105 text-center whitespace-nowrap transform hover:-translate-y-1">
                Hikayemizi Öğren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}