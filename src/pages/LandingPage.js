import { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { Typewriter, cursor } from 'react-simple-typewriter'

import Featuerd from '../components/Featuerd';
const LandingPage = ({ frontend_intern, backend_intern, full_stack, loading }) => {
  const [category, setcategory] = useState('')

  return (
    <div>
      <div className=''>
        <h1 className='font-semibold lg:text-[40px] text-[25px] md:text-[35px] text-center md:pt-[50px] pt-[25px] font-serif mx-3'>Explore Your Dream <span className='text-indigo-600'><Typewriter words={['Internships']} loop={100000} cursor cursorStyle='|' typeSpeed={190} /></span> Here</h1>
        <div className=' flex flex-row justify-center md:mt-[20px] mt-[15px] mx-[10px] '>
          <BiSearch className='md:text-[44px] text-[25px] h-[30px] text-[#110a60] bg-slate-200 md:h-[50px]  mb-[9px] rounded-l-[30px] pl-[11px] cursor-pointer' />
          <div className='relative '>
            <p className='absolute md:right-3 right-2 hover:text-gray-200 bg-[#110a60] text-white md:px-[14px] px-[8px] md:py-1 py-0 rounded-2xl md:top-[10px] top-[5px] md:text-base text-sm cursor-pointer'>search</p>
            <input name='search-type' value={category} className='md:h-[50px] h-[30px] md:w-[620px]  w-[260px] md:text-2xl text-lg font-semibold  bg-slate-200 rounded-r-[30px] px-5' onChange={(e) => { setcategory(e.target.value) }} /></div>
        </div>

        <h1 className='text-center poppins-font font-semibold lg:text-[40px] text-indigo-600 text-[23px] md:text-[30px] py-4 mx-[15px]'>Top Internships Available Now</h1>
      </div>

      <div className='lg:mx-[45px] mx-[22px] mt-4'>
        <Featuerd catogery='Full-stack' internship={full_stack.filter((intern) => {
          return intern.exclusive
        })} loading={loading} />
        <Featuerd catogery='Frontend' internship={frontend_intern.filter((intern) => {
          return intern.exclusive
        })} loading={loading} />
        <Featuerd catogery='Backend' internship={backend_intern.filter((intern) => {
          return intern.exclusive
        })} loading={loading} />

      </div>
    </div>
  )
}

export default LandingPage
