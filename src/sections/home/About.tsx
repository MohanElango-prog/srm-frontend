import React from "react";
import modern from "../icons/modern.jpg";
import SocialMediaIcons from "@/utils/socialIcons";

const AboutSection = () => {
  return (
    <div className="bg-black text-white p-8 md:p-16 flex flex-col md:flex-row items-start relative">
      {/* Left column content */}
      <div className="md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0 z-10">
        <h1 className="text-yellow-400 text-5xl md:text-8xl font-bold mb-12">
          About
        </h1>

        {/* Small house image in pill shape */}
        <div className="rounded-full bg-white w-full max-w-md h-32 mb-8 overflow-hidden flex items-center justify-center">
          <img
            src={modern}
            alt="Small house"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Tagline */}
        <div className="mb-10">
          <p className="text-yellow-400 text-2xl font-bold">
            It's Your Life.
            <br />
            Take The Keys.
          </p>

          <h1 className="text-white text-3xl md:text-6xl font-light mt-2">
            And Affordable Homes.
          </h1>

          {/* Vision text moved a bit to the left */}
          <h2 className="text-white text-3xl md:text-6xl font-light mt-2 md:absolute md:right-1/4 md:w-3/4 md:top-[360px] md:z-20">
            A Vision For Liveable
          </h2>
        </div>

        {/* Stats */}
        <div className="flex mb-10">
          <div className="mb-10">
            <button className="bg-yellow-400 text-black px-6 py-6 font-bold hover:bg-yellow-500 transition-colors">
              Learn
              <br />
              More
            </button>
          </div>
          <div className="mr-16 ml-16">
            <div className="text-4xl md:text-5xl font-bold mb-2">9k+</div>
            <div className="text-gray-400 text-sm">
              Trusted By
              <br />
              Customers
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">19K</div>
            <div className="text-gray-400 text-sm">
              Projects
              <br />
              Completed
            </div>
          </div>
        </div>
      </div>

      {/* Right column with the architectural image and play button */}
      <div className="relative">
        <div className="relative">
          <img
            src={modern}
            alt="Modern architecture"
            className="w-full md:w-[900px] h-[700px] object-cover"
          />

          {/* Play button in the center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-yellow-400 rounded-full animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center text-yellow-400 text-xs font-bold tracking-widest">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle" className="text-yellow-400">
                        GET STARTED GET STARTED
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Glassmorphic bottom text block that overflows on the bottom left */}
          <div className="absolute -bottom-5 -left-10 md:-left-2 bg-black bg-opacity-70 backdrop-blur-md p-6 
          rounded-3xl text-yellow-400 text-sm w-full max-w-md">
            <p className="mb-2">
              Donec Cras Lacus, Quis Nunc Urna, Feugiat Neque, Non Mi Erat
            </p>
            <p className="text-gray-400 text-xs">
              Ultricies Morbi, Habitasse feuglis Sed Morsi Natoque Risus, Quis
              Nunc Urna, Feugiat Neque, Non Mi Erat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;