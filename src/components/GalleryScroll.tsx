import React from 'react';

// Import your actual images
const images = [
"/lovable-uploads/og-image.png",
"/lovable-uploads/og-image.png",
"/lovable-uploads/og-image.png",
"/lovable-uploads/og-image.png"
];

const GalleryScroll: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Gallery Title */}
      <h1 className="text-4xl text-yellow-500 text-center py-6 font-bold">
        Our Gallery
      </h1>
      
      {/* Horizontal Scrollable Gallery */}
      <div className="flex overflow-x-auto space-x-4 px-4 pb-6 scrollbar-hide">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] 
                        bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryScroll;