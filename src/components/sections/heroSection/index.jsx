import React from "react";
import { RxDashboard } from "react-icons/rx";

const HeroSection = () => {
  return (
    <div className="w-full  flex items-center justify-between bg-gradient-to-r from-[#FFFFFF] via-[#FFF0DCAB] via-67% to-[#EDF6FFB2]">
      <div className="flex flex-col max-w-[600px] m-10">
        <div className="flex flex-col">
          <h1 className="text-[47.85px] text-gray-800 leading-tight">
            Your trusted partner
          </h1>
          <h1 className="text-[47.85px] text-gray-800 leading-tight">
            for compliance business needs
          </h1>
          <span className="w-10 h-[1px] bg-[#F60014] mt-2"></span>
        </div>

        <p className="mt-4 text-gray-700 text-lg">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various registrations, tax filings, and other
          legal matters.
        </p>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <RxDashboard className="text-4xl text-[#4F4F4F]" />
            <div>
              <span className="font-extrabold text-[22px] bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                4.5+
              </span>
              <p className="text-xs font-medium text-gray-700">
                Business Registration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <RxDashboard className="text-4xl text-[#4F4F4F]" />
            <div>
              <span className="font-extrabold text-[22px] bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                20,000+
              </span>
              <p className="text-xs font-medium text-gray-700">
               client
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <RxDashboard className="text-4xl text-[#4F4F4F]" />
            <div>
              <span className="font-extrabold text-[22px] bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                99.8%
              </span>
              <p className="text-xs font-medium text-gray-700">
              Financial Stability
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-[#1C4670] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700">
            Talk to an Expert
          </button>
          <button className="bg-transparent text-[#282828] px-6 py-3 rounded-md font-semibold">
            See How It Works
          </button>
        </div>
      </div>

      <div className="w-[500px]">
        <img
          src="/your-image.png"
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
