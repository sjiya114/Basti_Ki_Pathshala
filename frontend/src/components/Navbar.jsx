import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
     const navigate=useNavigate();
     const [hidden,setHidden]=useState(true);
  return (
    <>
    <div className=' fixed z-50 max-md:hidden right-0 top-0 left-0  h-24  rounded-b-xl  text-white flex flex-row   bg-black shadow-md shadow-white py-2  border-t-1  border-gray-400  px-4 justify-between items-center  '   >
      {/* <img src={ assets.logo} className='w-40 h-14'  alt="logo" /> */}
      <div className='flex flex-row font-bold font-stretch-extra-expanded   space-x-10'  >
      <NavLink to="#home" >Home</NavLink>
      <NavLink to="#about">About</NavLink>
      <NavLink to="#review"  >Reviews</NavLink>
       <NavLink to="#contact"  >Contact</NavLink>
      </div>
       <div  className='flex flex-row font-bold space-x-6'>
         <button className='border-1 border-gray-400 rounded-4xl px-4 py-2'  >Contact</button>
       <button onClick={()=>{navigate("/register")}} className='border-1  bg-white text-black shadow-2xl shadow-white hover:shadow-amber-100  border-gray-400 rounded-4xl px-4 py-2'>Join Us</button>
       </div> 
    </div>
    {/* // mobile view */}
     <div className='fixed z-50 right-0 top-0 left-0 bg-black text-white flex flex-col   md:hidden  rounded-lg mt-4 px-4 hover:border-indigo-900 hover:text-white justify-between mb-5 py-4  border-b-2  shadow-2xl shadow-black/60 border-b-gray-400   '>
        <div className='flex  flex-row justify-between'>
          <img onClick={()=>{setHidden(!hidden)}}  src={`${hidden?assets.menu_icon:assets.cross_icon}`} className='w-8 h-8 mt-2' alt=""/>
        </div>
        {!hidden  &&<> < ul className='flex flex-col   items-center space-y-4 font-bold text-xl'>
     <NavLink to="#home" >Home</NavLink>
      <NavLink to="#about">About</NavLink>
      <NavLink to="#review"  >Reviews</NavLink>
       <NavLink to="#contact"  >Contact</NavLink>
      </ul> 
      <div  className='flex flex-row max-md:mt-4 max-md:space-y-4  max-md:flex-col font-bold space-x-6'>
         <button className='border-1 border-gray-400 rounded-4xl px-4 py-2'  >Contact</button>
       <button onClick={()=>{navigate("/register")}} className='border-1  bg-white text-black shadow-2xl shadow-white hover:shadow-amber-100  border-gray-400 rounded-4xl px-4 py-2'>Join Us</button>
       </div> </>
}            
             </div> 
             </>
  )
}

export default Navbar
