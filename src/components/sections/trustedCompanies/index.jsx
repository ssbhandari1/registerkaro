import React from "react";

const TrustedCompanies = () => {
  return (
    <div className="w-full h-[236px] flex flex-col items-center justify-center bg-white">
      {/* Title */}
      <h1 className="text-xl font-semibold text-[#272D37] text-center">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h1>

      {/* Companies Section */}
      <div className="flex items-center justify-center gap-[49.56px] mt-6">
        <div className="flex items-center h-20">
       <h2 className="text-[#EA1B22] text-2xl font-bold">ORACLE</h2>
        </div>
        <div className="flex items-center h-20">
       <h2 className="text-[#1428A0] text-2xl font-bold">SAMSUNG</h2>
        </div>
        <div className="flex items-center h-20">
        <h2 className="text-[#EA1B22] text-2xl font-bold">ORACLE</h2>
        </div>
        <div className="flex items-center h-20">
       <h2 className="text-[#1428A0] text-2xl font-bold">SAMSUNG</h2>
        </div>
       
      </div>
    </div>
  );
};

export default TrustedCompanies;
