import { NavLink } from "react-router-dom" 
 import Card from "./Card"


const Featuerd = ({catogery,internship}) => {
  
  return (
    
     
      <>
    <div className='flex flex-row pt-[50px] justify-between'>
    <h1 className='poppins-font font-[500px] lg:text-[32px] capitalize md:text-2xl text-lg md:font-semibold text-[#110A60] inline-block'>{catogery} Internships</h1>
    {(catogery!=='Top Results')?
   <NavLink to={`${catogery}/all_intern`}> <p className='sm:text-xl text-lg text-blue-500 cursor-pointer capitalize hover:text-blue-800 '>see  all</p></NavLink>:''}
    </div>
    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 px-3 sm:pt-7 sm:px-5 '>
        {(typeof(internship)==='string') ?<h2 className="text-xl md:text-4xl font-semibold text-indigo-600 font-mono py-8">No results</h2>:internship.map((data,index)=>{
          return <Card data={data} key={index}/>
        })}
    </div>
    </>
    
    
      
 )
}

export default Featuerd
