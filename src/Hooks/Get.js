import {useEffect,useState} from 'react'

const Get = () => {

const [error,seterror]=useState('')
const [loading ,setloading]=useState(true)
const [intern_data,setintern]=useState({
  'frontend':[],
  'backend':[],
  'full-stack' :[],
  'sde' :[],
  'exclusive' :[]
})
const category=['full-stack', 'frontend','backend','sde','exclusive']
const categoryOptions = [
  { value: "backend", label: "Backend Internships"},
  { value: "frontend", label: "Frontend Internships" },
  { value: "full-stack", label: "Full-Stack Internships" },
  { value: "sde", label: "SDE Full Time" },
  { value: "exclusive", label: "Exclusive Opportunities" },
];
const base_url='https://opportunity.run-ap-south1.goorm.site'




useEffect(()=>{

async function getintern(){
  
    setloading(true)
    categoryOptions.forEach(async (itm,index)=>{
      try{
        const res =await fetch(base_url+`/jobs?tags=${itm.value}`)
        const data= await res.json()
        setintern((prev)=>
          ({
            ...prev,
            [itm.value]:data
          })
        )
      }catch(err){
        seterror(err.message)
        setloading(false)
         console.log(err.message)
      }
      
     })

    setTimeout(()=>{
      setloading(false)
    },1000)
  
}

getintern()

},[])
// console.log(intern_data)

  return {intern_data,loading, category,categoryOptions,error}
}

export default Get
