import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

 //import card
 import Card from "../components/Card"
 import Card2 from "../components/Card2"

 import loder from '../images/loading.gif'





const All_intern = () => {

    const {category} =useParams()
    const [internships,setinternships]=useState([])
    const [loading ,setloading]=useState(false)
    const [error,seterror]=useState('')
    useEffect(()=>{
      async function getintern(){
        setloading(true)
        try{
          const res=await fetch(`https://opportunity.run-ap-south1.goorm.site/jobs?tags=${category}`)
          const data=await res.json()
          setinternships(data)
          setloading(false)
        }
        catch(err){
          seterror(err.message)
           setloading(false)
        }
      }
      getintern()
    },[category])
    console.log(internships)
    if(error!==''){
      return <h1 className='md:text-4xl text-xl text-indigo-600 font-mono text-center py-10'>{error}</h1>
    }
    if(loading){
        return  (<div className=" flex justify-center items-center 2xl:h-[63vh] lg:min-h-[53vh] md:h-[45vh] h-[55vh]">
        <img src={loder} className='h-[250px] w-[250px] '  alt='spinner' />
       </div>)
      }


    
  return (<div>
    <h1 className='font-semibold md:text-[35px] text-[20px] poppins-font text-[#110a60] md:mt-[37px] mt-[25px] md:ml-[44px] ml-[22px] capitalize'>{category}</h1>

    <div className='flex flex-wrap gap-10 xl:justify-around justify-center flex-row flex-wrap pt-3 px-3 sm:pt-5 sm:px-5'>
        {(internships!=="No items present")?internships.map((data,index)=>{
          return <Card2 data={data} key={index}/>
        }):<p className="flex justify-center py-4 text-2xl items-center text-indigo-600 font-bold">Currently Not Available</p>}
    </div>
         </div> 
  )
}

export default All_intern
