import React from "react";
import { Phone } from "lucide-react";
import arrow from "../../../icons/arrow1.png";
import property from "../../../icons/blog3.jpeg";
import property2 from "../../../icons/blog1.jpg";

const DubaiPropertyRental = () => {
  return (
    <div className="relative w-full h-screen bg-black/80 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Main Content Section - Flex Column Layout */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Header and Top Answer Section as Flex Row */}
        <div className="flex flex-col md:flex-row items-start p-8 md:p-16  gap-8">
          {/* Left Header Section - Increased width */}
          <div className="flex-1 md:flex-2 lg:w-2/3">
            <h1 className="text-5xl md:text-[84px] font-bold bg-gold-gradient bg-clip-text text-transparent mb-6">
              How Can I Get
            </h1>

            {/* Property Rentals In + Curved Arrow PNG */}
            <div className="relative flex items-center gap-2 mb-6">
              <h1 className="text-5xl md:text-[84px] font-bold bg-gold-gradient bg-clip-text text-transparent">
                Property Rentals In
              </h1>
              <img
                src={arrow} // Replace with correct path
                alt="Curved Arrow"
                className="absolute right-[-30px] top-[-20px] w-[80px] md:w-[100px]"
              />
            </div>

            {/* Dubai + Arrow */}
            <div className="flex gap-6 items-center">
              <h1 className="text-5xl md:text-[84px] font-bold bg-gold-gradient bg-clip-text text-transparent mb-4">
                Dubai?
              </h1>
              <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white rotate-0"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Top Answer Section - Decreased width */}
          <div className="flex-1 md:flex-1 w-[22%] rounded-lg pt-28 pl-6">
            <div className="flex justify-between items-start mb-3">
              <div className="px-3 py-1 bg-[#F0A500]/20 border border-[#F0A500]/20 text-xs">
                Our Top Answer!
              </div>
            </div>
            <p className="text-sm leading-snug mb-4">
              Looking For Your Next Home Or Office Space To Rent In Dubai? We
              Offer A Wide Range Of Rental Services, Including Residential And
              Commercial Options. Tailored To Your Needs: From Cozy Apartments
              To Luxury Villas. Our Listings Cater To All Preferences And
              Budgets. Whether You're Looking For A Long-Term Lease Or
              Short-Term Accommodations, We Ensure You Get The Best Rental Deals
              In Prime Locations Across Dubai.
            </p>
            <p className="bg-gold-gradient bg-clip-text text-transparent text-sm">
              - SRM International
            </p>
          </div>
        </div>

        {/* Property Images Section - At Bottom */}
        <div className="mt-auto">
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8">
            {/* Left Image with SRM County - Increased width */}
            <div className="flex-1 md:flex-2 lg:w-2/3">
              <div className="relative h-[420px] overflow-hidden  mb-4">
                <img src={property} className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 flex items-center space-x-2 bg-black px-6 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span className="text-sm bg-gold-gradient bg-clip-text text-transparent">
                    SRM County
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content with Property Rentals - Decreased width */}
            <div className="flex-1 md:flex-1 lg:w-1/3">
              <div className="h-64 overflow-hidden mb-4">
                <img
                  src={property2}
                  alt="Modern wooden house"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content below image instead of overlay */}
              <div className="rounded-lg p-4">
                <h2 className="text-2xl font-semibold bg-gold-gradient bg-clip-text text-transparent mb-2">
                  Looking For Property Rentals
                </h2>
                <p className="text-sm mb-4">
                  Explore Our Rental Properties Now And Find The Perfect Place
                  To Call Home Or Work. Contact Us To Schedule A Viewing!
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-gold-gradient bg-clip-text text-transparent">
                    +971 56 170 5428
                  </span>

                  <span className="bg-gold-gradient bg-clip-text text-transparent">
                    +971 56 170 5428
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiPropertyRental;
