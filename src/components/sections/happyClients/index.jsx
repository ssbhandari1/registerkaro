import React from 'react'

const HappyClients = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-12 space-y-12">
    
    {/* Section 1 - Our Happy Clients */}
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Our Happy Clients</h1>
      <p className="text-base text-gray-600 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti cum ex dicta est reiciendis? Atque
        fugiat odit magni! Excepturi, vel soluta! Iste nisi maiores temporibus porro aliquid, magni iusto!
      </p>
      
      {/* Company Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
          <img src="https://via.placeholder.com/40" alt="Company 1" className="w-16 h-16 object-contain" />
        </div>
        <div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
          <img src="https://via.placeholder.com/40" alt="Company 1" className="w-16 h-16 object-contain" />
        </div>
		<div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
          <img src="https://via.placeholder.com/40" alt="Company 1" className="w-16 h-16 object-contain" />
        </div>
        <div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
          <img src="https://via.placeholder.com/40" alt="Company 1" className="w-16 h-16 object-contain" />
        </div>
        <div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
          <img src="https://via.placeholder.com/40" alt="Company 1" className="w-16 h-16 object-contain" />
        </div>
		<div className="flex justify-center items-center h-20 w-20 bg-gray-200 rounded-full border border-gray-400">
          <img src="https://via.placeholder.com/40" alt="Company 1" className="w-16 h-16 object-contain" />
        </div>
      </div>
      
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Show More
      </button>
    </div>
    
   {/* Section 2 - Application Form Items */}
<div className="bg-yellow-400 p-3">
  <div className="flex gap-2"> {/* Reduced gap */}
    <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span className="text-lg text-gray-700">Fill up application form</span>
    </div>
    <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span className="text-lg text-gray-700">Fill up application form</span>
    </div>
    <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span className="text-lg text-gray-700">Fill up application form</span>
    </div>
    <div className="flex items-center space-x-2 p-4 w-full sm:w-1/2 lg:w-1/4">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span className="text-lg text-gray-700">Fill up application form</span>
    </div>
  </div>
</div>

    
  </div>
</div>
  )
}

export default HappyClients