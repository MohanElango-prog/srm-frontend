import React from 'react';

const OurProcess: React.FC = () => {
  const processSteps = [
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod tempor incididunt ut labore'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod tempor incididunt ut labore'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod tempor incididunt ut labore'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod tempor incididunt ut labore'
    }
  ];

  const images = [
    '/api/placeholder/600/400?text=House+1',
    '/api/placeholder/600/400?text=House+2',
    '/api/placeholder/600/400?text=House+3'
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-6">
            <img 
              src={images[0]} 
              alt="Process Image 1" 
              className="w-full h-full object-cover rounded-lg"
            />
            <img 
              src={images[1]} 
              alt="Process Image 2" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="self-center">
            <img 
              src={images[2]} 
              alt="Process Image 3" 
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold mb-8">
            Our <span className="text-yellow-500">Process</span>
          </h2>
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-yellow-500 text-black rounded-full p-1.5 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;