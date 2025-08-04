import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div id='about' className='mt-20 px-10 py-10 rounded-lg max-w-screen-xl hover:scale-110  mx-auto  flex flex-row max-md:flex-col justify-center items-center'>
      <div className='w-1/2 max-md:w-full flex flex-row items-center justify-center space-x-4'  >
      <div className='flex max-xl:hidden flex-col space-y-4'>
       <img src={assets.image2} className='w-90 h-50 rounded-lg' alt="image1" />
       <img src={assets.sample3} className='w-90 h-50 rounded-lg   ' alt="image3" />
      </div>
       <img src={assets.sample1} alt="image2" className='w-100 h-100 max-md:w-fit h-fit rounded-lg' />
    </div>
      <div className='w-1/2 px-6  max-md:w-full  text-white '>
        <h1  className='font-bold text-3xl max-md:mt-6  '  >About Us</h1>
        <p className='pt-4 font-normal  tracking-wide'>Lighting the Path to Change with Basti Ki Pathshala Foundation</p>
        <p className='pt-2 font-normal tracking-wide'>At Basti Ki Pathshala Foundation, we are more than just an organization –
           we are a movement, driven by the belief that education is the cornerstone
            of empowerment. Established under the Indian Societies Act of 1860, we
             stand as a beacon of hope in underserved communities, dedicated to breaking
              the chains of poverty through the transformative power of learning.</p>
        <p className='pt-2 font-normal  tracking-wide'>Join us in our quest to rewrite the narrative of education,
           one success story at a time. Together, let’s build a world 
           where every child has the opportunity to dream, to learn, and to soar.
            Welcome to Basti Ki Pathshala Foundation – where hope is our currency, 
            and education is our legacy.</p>
      </div>
    </div>
    
  )
}

export default About
