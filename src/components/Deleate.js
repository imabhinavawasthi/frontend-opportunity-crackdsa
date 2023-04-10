import React from 'react'
import { useNavigate } from 'react-router-dom'

const Deleate = ({token,id}) => {

 
  const navigate=useNavigate()


    async function Del(){
        try{
            const options={
                method: 'DELETE',
                headers: {
                          'Authorization':`Bearer ${token}`
              },
             
            }

        const res=await fetch('https://opportunity.run-ap-south1.goorm.site/jobs/'+id,options)
        const data =await res.json()
       
        navigate('/')
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <div className=''>
   <button onClick={()=>{Del()}} className='bg-[#2FCDFF] hover:bg-[#116f8b]  border-[#0f94bdc7] border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold max-lg:w-[100%]  active:scale-105'>
          Delete Internship
          </button>
    </div>
  )
}

export default Deleate
