import React from 'react'
import { assets } from '../assets/assets'

function Results() {
  return (
   <div id='result'
  style={{ backgroundImage: `url(${assets.image2})` }}
  className="relative bg-cover w-full h-100 max-md:h-160 mt-20"
>
  {/* Blur overlay */}
  <div className="absolute inset-0 backdrop-blur-xs bg-black/20 z-10" />

  {/* Content above blur */}
  <ul className="relative z-20 font-bold text-white flex flex-row max-md:flex-col max-md:space-y-6 justify-evenly pt-40 text-4xl">
    <li className="flex flex-col items-center">
      <span className="text-yellow-400">31245</span> <span>Life Changed</span>
    </li>
    <li className="flex flex-col items-center">
      <span className="text-yellow-400">28976</span> <span>Meals Served</span>
    </li>
    <li className="flex flex-col items-center">
      <span className="text-yellow-400">19854</span> <span>Interns</span>
    </li>
    <li className="flex flex-col items-center">
      <span className="text-yellow-400">10,989</span> <span>Supporters</span>
    </li>
  </ul>
</div>

  )
}

export default Results
