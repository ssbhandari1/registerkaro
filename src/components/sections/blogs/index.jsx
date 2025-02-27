import React from 'react'

const Blogs = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-12 space-y-12">
    
    {/* Heading Section */}
    <div className="text-center">
      <span className="text-lg text-gray-700 font-medium">Explore OUR Blogs</span>
      <h1 className="text-4xl font-bold text-gray-900 mt-4">Accelerate Digital Transformation</h1>
    </div>

    {/* Blog Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Blog Post 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-40 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}></div>
        <div className="mt-4">
          <span className="text-sm text-gray-600">Devid Kaorn. 1 Jan - Today</span>
          <div className="flex items-center mt-2">
            <h2 className="text-xl font-semibold text-gray-900">Small Business and Startup</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base text-gray-600 mt-2">
            Like to know the secret of transforming a 2-14 team into a 3x Super Bowl Dynasty.
          </p>
          <div className="mt-4 space-x-4">
            <span className="text-sm text-gray-500">Tax and Audit</span>
            <span className="text-sm text-gray-500">Management</span>
          </div>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-40 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}></div>
        <div className="mt-4">
          <span className="text-sm text-gray-600">Devid Kaorn. 1 Jan - Today</span>
          <div className="flex items-center mt-2">
            <h2 className="text-xl font-semibold text-gray-900">Small Business and Startup</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base text-gray-600 mt-2">
            Like to know the secret of transforming a 2-14 team into a 3x Super Bowl Dynasty.
          </p>
          <div className="mt-4 space-x-4">
            <span className="text-sm text-gray-500">Tax and Audit</span>
            <span className="text-sm text-gray-500">Management</span>
          </div>
        </div>
      </div>

      {/* Blog Post 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-40 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}></div>
        <div className="mt-4">
          <span className="text-sm text-gray-600">Devid Kaorn. 1 Jan - Today</span>
          <div className="flex items-center mt-2">
            <h2 className="text-xl font-semibold text-gray-900">Small Business and Startup</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base text-gray-600 mt-2">
            Like to know the secret of transforming a 2-14 team into a 3x Super Bowl Dynasty.
          </p>
          <div className="mt-4 space-x-4">
            <span className="text-sm text-gray-500">Tax and Audit</span>
            <span className="text-sm text-gray-500">Management</span>
          </div>
        </div>
      </div>

      {/* Blog Post 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-40 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}></div>
        <div className="mt-4">
          <span className="text-sm text-gray-600">Devid Kaorn. 1 Jan - Today</span>
          <div className="flex items-center mt-2">
            <h2 className="text-xl font-semibold text-gray-900">Small Business and Startup</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-base text-gray-600 mt-2">
            Like to know the secret of transforming a 2-14 team into a 3x Super Bowl Dynasty.
          </p>
          <div className="mt-4 space-x-4">
            <span className="text-sm text-gray-500">Tax and Audit</span>
            <span className="text-sm text-gray-500">Management</span>
          </div>
        </div>
      </div>

    </div>

    {/* Show More Button */}
    <div className="text-center">
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Show More Blogs →
      </button>
    </div>

  </div>
</div>
  )
}

export default Blogs