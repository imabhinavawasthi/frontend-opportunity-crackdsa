import {useState} from 'react'
import { BiSearch } from 'react-icons/bi';
import {Typewriter,Cursor} from 'react-simple-typewriter'

import Featuerd from '../components/Featuerd';
const LandingPage = () => {
    const [category,setcategory]=useState('')
   
    
  return (
    <div>
      <h1 className='font-semibold md:text-[33px] text-[20px] poppins-font text-[#110a60] md:mt-[37px] mt-[25px] md:ml-[44px] ml-[22px]'>Opportunity.com</h1>
      <h1 className='font-semibold lg:text-[40px] text-[25px] md:text-[35px] text-center md:mt-[50px] mt-[25px] font-serif mx-3'>Explore Your Dream <span className='text-[#110a60]'><Typewriter  words={['Internships']} loop={100000} cursor cursorStyle='|' typeSpeed={190} /></span> Here</h1>
      <div className=' flex flex-row justify-center md:mt-[20px] mt-[15px] mx-[10px] '>
      <BiSearch className='md:text-[44px] text-[25px] h-[30px] text-[#110a60] bg-slate-200 md:h-[50px]  mb-[9px] rounded-l-[30px] pl-[11px] cursor-pointer'/>
      <div className='relative '>
      <p className='absolute md:right-3 right-2 hover:text-gray-200 bg-[#110a60] text-white md:px-[14px] px-[8px] md:py-1 py-0 rounded-2xl md:top-[10px] top-[5px] md:text-base text-sm cursor-pointer'>search</p>
      <input name='search-type' value={category}  className='md:h-[50px] h-[30px] md:w-[620px]  w-[260px] md:text-2xl text-lg font-semibold  bg-slate-200 rounded-r-[30px] px-5' onChange={(e)=>{setcategory(e.target.value)}}/></div>
      </div>
      
      <h1 className='text-center poppins-font font-semibold lg:text-[40px] text-[23px] md:text-[30px] mt-4 mx-[15px]'>Top Internships Available Now</h1>
    <div className='lg:mx-[45px] mx-[22px] mt-4'>
      <Featuerd catogery='Frontend Developer'/>
      <Featuerd  catogery='Backend Developer'/>

    </div>
    </div>
  )
}

export default LandingPage
