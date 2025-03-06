import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-black text-white p-8 md:p-16 flex flex-col md:flex-row items-start">
      {/* Left column content */}
      <div className="md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0">
        <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold mb-12">
          About
        </h1>

        {/* Small house image in pill shape */}
        <div className="rounded-full bg-white w-full max-w-md h-32 mb-8 overflow-hidden flex items-center justify-center">
          <img 
            src="/api/placeholder/400/200" 
            alt="Small house" 
            className="w-full h-full object-cover grayscale" 
          />
        </div>

        {/* Tagline */}
        <div className="mb-10">
          <p className="text-yellow-400 text-xl font-bold">
            It's Your Life.<br />
            Take The Keys.
          </p>
          
          <h2 className="text-white text-3xl md:text-4xl font-light mt-2">
            A Vision For Liveable<br />
            And Affordable Homes.
          </h2>
        </div>

        {/* Stats */}
        <div className="flex mb-10">
          <div className="mr-16">
            <div className="text-4xl md:text-5xl font-bold mb-2">9k+</div>
            <div className="text-gray-400 text-sm">
              Trusted By<br />
              Customers
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">19K</div>
            <div className="text-gray-400 text-sm">
              Projects<br />
              Completed
            </div>
          </div>
        </div>

        {/* Learn More button */}
        <div className="mb-10">
          <button className="bg-yellow-400 text-black px-4 py-6 font-bold hover:bg-yellow-500 transition-colors">
            Learn<br />More
          </button>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.44 21.1 10 21.9v-6.96h-2.5v-2.9H10v-2.2c0-2.48 1.5-3.86 3.77-3.86 1.08 0 2.23.2 2.23.2v2.44h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.45 2.9h-2.33v6.95C18.56 21.1 22 17.1 22 12.07z" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-2.8 0-3.1 0-4.2.1-1.1 0-1.8.2-2.5.5-.7.3-1.2.6-1.8 1.1-.5.5-.8 1.1-1.1 1.8-.3.6-.5 1.4-.5 2.5 0 1.1-.1 1.4-.1 4.2s0 3.1.1 4.2c0 1.1.2 1.8.5 2.5.3.7.6 1.2 1.1 1.8.5.5 1.1.8 1.8 1.1.6.3 1.4.5 2.5.5 1.1 0 1.4.1 4.2.1s3.1 0 4.2-.1c1.1 0 1.8-.2 2.5-.5.7-.3 1.2-.6 1.8-1.1.5-.5.8-1.1 1.1-1.8.3-.6.5-1.4.5-2.5 0-1.1.1-1.4.1-4.2s0-3.1-.1-4.2c0-1.1-.2-1.8-.5-2.5-.3-.7-.6-1.2-1.1-1.8-.5-.5-1.1-.8-1.8-1.1-.6-.3-1.4-.5-2.5-.5-1.1 0-1.4-.1-4.2-.1zm0 1.8c2.7 0 3.1 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.5.6.7 1.1.1.4.3.9.3 1.9.1 1 .1 1.3.1 4.1s0 3.1-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.4.1-.9.3-1.9.3-1 .1-1.3.1-4.1.1s-3.1 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1.1-.1-.4-.3-.9-.3-1.9-.1-1-.1-1.3-.1-4.1s0-3.1.1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.4-.1.9-.3 1.9-.3 1-.1 1.3-.1 4.1-.1z" />
              <path d="M12 15.3c-1.8 0-3.3-1.5-3.3-3.3S10.2 8.7 12 8.7s3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm0-8.3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
              <circle cx="17.1" cy="6.9" r="1.2" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.9 2H3.1C2.5 2 2 2.5 2 3.1v17.8c0 .6.5 1.1 1.1 1.1h17.8c.6 0 1.1-.5 1.1-1.1V3.1c0-.6-.5-1.1-1.1-1.1zM8.9 18.1H5.9V9.2h3v8.9zm-1.5-10.1c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm11.5 10.1h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5v4.7h-3V9.2h2.8v1.3h.1c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5v4.6z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right column with the architectural image and play button */}
      <div className="md:w-1/2 relative">
        <div className="relative">
          <img 
            src="/lovable-uploads/og-image.png" 
            alt="Modern architecture" 
            className="w-full h-full object-cover"
          />
          
          {/* Play button in the center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-yellow-400 rounded-full animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center text-yellow-400 text-xs font-bold tracking-widest">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
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
        </div>

        {/* Bottom text block */}
        <div className="bg-black p-6 text-yellow-400 text-sm">
          <p className="mb-2">Donec Cras Lacus, Quis Nunc Urna, Feugiat Neque, Non Mi Erat</p>
          <p className="text-gray-400 text-xs">Ultricies Morbi, Habitasse feuglis Sed Morsi Natoque Risus, Quis Nunc Urna, Feugiat Neque, Non Mi Erat</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;