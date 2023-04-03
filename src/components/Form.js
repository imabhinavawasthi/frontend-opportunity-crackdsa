import React, { useState } from 'react'

const Form = () => {
  const [data,setData]=useState({
    title:"",
    company:"",
    tags:"",
    skills:'',
    requirements:'',
    description:'',
    startdate:'',
    lastdate:'',
    stipend:'',
    location:'',
    duration:'',
    url:'',
  })
  const token=localStorage.getItem('token')
  const [live, setlive]=useState(false)
  const [exclusive, setexclusive]=useState(false)
  const [file, setfile]=useState()
  function handlechange(e){
    const {name, value}=e.target;
    setData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

async function post (e){
  e.preventDefault()

let form=new FormData(document.getElementById('form'))
    console.log(form)
    console.log(typeof(token))
  try{
    const options={
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Authentication':`Bearer ${token}`
    },
      body: form
  }

  const response=await fetch('https://opportunity.run-ap-south1.goorm.site/jobs', options)
  const data=await response.json();
  console.log(data)
  }catch(err){
    console.log(err.message)
  }
}


  return (
    <div className='bg-slate-100 text-black min-h-screen p-5 flex flex-col items-center min-w-full'>
            <div className='flex flex-col lg:flex-row'><h2 className="text-3xl  font-semibold font-Poppins my-2">Post New Opportunity</h2>
            <button className='bg-green-500 lg:absolute right-0 mr-4'>Create New Admin</button></div>
            <form  id='form' method='POST' encType="multipart/form-data"  className="flex flex-col w-[90%] px-12">
                <label htmlFor="title" className='text-lg'>Internship Title</label>
                <input className="inp"  type="text" placeholder="Internship Title" id="title" name="title" value={data.title} onChange={handlechange}/>
                <label  htmlFor="company" className='text-lg'>Company</label>
                <input className="inp" type="text" placeholder="Company Name" id="company" name="company" value={data.company} onChange={handlechange}/>
                <label  htmlFor="tags" className='text-lg'>Category</label>
                <input className="inp" type="text" placeholder="Category" id="tags" name="tags" value={data.tags} onChange={handlechange}/>
                <label  htmlFor="skills" className='text-lg'>Skills</label>
                <input className="inp" type="text" placeholder="Skills" id="skills" name="skills" value={data.skills} onChange={handlechange}/>
                <label  htmlFor="requirements" className='text-lg'>Requirements</label>
                <input className="inp" type="text" placeholder="Requirements" id="requirements" name="requirements" value={data.requirements} onChange={handlechange}/>
                <label  htmlFor="description" className='text-lg'>Description</label>
                <input className="inp" type="text" placeholder="Description" id="description" name="description" value={data.description} onChange={handlechange}/>
                <label  htmlFor="startdate" className='text-lg'>Start Date</label>
                <input className="inp" type="date" placeholder="Start Date" id="startdate" name="startdate" value={data.startdate} onChange={handlechange}/>
                <label  htmlFor="lastdate" className='text-lg'>Last Date To Apply</label>
                <input className="inp" type="date" placeholder="Last Date to Apply" id="lastdate" name="lastdate" value={data.lastdate} onChange={handlechange}/>
                <label  htmlFor="stipend" className='text-lg'>Stipend</label>
                <input className="inp" type="text" placeholder="Stipend" id="stipend" name="stipend" value={data.stipend} onChange={handlechange}/>
                <label  htmlFor="location" className='text-lg'>Location</label>
                <input className="inp" type="text" placeholder="Location" id="location" name="location" value={data.location} onChange={handlechange}/>
                <label  htmlFor="duration" className='text-lg'>Duration</label>
                <input className="inp" type="text" placeholder="Duration" id="duration" name="duration" value={data.duration} onChange={handlechange}/>
                <label  htmlFor="url" className='text-lg'>URL</label>
                <input className="inp" type="url" placeholder="Enter URL" id="url" name="url" value={data.url} onChange={handlechange}/>
                <div className='flex justify-start'>
                <input className="w-5 mx-1" type="checkbox" id="live" name="live" onChange={(e)=>{
                  setlive(e.target.checked)
                }}/>
                <label  htmlFor="live" className='text-lg pr-10'>Live</label>
                <input className="w-5 mx-1" type="checkbox" id="exclusive" name="exclusive" onChange={(e)=>{
                  setexclusive(e.target.checked)
                }}/>
                <label  htmlFor="exclusive" className='text-lg'>Exclusive</label>
                </div>
                
                <label  htmlFor="file" className='text-lg'>Image Upload</label>
                <input className="text-black" type="file" id="file" name="file" onChange={(e)=>{
                  setfile(e.target.files[0])
                }}/>
                <button className="bg-[#2FCDFF] border-black border border-solid rounded-xl px-4 py-1 font-Poppins mx-[30%]  active:scale-105" onClick={post} >Post</button>
            </form>
    </div>
  )
}

export default Form