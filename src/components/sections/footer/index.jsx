import React from 'react'

const Footer = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-12 space-y-12">

    {/* Footer Section */}
    <footer className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* First Column: Text and Social Icons */}
        <div className="flex flex-col space-y-4">
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore beatae assumenda aperiam numquam corporis
            facere asperiores modi dicta officia, consequuntur voluptatem nobis molestiae doloribus repellat illo hic,
            molestias incidunt?
          </p>
          <div className="flex space-x-4 text-blue-600">
            <a href="#" className="hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Start a Business Sections (4 Columns) */}
        <div className="flex flex-col space-y-4">
          <h6 className="text-lg font-semibold text-gray-900">Start a Business</h6>
          <div className="space-y-2 text-gray-600">
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h6 className="text-lg font-semibold text-gray-900">Start a Business</h6>
          <div className="space-y-2 text-gray-600">
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h6 className="text-lg font-semibold text-gray-900">Start a Business</h6>
          <div className="space-y-2 text-gray-600">
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h6 className="text-lg font-semibold text-gray-900">Start a Business</h6>
          <div className="space-y-2 text-gray-600">
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
            <span>Features</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section: Copyright and Arrow */}
      <div className="flex justify-between items-center mt-12 border-t pt-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
          <span>@2024 Copyright Reserved</span>
        </div>
      </div>
    </footer>

  </div>
</div>
  )
}

export default Footer