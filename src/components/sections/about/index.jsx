import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full py-12 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col items-start space-y-6">
          <span className="text-sm font-light text-[#EB8D15] uppercase tracking-wider">
            WELCOME TO REGISTERKARO.IN
          </span>
          <h1 className="text-3xl font-bold mt-2">
            <span className="text-black">About</span>
            <span className="text-[#EB8D15]"> Register Karo</span>
          </h1>
          <p className="text-base text-[#0D1216]">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone s expectations.
          </p>
          <p className="text-base text-[#0D1216]">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes
          </p>
          <button className="mt-8 px-3 py-3 flex items-center gap-1 bg-[#1C4670] text-white rounded-md">
            Learn More
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/group.jpeg"
            alt="Company Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
