import React from 'react'
import { assets } from '../assets/assets'
import {animated,useSpring} from '@react-spring/web'
function Number({n})
{
const {number}=useSpring({
  from:{number:0},
  number:n,
  delay:200,
  // config:{mass:1,tension:20,friction:10}
})
return(<animated.span className="text-yellow-400">{number.to((n)=>n.toFixed(0))}</animated.span>
);
}

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
      <Number n={31245} /> <span>Life Changed</span>
    </li>
    <li className="flex flex-col items-center">
      <Number n={28976} /> <span>Meals Served</span>
    </li>
    <li className="flex flex-col items-center">
      <Number n={19854} /> <span>Interns</span>
    </li>
    <li className="flex flex-col items-center">
       <Number n={10989} /><span>Supporters</span>
    </li>
  </ul>
</div>

  )
}

export default Results
