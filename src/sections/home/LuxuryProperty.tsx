import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LuxuryPropertyGallery = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 z-0" 
        style={{
          backgroundImage: 'url(/api/placeholder/800/800)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-light text-amber-500 tracking-wider">LOREM IPSUM</h1>
          <div className="w-48 h-px bg-amber-500 mx-auto mt-2"></div>
        </header>
        
        {/* Top gallery section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {/* Left column - Black and white stacked images */}
          <div className="w-full sm:w-1/2 md:w-1/5 space-y-4">
            <img src="/api/placeholder/240/320" alt="Modern property exterior" className="w-full h-60 object-cover grayscale" />
            <img src="/api/placeholder/240/320" alt="Villa with pool" className="w-full h-60 object-cover grayscale" />
          </div>
          
          {/* Middle-left column - Black and white stacked images */}
          <div className="w-full sm:w-1/2 md:w-1/5 space-y-4">
            <img src="/api/placeholder/240/320" alt="Luxury villa night view" className="w-full h-60 object-cover grayscale" />
            <img src="/api/placeholder/240/320" alt="Courtyard with pool" className="w-full h-60 object-cover grayscale" />
          </div>
          
          {/* Middle column - Large color image */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <img src="/api/placeholder/300/520" alt="Luxury villa with blue pool" className="w-full h-full object-cover" />
          </div>
          
          {/* Middle-right column - White interior */}
          <div className="w-full sm:w-1/2 md:w-1/5">
            <img src="/api/placeholder/240/520" alt="Modern white interior staircase" className="w-full h-full object-cover" />
          </div>
          
          {/* Right column - Black and white exterior */}
          <div className="w-full sm:w-1/2 md:w-1/5">
            <img src="/api/placeholder/240/520" alt="House exterior view" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        
        {/* Gold vertical line separator */}
        <div className="relative">
          <div className="absolute left-24 w-px h-full bg-amber-500"></div>
          
          {/* Bottom section title */}
          <div className="pl-8 mb-8">
            <h2 className="text-xl font-light text-amber-500 tracking-wider">LOREM IPSUM</h2>
          </div>
          
          {/* Bottom gallery grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 pl-16">
            {/* Bottom gallery images with different sizes and positions */}
            <div className="w-full sm:w-1/3 md:w-1/4">
              <img src="/api/placeholder/300/200" alt="Modern apartment building" className="w-full h-40 object-cover" />
            </div>
            
            <div className="w-full sm:w-1/3 md:w-1/4 mt-12">
              <img src="/api/placeholder/300/200" alt="Interior design" className="w-full h-40 object-cover" />
            </div>
            
            <div className="w-full sm:w-1/3 md:w-1/4 mt-6">
              <img src="/api/placeholder/300/260" alt="Kitchen interior" className="w-full h-60 object-cover" />
            </div>
            
            <div className="w-full sm:w-1/3 md:w-1/4 -mt-12">
              <img src="/api/placeholder/300/260" alt="Modern house exterior" className="w-full h-60 object-cover" />
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 mb-8">
            <button className="w-10 h-10 border border-amber-500 flex items-center justify-center">
              <ChevronLeft size={20} className="text-amber-500" />
            </button>
            <button className="w-10 h-10 border border-amber-500 flex items-center justify-center">
              <ChevronRight size={20} className="text-amber-500" />
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="mb-8">
            <button className="w-full py-3 bg-amber-500 text-black text-center hover:bg-amber-600 transition-colors">
              Want to be in this luxury environment? Enquiry Now!
            </button>
          </div>
          
          {/* Bottom border */}
          <div className="w-full h-px bg-amber-500/50"></div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryPropertyGallery;