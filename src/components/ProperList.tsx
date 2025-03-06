import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Property {
  id: number;
  type: string;
  location: string;
  price: number;
  image: string;
}

const PropertyListings: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties: Property[] = [
    {
      id: 1,
      type: 'Luxury Apartment',
      location: 'Paradise, Nevada, U.S.',
      price: 520000,
      image: '/lovable-uploads/og-image.png'
    },
    {
      id: 2,
      type: 'Luxury Villa',
      location: 'Paradise, Nevada, U.S.',
      price: 420000,
      image: '/lovable-uploads/og-image.png'
    },
    {
      id: 3,
      type: 'Interior Apartment',
      location: 'Paradise, Nevada, U.S.',
      price: 620000,
      image: '/lovable-uploads/og-image.png'
    },
    {
      id: 4,
      type: 'Interior',
      location: 'Paradise, Nevada, U.S.',
      price: 320000,
      image: '/lovable-uploads/og-image.png'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => prev < properties.length - 3 ? prev + 1 : prev);
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-center">
      <div className="px-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-6xl font-bold">
            Get Your Desired <span className="text-yellow-500">Property</span> With Us
          </h1>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrevSlide}
              className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={32} color="black" />
            </button>
            <button 
              onClick={handleNextSlide}
              className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 transition-colors"
              disabled={currentSlide >= properties.length - 3}
            >
              <ChevronRight size={32} color="black" />
            </button>
          </div>
        </div>
        
        {/* Property Cards */}
        <div className="grid grid-cols-3 gap-8">
          {properties.slice(currentSlide, currentSlide + 3).map((property) => (
            <div key={property.id} className="rounded-lg overflow-hidden">
              <img 
                src={property.image} 
                alt={property.type} 
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{property.type}</h2>
                <p className="text-gray-400 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">
                    ${property.price.toLocaleString()}
                  </span>
                  <button className="text-yellow-500 hover:underline">
                    Detail →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;