import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Join() {
    const navigate=useNavigate();
    return (
        <div id='join' className='flex flex-row  max-md:flex-col mt-30 hover:scale-110 max-w-screen-xl mx-auto'>
            <div className='w-1/2 max-md:w-full'>
                <img src={assets.image1} className='w-full h-fit rounded-lg shadow-lg shadow-zinc-800' alt="image" />
            </div>
            <div className='w-1/2 max-md:w-full text-white px-6 py-4'>
                <h1 className='font-bold text-3xl'>Join Our Team</h1>
                <p className='mt-6 tracking-wide'>At Basti Ki Pathshala Foundation, we’re not
                    just building a team; we’re assembling
                    a force for change. As we continue our
                    mission to break barriers and empower communities through
                    education, we invite passionate individuals to join us in
                    making a tangible difference in the lives of underserved children.
                    Whether you’re a seasoned educator, a community organizer, or
                    simply someone with a heart for social impact, there’s a place
                    for you in our team. Together, we’ll collaborate, innovate,
                    and inspire, working towards a future where every child has the opportunity to thrive.
                    Join us in this rewarding journey of transformation. Together,
                    let’s pave the way for brighter tomorrows and empower futures, one child at a time.</p>
                      <button onClick={()=>{navigate("/register")}}  className='border-2 border-yellow-400 font-bold hover:bg-yellow-400 mt-6 px-2 py-2 rounded-lg bg-white text-black'>Join Now</button>
            </div>
          
        </div>
    )
}

export default Join
