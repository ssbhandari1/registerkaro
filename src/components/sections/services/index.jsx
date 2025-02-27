import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Down arrow icon
import { FaBuilding, FaChartBar, FaBriefcase } from "react-icons/fa"; // Example icons

const services = [
  {
    icon: <FaBuilding size={40} className="text-[#FFA229]" />,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience..",
  },
  {
    icon: <FaChartBar size={40} className="text-[#FFA229]" />,
    title: "Financial Advisory Services",
    description: "Make data-driven decisions andutilize technology to reach business goals.",
  },
  {
    icon: <FaBriefcase size={40} className="text-[#FFA229]" />,
    title: "Legal Compliance Solutions",
    description: "Foster customer relationships by effectively serving your market.",
  },
  {
    icon: <FaBuilding size={40} className="text-[#FFA229]" />,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience..",
  },
  {
    icon: <FaChartBar size={40} className="text-[#FFA229]" />,
    title: "Financial Advisory Services",
    description: "Make data-driven decisions andutilize technology to reach business goals.",
  },
  {
    icon: <FaBriefcase size={40} className="text-[#FFA229]" />,
    title: "Legal Compliance Solutions",
    description: "Foster customer relationships by effectively serving your market.",
  },
];

const Services = () => {
  return (
    <div className="w-full px-10 py-5 bg-[#FAFAFA]">
      <div className="w-full flex flex-col items-center py-12 bg-[#FAFAFA]">
        <div className="text-center mb-8">
          <span className="text-sm font-light text-[#EB8D15] uppercase tracking-wider">
            Welcome to RegisterKaro.in
          </span>

          <h1 className="text-3xl font-bold text-[#272D37] mt-2">
            Explore Our Services
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-6xl px-6 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center text-center p-6 rounded-lg transition-shadow duration-300"
            >
              {service.icon}
              <h2 className="text-xl font-extrabold text-[#000000]">
                {service.title}
              </h2>
              <p className="text-[#282728] text-sm font-light">{service.description}</p>
              <span className="flex items-center gap-1 font-semibold mt-4 text-[#001038] cursor-pointer">
                Learn more <FaChevronDown size={14} />
              </span>
            </div>
          ))}
        </div>

        <button className="mt-8 px-4 py-3 bg-[#1C4670] text-white rounded-md">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
