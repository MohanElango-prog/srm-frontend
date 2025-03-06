import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'Tech House', imageName: 'tech-house' },
    { name: 'Real Estate 1', imageName: 'real-estate-1' },
    { name: 'Real Estate 2', imageName: 'real-estate-2' },
    { name: 'Real Estate 3', imageName: 'real-estate-3' },
    { name: 'Tree House', imageName: 'tree-house' }
  ];

  return (
    <div className="bg-black py-16 px-4">
        <h2 className="text-white text-center text-2xl mb-6">
           OUR PARTNERS
        </h2>
      <div className="container mx-auto">
        <h2 className="text-white text-center text-4xl font-bold mb-12">
          Meet Our partners
        </h2>
        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={`/api/placeholder/200/100?text=${partner.name}`} 
                alt={partner.name} 
                className="max-h-16 max-w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;