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
   <button onClick={()=>{Del()}} className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          Delete
          </button>
    </div>
  )
}

export default Deleate
