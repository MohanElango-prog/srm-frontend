import React, { useState } from "react";

const RealEstateHero = () => {
  const [buyLocation, setBuyLocation] = useState("");
  const [sellLocation, setSellLocation] = useState("");
  const [rentLocation, setRentLocation] = useState("");

  return (
    <div className="relative w-full min-h-screen">
      {/* Dark overlay with background image */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pt-8">
        {/* Hero text */}
        <div className="mb-8 md:mb-16 px:4 md:px-16">
          <h1 className="text-4xl md:text-[160px] font-bold leading-tight">
            <span className="text-yellow-400 block italic">WE HELP TO</span>
            <span className="text-white block">ACHIEVE YOUR REAL</span>
            <div className="text-right">
              <span className="text-yellow-400 block">ESTATE DREAMS</span>
            </div>
          </h1>
        </div>

        {/* Search form */}
        <div className="bg-black/50 backdrop-blur-md p-[50px] w-full">
          <div className="flex flex-col md:flex-row items-stretch space-y-4 md:space-y-0 md:space-x-8">
            {/* Buy Section */}
            <div className="flex-1 flex flex-col">
              <label className="text-white text-xl md:text-2xl font-bold mb-2">
                Buy
              </label>
              <div className="relative w-full flex-1">
                <select
                  className="w-full h-full appearance-none bg-transparent text-yellow-400 border-none py-2 pr-8 pl-0 focus:outline-none text-base md:text-lg"
                  value={buyLocation}
                  onChange={(e) => setBuyLocation(e.target.value)}
                >
                  <option value="">Select Buy Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sell Section */}
            <div className="flex-1 flex flex-col">
              <label className="text-white text-xl md:text-2xl font-bold mb-2">
                Sell
              </label>
              <div className="relative w-full flex-1">
                <select
                  className="w-full h-full appearance-none bg-transparent text-yellow-400 border-none py-2 pr-8 pl-0 focus:outline-none text-base md:text-lg"
                  value={sellLocation}
                  onChange={(e) => setSellLocation(e.target.value)}
                >
                  <option value="">Select Sell Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Rent Section */}
            <div className="flex-1 flex flex-col">
              <label className="text-white text-xl md:text-2xl font-bold mb-2">
                Rent
              </label>
              <div className="relative w-full flex-1">
                <select
                  className="w-full h-full appearance-none bg-transparent text-yellow-400 border-none py-2 pr-8 pl-0 focus:outline-none text-base md:text-lg"
                  value={rentLocation}
                  onChange={(e) => setRentLocation(e.target.value)}
                >
                  <option value="">Select Rent Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              className="bg-yellow-400 flex items-center justify-center text-black 
            focus:outline-none hover:bg-yellow-500 transition-colors h-[80px] px-4"
            >
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* Company information and explore button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 md:mt-16">
            <p className="text-white text-sm md:text-base max-w-xs mb-4 md:mb-0">
              For more than 30 years, we've been bringing projects to life
              around the world.
            </p>

            <div className="flex items-center">
              <a
                href="#work"
                className="text-white text-xl md:text-base border-b border-white mr-2 
                hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              >
                EXPLORE OUR WORK
              </a>
              <div className="bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 rotate-[10deg]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateHero;
