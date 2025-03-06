import React from 'react';

interface GalleryProps {
  // Props can be extended as needed
}

const Gallery: React.FC<GalleryProps> = () => {
  // Sample image data - in a real application, this would come from props or API
  const galleryImages = [
    '/lovable-uploads/og-image.png', // Top small horizontal image
    '/lovable-uploads/og-image.png', // Modern cabin with large windows
    '/lovable-uploads/og-image.png', // Walk-in closet/wardrobe
    '/lovable-uploads/og-image.png', // Night view of house with large windows
    '/lovable-uploads/og-image.png',
    '/lovable-uploads/og-image.png' // Minimalist interior with glass wall
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row p-6">
      {/* Left section - Text content */}
      <div className="w-full md:w-2/5 flex flex-col justify-center pr-8 mb-10 md:mb-0">
        <h1 className="text-yellow-400 text-6xl font-bold mb-10">Gallery</h1>
        
        <p className="mb-12 text-sm leading-relaxed">
          WE ARE CONSTANTLY GROWING, LEARNING, AND IMPROVING, AND OUR PARTNERS ARE STEADILY INCREASING. 286 PROJECTS IS A SIZABLE NUMBER, BUT WE ALWAYS STRIVE TO BE BETTER. MORE RELEVANT, MORE DETERMINED, AND MORE SUCCESSFUL THAN YESTERDAY. WE ARE NOT GOING TO STOP.
        </p>
        
        <div className="flex items-center">
          <span className="mr-4 uppercase text-sm font-semibold tracking-wider">Explore our work</span>
          <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-black transform rotate-45">→</span>
          </button>
        </div>
      </div>
      
      {/* Right section - Gallery grid with scrollable images */}
      <div className="w-full md:w-3/5 h-screen overflow-y-auto grid grid-cols-2 gap-4 pr-2">
        {/* First column */}
        <div className="flex flex-col gap-4">
          <img 
            src={galleryImages[0]} 
            alt="Interior design" 
            className="w-full h-32 object-cover" 
          />
          <img 
            src={galleryImages[1]} 
            alt="Modern cabin" 
            className="w-full h-80 object-cover" 
          />
        </div>
        
        {/* Second column */}
        <div className="flex flex-col gap-4">
          <img 
            src={galleryImages[2]} 
            alt="Walk-in closet" 
            className="w-full h-64 object-cover" 
          />
          <img 
            src={galleryImages[3]} 
            alt="Night view house" 
            className="w-full h-80 object-cover" 
          />
          <img 
            src={galleryImages[4]} 
            alt="Minimalist interior" 
            className="w-full h-64 object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;