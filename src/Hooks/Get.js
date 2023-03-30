import {useEffect,useState} from 'react'

const Get = () => {
const [all_intern,setall_intern]=useState([])
const [frontend_intern,setfrontend_intern]=useState()
const [backend_intern,setbackend_intern]=useState()
const [full_stack,setfullstack]=useState()
const [error,seterror]=useState('')
const base_url='https://opportunity.run-ap-south1.goorm.site'


function set (all_intern){


}
   useEffect(()=>{
    async function get(){
        try{
       const res=await fetch(base_url+'/jobs', { mode: 'no-cors'})
       const data=res .json()
       setall_intern(data)
       console.log(all_intern)

        }catch(err){
            seterror(error.message)
        }
    }

    get()

   },[])


  return {frontend_intern,backend_intern,full_stack}
}

export default Get
