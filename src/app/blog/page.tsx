'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogCard from './BlogCard';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const blogPosts = [
    {
      id: '1',
      title: '3D Baskı Teknolojisinde Son Gelişmeler',
      excerpt: '2024 yılında 3D baskı dünyasında yaşanan devrim niteliğindeki gelişmeler...',
      category: '3D Baskı',
      // Diğer özellikler...
    },
    // Diğer blog yazıları...
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              3D Baskı Dünyası
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Grid ve Newsletter */}
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}