import React, { useState } from 'react';

const RealEstateHero = () => {
  const [buyLocation, setBuyLocation] = useState('');
  const [sellLocation, setSellLocation] = useState('');
  const [rentLocation, setRentLocation] = useState('');

  return (
    <div className="relative w-full min-h-screen">
      {/* Dark overlay with background image */}
      <div 
        className="absolute inset-0 bg-black/80"
        style={{
          backgroundImage: "url('/api/placeholder/1200/800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-16 py-8">
        {/* Hero text */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl md:text-[100px] font-bold leading-tight">
            <span className="text-yellow-400 block">WE HELP TO</span>
            <span className="text-white block">ACHIEVE YOUR REAL</span>
            <span className="text-yellow-400 block">ESTATE DREAMS</span>
          </h1>
        </div>

        {/* Search section */}
        <div className="flex flex-col md:flex-row items-end space-y-4 md:space-y-0 md:space-x-8">
          {/* Buy section */}
          <div className="w-full md:w-auto">
            <label className="text-white text-xl md:text-2xl font-bold mb-2 block">Buy</label>
            <div className="relative w-full">
              <select 
                className="w-full appearance-none bg-black text-yellow-400 border-b-2 border-yellow-400 py-2 pr-8 pl-0 focus:outline-none text-base md:text-lg"
                value={buyLocation}
                onChange={(e) => setBuyLocation(e.target.value)}
              >
                <option value="">Select buy location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sell section */}
          <div className="w-full md:w-auto">
            <label className="text-white text-xl md:text-2xl font-bold mb-2 block">Sell</label>
            <div className="relative w-full">
              <select 
                className="w-full appearance-none bg-black text-yellow-400 border-b-2 border-yellow-400 py-2 pr-8 pl-0 focus:outline-none text-base md:text-lg"
                value={sellLocation}
                onChange={(e) => setSellLocation(e.target.value)}
              >
                <option value="">Select Sell Location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Rent section */}
          <div className="w-full md:w-auto">
            <label className="text-white text-xl md:text-2xl font-bold mb-2 block">Rent</label>
            <div className="relative w-full">
              <select 
                className="w-full appearance-none bg-black text-yellow-400 border-b-2 border-yellow-400 py-2 pr-8 pl-0 focus:outline-none text-base md:text-lg"
                value={rentLocation}
                onChange={(e) => setRentLocation(e.target.value)}
              >
                <option value="">Select Rent Location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search button */}
          <button className="bg-yellow-400 h-10 w-10 flex items-center justify-center text-black focus:outline-none hover:bg-yellow-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Company information and explore button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 md:mt-16">
          <p className="text-white text-sm md:text-base max-w-xs mb-4 md:mb-0">
            For more than 30 years, we've been bringing projects to life around the world.
          </p>
          
          <div className="flex items-center">
            <a href="#work" className="text-white text-sm md:text-base border-b border-white mr-2 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
              EXPLORE OUR WORK
            </a>
            <div className="bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateHero;