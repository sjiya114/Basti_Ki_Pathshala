import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div id='footer' className='flex flex-col mt-10 w-full  text-gray-300 '  >
     <div className='w-full flex flex-col border-b-1 border-gray-400 py-10 items-center ' >
         <h1 className=' font-semibold'>Basti Ki PathShala</h1>
       <p className='text-sm pt-2 font-semibold'>Basti Ki Pathshala is a grassroots initiative focused on providing free education, mentorship, and resources to underprivileged children in urban slums. We believe education is every child’s right — not a privilege.</p>
    </div>
    <div className='flex flex-row w-full items-center justify-center space-x-4'>
      <p className='py-5 text-sm'>Copyright © 2025 - Basti Ki Pathshala Foundation</p>
      <button onClick={()=>{scroll(0,0,0)}} className='bg-yellow-300 mr-0 rounded-full cursor-pointer px-3 py-2'> <img src={assets.arrow} className='w-6 h-6' alt="" /></button>
   </div>  
    </div>
    
  )
}

export default Footer
