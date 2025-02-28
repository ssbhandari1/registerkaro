import React from "react";
import { FaArrowCircleRight, FaRegLightbulb } from "react-icons/fa";

const HappyClients = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="  space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-[#272D37]">
            Our Happy Clients
          </h1>
          <p className="text-base text-[#666666] max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-3">
            <div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
              <img
                src="/microsoft.png"
                alt="Company 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full border border-gray-400">
              <img
                src="/microsoft.png"
                alt="Company 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full border border-gray-400">
              <img
                src="/microsoft.png"
                alt="Company 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full border border-gray-400">
              <img
                src="/microsoft.png"
                alt="Company 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full border border-gray-400">
              <img
                src="/microsoft.png"
                alt="Company 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full border border-gray-400">
              <img
                src="/microsoft.png"
                alt="Company 1"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <button className="mt-8 px-3 py-3 flex items-center gap-1 text-[#1C4670] rounded-md">
            Learn More
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="bg-yellow-400 p-3">
          <div className="flex gap-2">
            <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
              <div className="p-3 bg-[#EB5757] text-white rounded-full">
                <FaRegLightbulb className="text-xl " />
              </div>
              <span className="text-lg text-gray-700">
                Fill up application form
              </span>
            </div>
            <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
              <div className="p-3 bg-[#27AE60] text-white rounded-full">
                <FaRegLightbulb className="text-xl" />
              </div>
              <span className="text-lg text-gray-700">
                Fill up application form
              </span>
            </div>
            <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
              <div className="p-3 bg-[#EB5757] text-white rounded-full">
                <FaRegLightbulb className="text-xl" />
              </div>
              <span className="text-lg text-gray-700">
                Fill up application form
              </span>
            </div>
            <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
              <div className="p-3 bg-[#27AE60] text-white rounded-full">
                <FaRegLightbulb className="text-xl" />
              </div>
              <span className="text-lg text-gray-700">
                Fill up application form
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
