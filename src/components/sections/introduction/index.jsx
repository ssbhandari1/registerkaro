import React from 'react'

const Introduction = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

    <div className="space-y-12">
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Video Introductions</h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus expedita temporibus corporis
          tempora cupiditate aliquid fugiat excepturi, illum impedit?
        </p>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex items-start space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l7 7 7-7" />
          </svg>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Explore Ideas Together</h3>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate amet tenetur similique odit
              doloremque distinctio cum nemo culpa doloribus?
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          {/* Example Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l7 7 7-7" />
          </svg>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Explore Ideas Together</h3>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate amet tenetur similique odit
              doloremque distinctio cum nemo culpa doloribus?
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
  )
}

export default Introduction