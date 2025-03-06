import React from 'react';

interface RoadmapItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isImageLeft: boolean;
}

const RealEstateRoadmap: React.FC = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      title: "Diverse Selection",
      description: "Our extensive rental property portfolio caters to a variety of preferences. From modern apartments to luxurious villas and versatile commercial spaces, we offer a diverse selection of rental properties to suit your lifestyle and needs.",
      imageSrc: "/icons/og-image.png", // Replace with actual image path
      imageAlt: "Luxury property with canal view",
      isImageLeft: true
    },
    {
      title: "Personalized Approach",
      description: "Your rental journey is unique, and we treat it as such. Our team takes the time to understand your requirements, preferences, and budget, ensuring that we present you with properties that align with your vision.",
      imageSrc: "/icons/og-image.png", // Replace with actual image path
      imageAlt: "Modern home exterior at sunset",
      isImageLeft: false
    },
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-90 p-8 text-white relative">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-gray-700 to-gray-900" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #555 10px, #555 11px)' }}>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-yellow-400">SRM International Real Estate LLC</span> for Your Rental Journey?
          </h1>
        </div>

        {/* Roadmap items */}
        <div className="space-y-24 relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-yellow-400"></div>
          
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Center dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
              
              {/* Left side */}
              <div className={`${item.isImageLeft ? 'order-1' : 'order-2 md:order-1'}`}>
                {item.isImageLeft ? (
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={item.imageSrc} 
                      alt={item.imageAlt}
                      className="w-full h-64 md:h-80 object-cover" 
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-end text-right">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">{item.title}</h2>
                    <p className="text-gray-200 leading-relaxed">{item.description}</p>
                  </div>
                )}
              </div>
              
              {/* Right side */}
              <div className={`${item.isImageLeft ? 'order-2' : 'order-1 md:order-2'}`}>
                {item.isImageLeft ? (
                  <div className="flex flex-col items-start text-left">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">{item.title}</h2>
                    <p className="text-gray-200 leading-relaxed">{item.description}</p>
                  </div>
                ) : (
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={item.imageSrc} 
                      alt={item.imageAlt}
                      className="w-full h-64 md:h-80 object-cover" 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateRoadmap;