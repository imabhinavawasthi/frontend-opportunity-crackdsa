import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendarEvent } from 'react-icons/bs';
import { FaMoneyBill } from 'react-icons/fa';
import {useParams } from 'react-router-dom';
import {useEffect} from 'react'
import Deleate from '../components/Deleate';
import Update from '../components/Update';
const MoreDetails = () => {
  const style = { color: "white" }
  const {id}=useParams()
 
  const token=localStorage.getItem('token')
   const [data,setdata]=useState({})
  const [loading,setloading]=useState(true)
  const [update,setupdate]=useState(false)
  const [popup,setpopup]=useState('')

  function setpop(str){
    setpopup(str)
}

     function uptodate(){
      setupdate(!update)
     }

    useEffect(()=>{
      const get=async()=>{
        setloading(true)
         try{
          const res=await fetch('https://opportunity.run-ap-south1.goorm.site/jobs/'+id)
          const item= await res.json()
          console.log(item)
          setdata(item)
          setloading(false)
         }catch(err){
          console.log(err.message)
         }
      }
      
      get()
   console.log(data)
    },[id])
   
    
    if(loading===true){

      return(<div className='py-7 sm:py-10 px-10 sm:px-16 text-xl sm:text-2xl font-semibold font-mono text-[#110a60]'>loading...</div>)
    }

  return (
    <div className='lg:mx-32 bg-gray-50 mt-[1px]'>
   
     <div className='bg-[#110A60] lg:rounded-[35px] rounded-3xl'>
      <div className=' sm:pb-4 pb-2  flex items-center lg:flex-row flex-col'>
        <div className=' flex items-center w-[100%] space-x-4 sm:space-x-6 lg:space-x-12 lg:px-5 sm:px-3 px-2 '>
          <div className='lg:h-[230px] sm:h-32 h-25 rounded-full '>
            <img src={'https://opportunity.run-ap-south1.goorm.site'+data.image} alt="" className='lg:h-[250px] lg:w-[250px] rounded-full sm:h-32 sm:w-32 h-25 w-25 ' />
          </div>
          <div className='lg:ml-[52px]  mt-4'>
            <h1 className='font-Poppins text-[#2FCDFF]  lg:mt-[2px] lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold capitalize'>{data.title}</h1>
            <h1 className='font-Playfair text-white lg:text-3xl md:text-2xl text-lg font-semibold capitalize'>{data.company}</h1>
            <div>
              <div className='flex mt-4 items-center'>
                <BsCalendarEvent style={style} className='text-white fill-white stroke-white lg:h-8 lg:w-8' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>{data.duration}</h5>
              </div>
              <div className='flex mt-1 lg:mt-4 items-center'>
                <FaMoneyBill style={style} className='text-white fill-white lg:h-8 lg:w-8 stroke-white' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>Rs. {data.stipend}</h5>
              </div>
              <div className='flex mt-1 lg:mt-4 items-center mb-4'>
                <HiLocationMarker style={style} className='text-white fill-white lg:h-8 lg:w-8 stroke-white' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4 capitalize'>{data.location}</h5>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className=' mx-10 flex flex-col items-center my-2 lg:justify-end px-21  lg:items-end'>
          <button className='bg-[#2FCDFF] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold max-lg:w-[100%]  active:scale-105'>
          Apply Now
          </button>
          <p className='text-white font-Poppins font-medium my-2'>Last date to apply: {data.lastdate}</p>
        </div>
       </div>
      <div className='p-8'>
        <h1 className='font-Poppins font-bold md:text-2xl text-xl mb-2'>
          Skills
        </h1>
        <h5 className='font-Poppins font-semibold px-3 text-lg'>Key Skills</h5>
        <div className='flex flex-wrap py-2'>
        {data.skills.map((detail)=>{
          return  <p className='bg-[#D9D9D9] capitalize border-black border border-solid rounded-xl px-4 py-[2px] font-Poppins font-semibold  text-center lg:mx-5 mx-2 mb-2'>{detail}</p>
        })}
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
        {data.requirements.map((detail)=>{
          return <p className='font-Poppins font-medium p-3 capitalize'>{detail}</p>
        })}
       
      </div>
     {token && <div className='p-3'>
     <Deleate token={token} id={data._id}/> 
     <button className='bg-[#2FCDFF] border-black border border-solid rounded-xl px-14 hover:text-black my-2 py-1 font-Poppins font-semibold max-lg:w-[100%]  active:scale-105' onClick={()=>{uptodate()}}>Update</button>
     {update&& <Update data={data} token={token} uptodate={uptodate} id={id} setpop={setpop}/>}
     </div>}

     {popup!==''&&<h1 className=' text-center text-xl  text-indigo-600 p-2'>{popup}</h1>}
    </div>
  )
}

export default MoreDetails