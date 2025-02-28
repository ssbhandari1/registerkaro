import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-12 bg-[#011B5B]">
  <div className="container mx-auto px-6 lg:px-12 space-y-12 ">
<div></div>
<div className='flex items-center flex-col gap-3'>
   <div className="p-3 bg-[#FFA229] text-white rounded-full">
   <FaArrowUp className='text-xl'/>
                </div>

  <span  className='text-[#AAB5CD]'>© 2024 Registerkaro. All Rights Reserved.</span>
</div>
  </div>
</div>
  )
}

export default Footer