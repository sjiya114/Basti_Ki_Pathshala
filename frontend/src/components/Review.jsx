import React from 'react'
import ReviewCard from './ReviewCard'
import { reviewData } from '../assets/assets'
import { data } from 'react-router-dom'

function Review() {
  return (
    <>
     <div id='review'  className='max-w-screen-xl mx-auto mt-20'>
        <h1 className="text-white   text-center font-bold text-4xl">Intern Insights</h1>
        <p className='text-white font-semibold text-center text-xl mt-4'>Here from our valued members</p>
    </div>
    <div className='mt-10 flex flex-row flex-wrap w-full'>
    {reviewData.map((data)=>(
      <ReviewCard description={data.description} profile={data.profile}  />
    ))}
    </div>
    
    </>
  )
}

export default Review
