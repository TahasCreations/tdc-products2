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

      {/* Popular Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popüler Kategoriler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En sevilen karakterlerin yüksek kaliteli 3D baskı versiyonlarını keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Anime Figürleri */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-gamepad-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anime Figürleri</h3>
              <p className="text-gray-600 mb-6">Favori anime karakterlerinizin detaylı 3D baskı versiyonları</p>
              <Link href="/products" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Keşfet
              </Link>
            </div>

            {/* Oyun Karakterleri */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-controller-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oyun Karakterleri</h3>
              <p className="text-gray-600 mb-6">Popüler oyunların ikonik karakterlerinin koleksiyonu</p>
              <Link href="/products" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Keşfet
              </Link>
            </div>

            {/* Film Karakterleri */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-movie-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Film Karakterleri</h3>
              <p className="text-gray-600 mb-6">Unutulmaz film karakterlerinin özel koleksiyonu</p>
              <Link href="/products" className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En popüler ve yeni eklenen ürünlerimizi keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Naruto Uzumaki Figürü */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Detailed%20Naruto%20Uzumaki%203D%20printed%20figurine%20with%20orange%20jumpsuit%20and%20ninja%20headband%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background%2C%20professional%20product%20photography&width=400&height=400&seq=naruto1&orientation=squarish" 
                  alt="Naruto Uzumaki Figürü"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Anime
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Naruto Uzumaki Figürü</h3>
                <p className="text-2xl font-bold text-gray-900">₺299</p>
              </div>
            </div>

            {/* Link Zelda Figürü */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Link%20from%20Zelda%203D%20printed%20figurine%20with%20green%20tunic%20and%20sword%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background&width=400&height=400&seq=link1&orientation=squarish" 
                  alt="Link Zelda Figürü"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Oyun
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Link Zelda Figürü</h3>
                <p className="text-2xl font-bold text-gray-900">₺349</p>
              </div>
            </div>

            {/* Spider-Man Figürü */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Spider-Man%203D%20printed%20figurine%20with%20red%20and%20blue%20suit%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background&width=400&height=400&seq=spiderman1&orientation=squarish" 
                  alt="Spider-Man Figürü"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Film
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Spider-Man Figürü</h3>
                <p className="text-2xl font-bold text-gray-900">₺279</p>
              </div>
            </div>

            {/* Goku Super Saiyan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Goku%20Super%20Saiyan%203D%20printed%20figurine%20with%20golden%20hair%20and%20muscular%20build%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background&width=400&height=400&seq=goku1&orientation=squarish" 
                  alt="Goku Super Saiyan"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Anime
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Goku Super Saiyan</h3>
                <p className="text-2xl font-bold text-gray-900">₺399</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Yüksek Kalite */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Yüksek Kalite</h3>
              <p className="text-gray-600">En son 3D baskı teknolojisi ile mükemmel detaylar</p>
            </div>

            {/* Hızlı Kargo */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hızlı Kargo</h3>
              <p className="text-gray-600">Türkiye geneline ücretsiz ve hızlı teslimat</p>
            </div>

            {/* 7/24 Destek */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">7/24 Destek</h3>
              <p className="text-gray-600">Her zaman yanınızdayız, sorularınız için bize yazın</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}