'use client';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date?: string;
  image?: string;
}

export default function BlogCard({ id, title, excerpt, category, date, image }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 bg-gray-200">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = '/vercel.svg'; }}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-orange-600 font-medium">{category}</span>
          {date && <span className="text-sm text-gray-500">{date}</span>}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
        <button className="mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
          Devamını Oku →
        </button>
      </div>
    </div>
  );
}
