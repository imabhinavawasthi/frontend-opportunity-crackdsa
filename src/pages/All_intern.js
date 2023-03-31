import { useParams } from "react-router-dom"

//import dummydata
 import dummy_data from "../Dummydata"
 //import card
 import Card from "../components/Card"



const All_intern = ({internships}) => {

    const {catogery} =useParams()
    console.log(internships)
  return (<div>
    <h1 className='font-semibold md:text-[35px] text-[20px] poppins-font text-[#110a60] md:mt-[37px] mt-[25px] md:ml-[44px] ml-[22px]'>{catogery} Internships</h1>

    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 px-3 sm:pt-5 sm:px-5'>
        {internships.map((data,index)=>{
          return <Card data={data} key={index}/>
        })}
    </div>
         </div> 
  )
}

export default All_intern
