import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="w-full py-12 bg-[#1C4670] text-[white]">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold">Our Video Introductions</h2>
            <p className="text-base text-[#AAB5CD]">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FFA229] rounded-full">
                <FaRegLightbulb className="text-xl" />
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">
                  Explore Ideas Together
                </h3>
                <p className="text-base text-[#AAB5CD]">
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FFA229] rounded-full">
                <FaRegLightbulb className="text-xl" />
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">
                  Explore Ideas Together
                </h3>
                <p className="text-base text-[#AAB5CD]">
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
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

export default Introduction;
