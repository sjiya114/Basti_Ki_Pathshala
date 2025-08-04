import React from 'react'

function ReviewCard({description,profile}) {
  return (
      <div className='mt-20 mb-10   hover:scale-105 max-w-screen-xl mx-auto flex flex-wrap items-center justify-center' >
      <div className='flex flex-row  max-md:flex-col max-md:w-[60%]   shadow-2xl shadow-white w-[640px] h-[300px] bg-black space-x-4 border-1  max-md:h-fit border-white rounded-lg'>
        <img src={profile} className='w-fit   max-md:w-full h-full rounded-lg' alt="review" />
        <div className='text-white max-md:py-6 px-4 flex flex-col space-y-10 items-center justify-center'>
          <p>⭐⭐⭐⭐⭐</p>
          <p className='text-sm font-semibold'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
