import { NavLink } from "react-router-dom" 
 import Card from "./Card"
 import Card2 from "./Card2"


const Featuerd = ({catogery,internship}) => {
  
  return (
    <>
     {(typeof(internship)==='string') ?"": <>
    <div className='flex flex-row pt-[50px] justify-between'>
    <h1 className='poppins-font font-[500px] lg:text-[32px] capitalize md:text-2xl text-lg md:font-semibold text-[#110A60] inline-block'>{catogery} </h1>
    {(catogery!=='Top Results')?
   <NavLink to={`${catogery}/all_intern`}> <p className='sm:text-xl text-lg text-blue-500 cursor-pointer capitalize hover:text-blue-800 '>see  all</p></NavLink>:''}
    </div>
    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 gap-10 px-3 sm:pt-7 sm:px-5 '>
       {internship.map((data,index)=>{
          return <Card2 data={data} key={index}/>
        })}
    </div>
    </>}
    </>
    
    
      
 )
}

export default Featuerd
