import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import profile from "../../icons/profiles-1.jpg";

const AgentProfile = () => {
  return (
    <div className="bg-black text-white flex pt-16 pb-16 flex-col relative">
      {/* Main content area */}
      <div className="flex flex-col md:flex-row p-8 gap-8">
        {/* Left column - Agent image */}
        <div className="md:w-[500px] flex flex-col">
          <div className="border border-[#FFB800]/20 rounded-md overflow-hidden">
            <img
              src={profile}
              alt="Agent portrait"
              className="h-[600px] w-[600px] object-cover"
            />
          </div>

          {/* Social media icons - Always below profile image */}
          <div className="flex justify-between mt-4">
            <SocialButton icon={<Facebook size={30} />} />
            <SocialButton icon={<Instagram size={30} />} />
            <SocialButton icon={<Twitter size={30} />} />
            <SocialButton icon={<Linkedin size={30} />} />
          </div>
        </div>

        {/* Right column - Agent details */}
        <div className="md:w-2/3 flex flex-col">
          <div>
            <h1 className="text-5xl font-medium bg-gold-gradient bg-clip-text text-transparent">
              Agent Name
            </h1>
            <h2 className="text-3xl text-white mt-4 mb-6">Agent Role</h2>

            <div className="w-full h-px bg-gray-700 mb-6"></div>

            {/* Agent information list */}
            <div className="space-y-4 mb-6">
              <InfoRow label="Lorem Ipsum:" value="Lorem Ipsum dolor sit" />
              <InfoRow label="Lorem Ipsum:" value="Lorem Ipsum dolor" />
              <InfoRow
                label="Lorem Ipsum:"
                value="Lorem Ipsum dolor sit amet consectetur"
              />
            </div>

            {/* Button row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Button text="Lorem Ipsum" />
              <Button text="Lorem Ipsum" />
              <Button text="Lorem Ipsum" />
            </div>

            {/* Agent bio paragraphs */}
            <div className="space-y-4 text-[16px] text-gray-300">
              <p>
                Lorem ipsum dolor sit amet consectetur. Et et at nibh dignissim
                id hac fringilla mauris morbi. Scelerisque nulla vel mi
                tristique lorem suspendisse purus lacinia. Rhoncus varius in
                convallis malesuada. Odio laoreet euismod sit fermentum
                porttitor enim. Mauris iaculis lectus eleifend quis sit. Risus
                blandit vulputate posuere ut leo in mattis pharetra faucibus.
                Aliquet leo ultrices blandit commodo id. Praesent risus
                consectetur egestas tellus vitae vitae imperdiet. Pretium
                vulputate sagittis turpis felis ullamcorper aliquet molestie
                ultricies. Cursus sed mauris gravida est felis interdum. Nibh
                imperdiet ac vitae pretium bibendum. Pretium nisi semper
                facilisi sit. Mauris convallis sagittis commodo pellentesque
                magna praesent. Sagittis etiam ac hendrerit nec sollicitudin
                egestas id laoreet. Lorem ipsum dolor sit amet consectetur. Et
                et at nibh dignissim id hac fringilla mauris morbi. Scelerisque
                nulla vel mi tristique lorem suspendisse purus lacinia. Rhoncus
                varius in convallis malesuada. Odio laoreet euismod sit
                fermentum porttitor enim. Mauris iaculis lectus eleifend quis
                sit. Risus blandit vulputate posuere ut leo in mattis pharetra
                faucibus. Aliquet leo ultrices blandit commodo id. Praesent
                risus consectetur egestas tellus vitae vitae imperdiet. Pretium
                vulputate sagittis turpis felis ullamcorper aliquet molestie
                ultricies. Cursus sed mauris gravida est felis interdum. Nibh
                imperdiet ac vitae pretium bibendum. Pretium nisi semper
                facilisi sit. Mauris convallis sagittis commodo pellentesque
                magna praesent. Sagittis etiam ac hendrerit nec sollicitudin
                egestas id laoreet.
              </p>
            </div>
          </div>
        </div>

        {/* Last Column - "OUR EXPERT AGENT" Vertical Text - Fixed */}
        <div className="hidden md:flex items-center justify-center flex-1 relative min-h-[600px]">
          <div className="absolute transform rotate-90 whitespace-nowrap">
            <p
              className="uppercase text-5xl font-bold"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255, 184, 0, 0.3)",
                letterSpacing: "0.2em",
              }}
            >
              OUR EXPERT AGENT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center">
    <span className="bg-gold-gradient bg-clip-text text-transparent font-medium w-32">
      {label}
    </span>
    <span className="text-white">{value}</span>
  </div>
);

const Button = ({ text }: { text: string }) => (
  <button className="py-2 px-4 border border-amber-500 text-center text-white hover:bg-amber-500/20 transition-colors">
    {text}
  </button>
);

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-16 h-16 border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500/20 transition-colors">
    {icon}
  </button>
);

export default AgentProfile;
