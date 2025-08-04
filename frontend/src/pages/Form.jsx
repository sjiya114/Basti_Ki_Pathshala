import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
function Form() {
    const navigate=useNavigate();
    const fileRef=useRef(null);
    const [data,setData]=useState({
      name:"",
      email:"",
      phone:"",
      gender:"",
      date:"",
      address:"",
      availability:"",
      description:"",
    })
    const onChangeHandler=(e)=>
    {
      e.preventDefault();
      setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>
      {
       e.preventDefault();
       document.getElementById('form').reset();
       toast.success("Thankyou for filling form we will contact you shortly");
       navigate("/");
      }
  return (
      <div className=' fixed inset-0 flex  justify-center items-center rounded-lg  bg-white/20  z-[100px]'>
      <form id='form' onSubmit={handleSubmit} className='flex   flex-col px-10 w-[400px] h-fit   my-20  max-w-[300px]:w-full rounded-lg py-10 bg-white space-y-1' action="">
        <div className='flex flex-row justify-between'>
         <h1 className='text-black font-bold'>Volunteer Form</h1>
         <img src={assets.cross_icon} onClick={()=>navigate("/")}  className='w-6 h-6' alt="" />
        </div>
        <p className='text-gray-500 '>Please fill form to  apply for volunteering</p>
        <label htmlFor="name">FullName</label>
        <input onChange={onChangeHandler} name='name' value={data.name}  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
        <label htmlFor="email">Email</label>
        <input onChange={onChangeHandler} name='email' value={data.email} className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
        <label htmlFor="phone">Phone Number</label>
        <input onChange={onChangeHandler} name='phone' value={data.phone}  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
         <label htmlFor="gender" >Gender</label>
         <select name="gender" id="gender"  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" value={data.gender} onChange={onChangeHandler}  >
          <option value="male">Male</option>
          <option value="female">Female</option>
         </select>
        <label htmlFor="date">DOB</label>
        <input onChange={onChangeHandler} name='date' value={data.date}  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="date" />
        <div className='flex flex-row   justify-between'>
           <label htmlFor="address">Address</label>
        <input onChange={onChangeHandler} name='address' value={data.address}  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
        </div>
        <div className='flex flex-row   justify-between'>
         <label  htmlFor="availability">Availability</label>
        <input onChange={onChangeHandler} name='availability' value={data.availability}  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
        </div>
         <div className='flex flex-row justify-between'>
          <label htmlFor="upload">Upload Resume</label>
          <input type="file" name='upload' onChange={(e)=>{fileRef.current=e.target.files[0]}} className='border-1  border-gray-700 rounded-lg py-1 px-1' ref={fileRef}  />
         </div>
        <label  htmlFor="description">Why do you want to volunteer?</label>
         <textarea name="description" type="text"  onChange={onChangeHandler} value={data.description} className='border-1 border-gray-700 rounded-lg py-1 px-1'    id=""></textarea>
        <button type='submit' className='bg-indigo-950 mt-2 rounded-md px-2 py-2  text-white'>Submit</button>  
      </form>
    </div>
    
  )
} 

export default Form
