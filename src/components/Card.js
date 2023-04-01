import React from 'react'
import { NavLink} from 'react-router-dom'


const Card = ({data}) => {
  return (
    <div className='w-72 lg:w-[300px]  hover:shadow-lg rounded-3xl sm:mb-10 mb-8 xl:mx-2 sm:mx-5 '>
    <div className='bg-[#110A60] flex justify-between p-5 items-center rounded-t-3xl'>
        <img src={data.image} alt="" className='h-10 w-10 rounded-[50%]'/>
        <p className='font-Playfair text-white text-xl capitalize'>{data.company}</p>
    </div>
    <div className='bg-[#F0F0F0] rounded-b-3xl px-2'>
    <p className='font-Poppins p-2'> Duration: {data.duration}</p>
    <p className='font-Poppins p-2 capitalize'>Location: {data.location}</p>
    <p className='font-Poppins p-2'>Last date to apply: {data.lastdate}</p>
   <NavLink to={`/${data._id}`} ><p className='content-center  underline text-[#306AFF] hover:text-blue-800 flex justify-center pb-2'>View More</p></NavLink> 
    </div>
</div>
  )
}

export default Card
