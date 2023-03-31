import React, { useState } from 'react'
import logo from '../images/logo192.png'
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendarEvent } from 'react-icons/bs';
import { FaMoneyBill } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import {useEffect} from 'react'
const MoreDetails = ({internships, loading}) => {
  const style = { color: "white" }
  const {id}=useParams()
  console.log(internships)
  const [data,setdata]=useState([])
  useEffect(()=>{
    if(internships.length!==0){
      const datas=internships.filter((intern)=>{
        return intern._id===id
      })
      setdata(datas)
      
    }
    
    },[internships])
    
  console.log(data)
  return (
    <div className='lg:mx-32 bg-gray-50 mt-[2px]'>
     <div className='bg-[#110A60] lg:rounded-[35px] rounded-3xl'>
      <div className=' sm:pb-4 pb-2  flex items-center lg:flex-row flex-col'>
        <div className=' flex items-center w-[100%] space-x-4 sm:space-x-6 lg:space-x-10 lg:px-5 sm:px-3 px-2 '>
          <div className='lg:h-[230px] sm:h-32 h-25 rounded-full '>
            <img src={(data.length!==0)?data[0].image:" "} alt="" className='lg:h-[250px] lg:w-[250px] rounded-full sm:h-32 sm:w-32 h-25 w-25 ' />
          </div>
          <div className='lg:ml-[52px]  mt-4'>
            <h1 className='font-Poppins text-[#2FCDFF]  lg:mt-[2px] lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold capitalize'>{(data.length!==0)?data[0].title:" "}</h1>
            <h1 className='font-Playfair text-white lg:text-3xl md:text-2xl text-lg font-semibold capitalize'>{(data.length!==0)?data[0].company:" "}</h1>
            <div>
              <div className='flex mt-4 items-center'>
                <BsCalendarEvent style={style} className='text-white fill-white stroke-white lg:h-8 lg:w-8' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>{(data.length!==0)?data[0].duration:" "}</h5>
              </div>
              <div className='flex mt-1 lg:mt-4 items-center'>
                <FaMoneyBill style={style} className='text-white fill-white lg:h-8 lg:w-8 stroke-white' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>Rs. {(data.length!==0)?data[0].stipend:" "}</h5>
              </div>
              <div className='flex mt-1 lg:mt-4 items-center mb-4'>
                <HiLocationMarker style={style} className='text-white fill-white lg:h-8 lg:w-8 stroke-white' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4 capitalize'>{(data.length!==0)?data[0].location:" "}</h5>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className=' mx-10 flex flex-col items-center my-2 lg:justify-end px-21  lg:items-end'>
          <button className='bg-[#2FCDFF] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold max-lg:w-[100%]  active:scale-105'>
          Apply Now
          </button>
          <p className='text-white font-Poppins font-medium my-2'>Last date to apply: {(data.length!==0)?data[0].lastdate:" "}</p>
        </div>
       </div>
      <div className='p-8'>
        <h1 className='font-Poppins font-bold md:text-2xl text-xl mb-2'>
          Skills
        </h1>
        <h5 className='font-Poppins font-semibold px-3 text-lg'>Key Skills</h5>
        <div className='flex flex-wrap py-2'>
        {(data.length!==0)?data[0].skills.map((detail)=>{
          return  <p className='bg-[#D9D9D9] capitalize border-black border border-solid rounded-xl px-4 py-[2px] font-Poppins font-semibold  text-center lg:mx-5 mx-2 mb-2'>{detail}</p>
        }):" "}
        </div>
        <h5 className='font-Poppins font-semibold px-3 text-lg'>Other Skills</h5>
        <div className='flex flex-wrap py-2'>
        <p className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-[2px] font-Poppins font-semibold  text-center lg:mx-5 mx-2 mb-2'>React JS</p>
          <p className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-[2px] font-Poppins font-semibold  text-center lg:mx-5 mx-2 mb-2'>Communication</p>
          <p className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-[2px] font-Poppins font-semibold  text-center lg:mx-5 mx-2 mb-2'>React JS</p>
        </div>
        <h1 className='font-Poppins font-bold text-xl md:text-2xl '>
          Details
        </h1>
        {(data.length!==0)?data[0].requirements.map((detail)=>{
          return <p className='font-Poppins font-medium p-3 capitalize'>{detail}</p>
        }):" "}
       
      </div>
    </div>
  )
}

export default MoreDetails