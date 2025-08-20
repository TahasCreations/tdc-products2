'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function ProductsPage() {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Naruto Uzumaki Figürü',
      price: 299,
      originalPrice: 349,
      category: 'Anime',
      image: 'https://readdy.ai/api/search-image?query=Detailed%20Naruto%20Uzumaki%203D%20printed%20figurine%20with%20orange%20jumpsuit%20and%20ninja%20headband%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background%2C%20professional%20product%20photography&width=400&height=400&seq=naruto1&orientation=squarish',
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: '2',
      name: 'Goku Super Saiyan Figürü',
      price: 399,
      originalPrice: 449,
      category: 'Anime',
      image: 'https://readdy.ai/api/search-image?query=Goku%20Super%20Saiyan%203D%20printed%20figurine%20with%20golden%20hair%20and%20muscular%20build%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background&width=400&height=400&seq=goku1&orientation=squarish',
      rating: 4.9,
      reviews: 89,
      inStock: true
    },
    {
      id: '3',
      name: 'Mario Bros Figürü',
      price: 199,
      category: 'Gaming',
      image: 'https://readdy.ai/api/search-image?query=Mario%20Bros%203D%20printed%20figurine%20with%20red%20cap%20and%20blue%20overalls%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background&width=400&height=400&seq=mario1&orientation=squarish',
      rating: 4.7,
      reviews: 156,
      inStock: true
    },
    {
      id: '4',
      name: 'Iron Man Mark 85 Figürü',
      price: 599,
      originalPrice: 699,
      category: 'Film',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Mark%2085%203D%20printed%20figurine%20with%20red%20and%20gold%20armor%2C%20high%20quality%20collectible%20figure%20on%20clean%20white%20background&width=400&height=400&seq=ironman1&orientation=squarish',
      rating: 4.9,
      reviews: 203,
      inStock: false
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = products;

    // Kategori filtresi
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Fiyat filtresi
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Arama filtresi
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sıralama
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, searchTerm, products]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              3D Figür Koleksiyonu
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                />
                <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-product-shop>
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Stokta Yok
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    İndirim
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`ri-star-fill text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₺{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₺{product.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      product.inStock 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white hover:scale-105' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}