import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12 space-y-12">
        {/* Heading Section */}
        <div className="text-center">
          <span className="text-sm font-light text-[#EB8D15] uppercase tracking-wider">
            EXPLORE OUR BLOGS
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-3">
            Accelerate Digital Transformation
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg ">
            <div className="h-40 bg-cover bg-center rounded-lg">
              <img src="/blogs.jpeg" alt="" className="w-full h-full" />
            </div>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Prabhash Mishra • 1 Jan 2023 • Today
              </span>
              <div className="flex items-center mt-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Small Business and Startup
                </h2>
                <MdOutlineArrowOutward />
              </div>
              <p className="text-base text-gray-600 mt-2">
                Like to know the secret of transforming a 2-14 team into a 3x
                Super Bowl Dynasty.
              </p>
              <div className="mt-4 space-x-4">
                <span className="text-sm text-gray-500">Tax and Audit</span>
                <span className="text-sm text-gray-500">Management</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg ">
            <div className="h-40 bg-cover bg-center rounded-lg">
              <img src="/blogs.jpeg" alt="" className="w-full h-full" />
            </div>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Prabhash Mishra • 1 Jan 2023 • Today
              </span>
              <div className="flex items-center mt-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Small Business and Startup
                </h2>
                <MdOutlineArrowOutward />
              </div>
              <p className="text-base text-gray-600 mt-2">
                Like to know the secret of transforming a 2-14 team into a 3x
                Super Bowl Dynasty.
              </p>
              <div className="mt-4 space-x-4">
                <span className="text-sm text-gray-500">Tax and Audit</span>
                <span className="text-sm text-gray-500">Management</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg ">
            <div className="h-40 bg-cover bg-center rounded-lg">
              <img src="/blogs.jpeg" alt="" className="w-full h-full" />
            </div>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Prabhash Mishra • 1 Jan 2023 • Today
              </span>
              <div className="flex items-center mt-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Small Business and Startup
                </h2>
                <MdOutlineArrowOutward />
              </div>
              <p className="text-base text-gray-600 mt-2">
                Like to know the secret of transforming a 2-14 team into a 3x
                Super Bowl Dynasty.
              </p>
              <div className="mt-4 space-x-4">
                <span className="text-sm text-gray-500">Tax and Audit</span>
                <span className="text-sm text-gray-500">Management</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="h-40 bg-cover bg-center rounded-lg">
              <img src="/blogs.jpeg" alt="" className="w-full h-full" />
            </div>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Prabhash Mishra • 1 Jan 2023 • Today
              </span>
              <div className="flex items-center mt-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Small Business and Startup
                </h2>
                <MdOutlineArrowOutward />
              </div>
              <p className="text-base text-gray-600 mt-2">
                Like to know the secret of transforming a 2-14 team into a 3x
                Super Bowl Dynasty.
              </p>
              <div className="mt-4 space-x-4">
                <span className="text-sm text-gray-500">Tax and Audit</span>
                <span className="text-sm text-gray-500">Management</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="mt-6 px-6 py-3 bg-[#1C4670] text-white font-semibold rounded-lg ">
            Show More Blogs →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
