import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profile from "../../icons/profiles-1.jpg";

// Team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeamMembersSlider = () => {
  // Sample team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Team Member name",
      role: "Team Member role",
      image: profile,
    },
    {
      id: 2,
      name: "Team Member name",
      role: "Team Member role",
      image: "/api/placeholder/400/500",
    },
    {
      id: 3,
      name: "Team Member name",
      role: "Team Member role",
      image: profile,
    },
    {
      id: 4,
      name: "Team Member name",
      role: "Team Member role",
      image: "/api/placeholder/400/500",
    },
    {
      id: 5,
      name: "Team Member name",
      role: "Team Member role",
      image: profile,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const maxVisibleItems = 5;
  const centerOffset = Math.floor(maxVisibleItems / 2);

  // Function to handle navigation
  const goToSlide = (index: number) => {
    let newIndex = index;

    // Loop back to beginning if we go past the end
    if (newIndex >= teamMembers.length) {
      newIndex = 0;
    }

    // Loop to the end if we go before the beginning
    if (newIndex < 0) {
      newIndex = teamMembers.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  // Get visible items with the current centered
  const getVisibleItems = () => {
    const items = [];
    const totalItems = teamMembers.length;

    for (let i = 0; i < maxVisibleItems; i++) {
      // Calculate the offset from the current index
      let offset = i - centerOffset;

      // Calculate the actual index with wrapping
      let actualIndex = (currentIndex + offset + totalItems) % totalItems;

      items.push({
        ...teamMembers[actualIndex],
        position: offset,
      });
    }

    return items;
  };

  // Get card style based on position relative to center
  const getCardStyle = (position: number) => {
    // Center card
    if (position === 0) {
      return "z-30 scale-125 opacity-100";
    }
    // Adjacent cards
    else if (Math.abs(position) === 1) {
      return "z-20 scale-110 opacity-80";
    }
    // Outer cards
    else {
      return "z-10 scale-100 opacity-60";
    }
  };

  // Calculate horizontal positioning based on position
  const getPositionStyle = (position: number) => {
    // Center position
    if (position === 0) {
      return "left-1/2 -translate-x-1/2";
    }
    // Left positions (negative)
    else if (position < 0) {
      if (position === -1) return "left-[25%] -translate-x-2/4";
      if (position === -2) return "left-[5%] -translate-x-2/4";
    }
    // Right positions (positive)
    else if (position > 0) {
      if (position === 1) return "left-[75%] -translate-x-2/4";
      if (position === 2) return "left-[95%] -translate-x-2/4";
    }

    return "left-1/2 -translate-x-1/2"; // fallback
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Decorative lines */}
      <div className="flex items-center w-full max-w-8xl mb-12 px-7">
        <div className="h-px flex-grow bg-gold-gradient"></div>
        <h2 className="text-[65px] font-bold bg-gold-gradient bg-clip-text text-transparent px-6">
          Other Agents
        </h2>
        <div className="h-px flex-grow bg-gold-gradient"></div>
      </div>

      {/* Team members slider */}
      <div className="relative w-full max-w-8xl h-[600px] flex items-center justify-center">
        {getVisibleItems().map((member) => (
          <div
            key={member.id}
            className={`absolute transition-all duration-500 ease-in-out ${getCardStyle(
              member.position
            )} ${getPositionStyle(member.position)}`}
          >
            <div className="w-72 bg-gray-900 overflow-hidden rounded">
              <div className="h-[500px] w-full relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black/30 
                backdrop-blur-sm p-4 m-10 rounded-lg flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-lg font-medium text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control section - arrows and dashes on the same line */}
      <div className="w-full flex items-center justify-between px-8 mt-8">
        {/* Left arrow */}
        <button
          onClick={() => goToSlide(currentIndex - 1)}
          className="w-8 h-8 rounded-full bg-amber-500 ml-[160px] flex items-center justify-center focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Indicator dashes */}
        <div className="flex space-x-3">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-1 transition-colors ${
                currentIndex === index ? "bg-amber-500" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => goToSlide(currentIndex + 1)}
          className="w-8 h-8 rounded-full bg-amber-500 mr-[160px] flex items-center justify-center focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TeamMembersSlider;
