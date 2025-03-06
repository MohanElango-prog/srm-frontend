import React, { useState } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  avatarUrl: string;
  onClick: () => void;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, avatarUrl, onClick }) => {
  return (
    <div className="border border-amber-800/30 rounded-md p-6 mb-4 relative">
      <div className="text-3xl text-white font-bold mb-2">"</div>
      <p className="text-gray-400 mb-4 line-clamp-3">
        {quote}
      </p>
      <div className="flex items-center">
        <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
      <div
        className="absolute bottom-4 right-4 bg-amber-800/80 p-1 cursor-pointer rounded-md"
        onClick={onClick}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 17l9.2-9.2M17 17V8h-9" />
        </svg>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    quote: string;
    name: string;
    position: string;
    avatarUrl: string;
  } | null>(null);

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "Lisa Hamilton",
      position: "CEO at Studio",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "John Doe",
      position: "CTO at Company",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "Emily Carter",
      position: "Marketing Director",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "Lisa Hamilton",
      position: "CEO at Studio",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "John Doe",
      position: "CTO at Company",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "Emily Carter",
      position: "Marketing Director",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "Lisa Hamilton",
      position: "CEO at Studio",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "John Doe",
      position: "CTO at Company",
      avatarUrl: "/api/placeholder/40/40"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      name: "Emily Carter",
      position: "Marketing Director",
      avatarUrl: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="relative">
          <div className="absolute top-0 left-0 z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 leading-tight">
              WHAT <br />
              OUR <br />
              CLIENTS <br />
              SAY?
            </h2>
          </div>
          <div className="relative border border-amber-800/30 pt-48 lg:pt-0">
            <img 
              src="/lovable-uploads/og-image.png" 
              alt="Modern luxury apartment interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4">
              <div className="text-white text-6xl font-bold">
                10.9K<span className="text-amber-400">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Testimonial Section - Scrollable */}
        <div className="flex flex-col justify-between overflow-y-auto max-h-[550px] pr-2">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              avatarUrl={testimonial.avatarUrl}
              onClick={() => setSelectedTestimonial(testimonial)}
            />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-black border border-amber-800/30 rounded-md p-6 max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => setSelectedTestimonial(null)}
            >
              ×
            </button>
            <p className="text-gray-400 mb-4">{selectedTestimonial.quote}</p>
            <div className="flex items-center">
              <img src={selectedTestimonial.avatarUrl} alt={selectedTestimonial.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="text-white font-semibold">{selectedTestimonial.name}</p>
                <p className="text-gray-400 text-sm">{selectedTestimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="mt-8 border border-amber-800/30 rounded-md p-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">
          Are you the <span className="text-amber-400">Next One?</span>
        </div>
        <button className="bg-amber-400 text-black px-4 py-2 rounded-md font-medium">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
