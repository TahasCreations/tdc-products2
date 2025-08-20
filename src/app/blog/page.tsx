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
      excerpt: '2024 yılında 3D baskı dünyasında yaşanan devrim niteliğindeki gelişmeler ve bu teknolojinin figür üretimindeki etkileri hakkında detaylı bir analiz.',
      category: '3D Baskı',
      date: '15 Mart 2024',
      image: 'https://readdy.ai/api/search-image?query=Modern%203D%20printer%20with%20detailed%20figurine%20being%20printed%2C%20high-tech%20manufacturing%20process%2C%20professional%20studio%20lighting&width=400&height=300&seq=blog1&orientation=landscape'
    },
    {
      id: '2',
      title: 'Anime Figürlerinin Popülerliği',
      excerpt: 'Anime figürlerinin neden bu kadar popüler olduğu ve koleksiyonerlerin en çok tercih ettiği karakterler hakkında ilginç istatistikler.',
      category: 'Anime',
      date: '12 Mart 2024',
      image: 'https://readdy.ai/api/search-image?query=Collection%20of%20anime%20figurines%20displayed%20on%20shelf%2C%20vibrant%20colors%2C%20professional%20photography&width=400&height=300&seq=blog2&orientation=landscape'
    },
    {
      id: '3',
      title: 'Gaming Figürlerinin Tarihi',
      excerpt: 'Video oyun karakterlerinin figür olarak üretilmesinin tarihçesi ve günümüzdeki popülerlik seviyesi.',
      category: 'Gaming',
      date: '10 Mart 2024',
      image: 'https://readdy.ai/api/search-image?query=Gaming%20figurines%20collection%20with%20classic%20characters%2C%20retro%20gaming%20aesthetic&width=400&height=300&seq=blog3&orientation=landscape'
    },
    {
      id: '4',
      title: 'Figür Bakımı ve Koruma',
      excerpt: '3D baskı figürlerinizin uzun yıllar boyunca güzel kalması için uygulamanız gereken bakım teknikleri.',
      category: 'Bakım',
      date: '8 Mart 2024',
      image: 'https://readdy.ai/api/search-image?query=Cleaning%20and%20maintaining%203D%20printed%20figurines%2C%20care%20tools%20and%20techniques&width=400&height=300&seq=blog4&orientation=landscape'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3D baskı teknolojisi, figür koleksiyonculuğu ve daha fazlası hakkında güncel bilgiler
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setSelectedCategory('3D Baskı')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === '3D Baskı'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              3D Baskı
            </button>
            <button
              onClick={() => setSelectedCategory('Anime')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'Anime'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Anime
            </button>
            <button
              onClick={() => setSelectedCategory('Gaming')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'Gaming'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Gaming
            </button>
            <button
              onClick={() => setSelectedCategory('Bakım')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'Bakım'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Bakım
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Güncel Kalın
          </h2>
          <p className="text-gray-600 mb-8">
            Yeni ürünler ve blog yazılarından haberdar olmak için bültenimize abone olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}