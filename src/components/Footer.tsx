import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Tagline Section */}
        <div className="flex flex-col items-center">
            <Logo className={"w-[150px] h-[150px] mb-10 object-cover"}/>
          <p className="text-gray-400 text-center text-xl mb-10">
            Lorem ipsum sit amet consetetur lorem ipsum
            <br />
            sit amet consetetur
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-8">
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Full-width Divider */}
      <hr className="border-gray-800 mb-6" />

      {/* Navigation Links */}
      <div className="container mx-auto px-4 pb-4">
        <nav className="flex justify-center items-center space-x-4 text-sm">
          <a href="#" className="hover:text-gray-400 transition-colors">Home</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-gray-400 transition-colors">About</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Blogs</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Contact us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;