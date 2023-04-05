import { NavLink } from "react-router-dom" 
 import Card from "./Card"
import dummy_data from "../Dummydata"

const Featuerd = ({catogery,internship, loading}) => {
  
  return (
    <>
    {!loading && (
      <>
    <div className='flex flex-row pt-[50px] justify-between'>
    <h1 className='poppins-font font-[500px] lg:text-[32px] md:text-2xl text-lg  inline-block'>{catogery}</h1>
   <NavLink to={`${catogery}/all_intern`}> <p className='text-xl text-blue-500 cursor-pointer capitalize hover:text-blue-800 '>see  all</p></NavLink>
    </div>
    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 px-3 sm:pt-6 sm:px-5 '>
        {internship.map((data,index)=>{
          return <Card data={data} key={index}/>
        })}
    </div>
    </>)
    }
    </>
      
 )
}

export default Featuerd
