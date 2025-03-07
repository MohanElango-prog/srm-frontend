import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import image from '../icons/modern.jpg';
import image2 from '../icons/og-image.png';

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Property Rentals',
      image: image
    },
    {
      id: 2,
      title: 'Adventure Tours',
      image: image2
    },
    {
      id: 3,
      title: 'Balloon Rides',
      image: image
    },
    {
      id: 4,
      title: 'Desert Safaris',
      image: image2
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    setExpandedIndex(null);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    setExpandedIndex(null);
  };

  const handleImageClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // Calculate visible items based on active index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % services.length;
      items.push({ ...services[index], index });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="bg-black flex items-center justify-center ">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-yellow-400">Services</span>
          </h1>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition-all"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-yellow-500 rounded-full p-2 hover:bg-yellow-600 transition-all"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>
        
        <div className="flex gap-4 transition-all duration-500">
          {visibleItems.map((item, idx) => (
            <div 
              key={item.id}
              className={`relative transition-all duration-500 overflow-hidden rounded-lg ${
                expandedIndex === item.index ? 'w-full' : 'w-1/3'
              }`}
            >
              <div 
                className="relative h-64 cursor-pointer group"
                onClick={() => handleImageClick(item.index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {idx === 0 && (
                  <>
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold text-yellow-400">{item.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 rounded-sm p-1">
                        <ArrowUpRight className="text-black" size={20} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;