import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Benefits = () => {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col items-start space-y-6">
            <span className="text-sm font-light text-[#EB8D15] uppercase tracking-wider">
              WHY REGISTERKARO.IN
            </span>
            <h1 className="text-3xl font-bold mt-2">
              <span className="text-black">Why Choose Register Karo</span>
            </h1>
            <p className="text-base text-[#666666] mt-2">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FEF3EF] h-full rounded-lg p-3 flex flex-col items-center justify-center text-white text-xl font-semibold">
              <div className="mb-4">
              <IoMdCheckmarkCircle className="text-[#3DCD5C] text-3xl"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Confidential and Safe</h3>
              <p className="text-base text-center text-[#666666]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-[#FEF3EF] h-full rounded-lg p-2 flex flex-col items-center justify-center text-white text-xl font-semibold">
            <div className="mb-4">
            
            <IoMdCheckmarkCircle className="text-[#3DCD5C] text-3xl"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Confidential and Safe</h3>
            <p className="text-base text-center text-[#666666]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-[#FEF3EF] h-full rounded-lg p-2 flex flex-col items-center justify-center text-white text-xl font-semibold">
            <div className="mb-4">
            <IoMdCheckmarkCircle className="text-[#3DCD5C] text-3xl"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Confidential and Safe</h3>
            <p className="text-base text-center text-[#666666]">
            All your private information is safe
            with us
            </p>
          </div>
          <div className="bg-[#FEF3EF] h-full rounded-lg p-2 flex flex-col items-center justify-center text-white text-xl font-semibold">
            <div className="mb-4">
            <IoMdCheckmarkCircle className="text-[#3DCD5C] text-3xl"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Confidential and Safe</h3>
            <p className="text-base text-center text-[#666666]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-[#FEF3EF] h-full rounded-lg p-2 flex flex-col items-center justify-center text-white text-xl font-semibold">
            <div className="mb-4">
            <IoMdCheckmarkCircle className="text-[#3DCD5C] text-3xl"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Confidential and Safe</h3>
            <p className="text-base text-center text-[#666666]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
