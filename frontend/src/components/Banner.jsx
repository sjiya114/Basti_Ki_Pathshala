import React from 'react'
import { assets } from '../assets/assets'

function Banner() {
  return (
       <div id='home'
      style={{ backgroundImage: `url(${assets.image6})` }}
      className="relative bg-cover bg-center  w-full h-200 "
    >
      {/* Blur overlay */}
      <div className="absolute inset-0  backdrop-contrast-125 backdrop-brightness-150 backdrop-blur-xs  bg-black/80   z-10" />
       <div className='relative z-20  flex flex-col  items-center justify-center'>
          <h1 className='text-white text-8xl max-md:px-4 max-md:text-6xl text-shadow-2xs text-shadow-black font-bold mt-[45vh] ' >Basti Ki Pathshala Foundation</h1>
          <p className='text-white text-xl max-md:text-lg max-md:px-4 font-normal text-shadow-2xs text-shadow-black max-w-screen-xl mx-auto mt-2' >Join us in our mission to break the barriers of
             education in underserved communities. With your support, we can provide quality education to children living in slum areas, empowering them with the knowledge and skills they need to build a brighter future. Together, let’s make a difference. Take action today and be a part of the change!</p>
       </div>
    </div>
   
    
  )
}

export default Banner
