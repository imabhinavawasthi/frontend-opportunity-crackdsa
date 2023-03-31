import {useEffect,useState} from 'react'

const Get = () => {
const [all_intern,setall_intern]=useState([])
const [frontend_intern,setfrontend_intern]=useState([])
const [backend_intern,setbackend_intern]=useState()
const [full_stack,setfull_stack]=useState()
const [error,seterror]=useState('')
const [loading ,setloading]=useState(true)
const base_url='https://opportunity.run-ap-south1.goorm.site'


   useEffect(()=>{
     async function get(){
        setloading(true)
        try{
       const res=await fetch(base_url+'/jobs')
       const data= await res.json()
       setall_intern(data)
     
        setloading(false)
       }catch(err){
            seterror(error.message)
        }
    }

    get()
},[])

useEffect(()=>{
if(all_intern.length!==0){
  const  fullstack= all_intern.filter((intern,index)=>{
      return intern.tags.includes('frontend','backend')
    })
    setfull_stack(fullstack)
    const  frontend= all_intern.filter((intern,index)=>{
        return intern.tags.includes('frontend')
      })
      setfrontend_intern(frontend)
      const  backend= all_intern.filter((intern,index)=>{
        return intern.tags.includes('backend')
      })
      setbackend_intern(backend)
}

},[all_intern])


  return {frontend_intern,backend_intern,full_stack}
}

export default Get
