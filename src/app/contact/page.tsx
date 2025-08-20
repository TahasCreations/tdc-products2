'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              İletişime Geçin
            </h1>
          </div>
        </div>
      </section>

      {/* İletişim Formu ve Bilgiler */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mesaj Gönderin</h2>
            
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Form alanları */}
            </form>
          </div>

          {/* İletişim Bilgileri ve Harita */}
          
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}