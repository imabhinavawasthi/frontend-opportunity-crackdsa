import { useParams } from "react-router-dom"

 //import card
 import Card from "../components/Card"
import { useEffect, useState } from "react"



const All_intern = ({frontend_intern, full_stack, backend_intern}) => {

    const {category} =useParams()
    const [internships,setinternships]=useState([])

    useEffect(()=>{
      async function getintern(){
        try{
          const res=await fetch(`https://opportunity.run-ap-south1.goorm.site/jobs?tags=${category}`)
          const data=await res.json()
          setinternships(data)
        }
        catch{

        }
      }
      getintern()
    },[])
    
  return (<div>
    <h1 className='font-semibold md:text-[35px] text-[20px] poppins-font text-[#110a60] md:mt-[37px] mt-[25px] md:ml-[44px] ml-[22px] capitalize'>{category} Internships</h1>

    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 px-3 sm:pt-5 sm:px-5'>
        {internships.map((data,index)=>{
          return <Card data={data} key={index}/>
        })}
    </div>
         </div> 
  )
}

export default All_intern
