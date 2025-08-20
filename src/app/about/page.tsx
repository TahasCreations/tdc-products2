'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%203D%20printing%20workshop%20with%20advanced%20machinery%2C%20professional%20lighting%2C%20clean%20white%20environment%2C%20high-tech%20manufacturing%20facility%20with%20detailed%20figurines%20being%20created%2C%20industrial%20design%20aesthetic&width=1920&height=800&seq=about-hero&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-white/70 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hikayemiz
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              2020'de başladığımız yolculukta, 3D baskı teknolojisini sanatla buluşturarak hayran olduğunuz karakterleri gerçek hayata taşıyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Diğer bölümler - Hikaye, istatistikler, ekip, değerler */}
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}