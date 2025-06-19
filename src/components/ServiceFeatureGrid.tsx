
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface ServiceFeatureGridProps {
  features: ServiceFeature[];
  title: string;
  subtitle: string;
}

const ServiceFeatureGrid: React.FC<ServiceFeatureGridProps> = ({ features, title, subtitle }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-gradient">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="premium-card p-8 group glow-blue">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureGrid;
