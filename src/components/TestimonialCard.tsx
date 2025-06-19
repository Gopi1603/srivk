
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  image,
  rating
}) => {
  return (
    <div className="premium-card p-8 relative overflow-hidden group">
      {/* Background Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="h-20 w-20 text-blue-600" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Image and Basic Info */}
        <div className="flex items-center mb-6">
          <div className="relative">
            <img 
              src={image} 
              alt={name}
              className="w-20 h-20 rounded-2xl object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-xl text-gray-900">{name}</h4>
            <p className="text-blue-600 font-semibold">{role}</p>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg text-gray-700 leading-relaxed italic">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
