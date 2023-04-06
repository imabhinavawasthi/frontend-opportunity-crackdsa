import {useEffect,useState} from 'react'

const Get = () => {

const [error,seterror]=useState('')
const [loading ,setloading]=useState(true)
const [intern_data,setintern]=useState({
  'frontend':[],
  'backend':[],
  'full-stack' :[]
})
const category=['full-stack', 'frontend','backend']
const base_url='https://opportunity.run-ap-south1.goorm.site'




useEffect(()=>{

async function getintern(){
  
    setloading(true)
    category.forEach(async (itm,index)=>{
      try{
        const res =await fetch(base_url+`/jobs?tags=${itm}`)
        const data= await res.json()
        setintern((prev)=>
          ({
            ...prev,
            [itm]:data
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
console.log(intern_data)

  return {intern_data,loading, category,error}
}

export default Get
