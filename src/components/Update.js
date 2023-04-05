import React, { useState } from 'react'

const Update = ({data,token,uptodate,id,setpop}) => {

const [title,setitle]=useState(data.title)
const [company,setcompany]=useState(data.company)
const [tags,settags]=useState(data.tags)
const  [skills,setskills]=useState(data.skills)
const [requirements,setrequirements]=useState(data.requirements)

const [desc,setdesc]=useState(data.desc)
const [startdate,setstartdate]=useState(data.startdate)
const [lastdate,setlastdate]=useState(data.lastdate)
const[stipend ,setstipend]=useState(data.stipend)
const [duration,setduration]=useState(data.duration)
const [location,setlocation]=useState(data.location)
const [url,seturl]=useState(data.url)
const [live, setlive]=useState(data.live)
const [exclusive, setexclusive]=useState(data.exclusive)
const [file, setfile]=useState()


const [popup,setpopup]=useState('')


  async function updated(e){
    try{
        e.preventDefault()

        let form=new FormData(document.getElementById('form3'))
        form.set('live',live);
        form.set('exclusive',exclusive);
        form.set('requirements',(typeof(requirements)==='string')?requirements.split('\n'):requirements)
        console.log(form.get('live'),live)
        
          console.log(form)
        const options={
            method: 'PUT',
            headers: {
                      'Authorization':`Bearer ${token}`
          },
            body: form,}

  const response=await fetch('https://opportunity.run-ap-south1.goorm.site/jobs/'+id, options)
   const data= await response.json()
  setpop('succesfull updated !! please refresh the page to see changes')
  setTimeout(() => {
    setpop('')
  },3000);
   uptodate()
  
    }catch(err){
        setpopup(err.message)

    }
  }


  return (
    <div>
     {popup!==''&&<h1 className='text-center text-xl  text-indigo-600 '>{popup}</h1>}

           <form  id='form3' method='POST' encType="multipart/form-data"  className="flex flex-col w-[90%] px-12">
                <label htmlFor="title" className='text-lg'>Internship Title</label>
                <input className="inp"  type="text" placeholder="Internship Title" id="title" name="title" value={title} onChange={(e)=>{setitle(e.target.value)}}/>
                <label  htmlFor="company" className='text-lg'>Company</label>
                <input className="inp" type="text" placeholder="Company Name" id="company" name="company" value={company} onChange={(e)=>{setcompany(e.target.value)}} />
                <label  htmlFor="tags" className='text-lg'>Category</label>
                <input className="inp" type="text" placeholder="Category" id="tags" name="tags" value={tags} onChange={(e)=>{settags(e.target.value)}} />
                <label  htmlFor="skills" className='text-lg'>Skills</label>
                <input className="inp" type="text" placeholder="Skills" id="skills" name="skills" value={skills} onChange={(e)=>{setskills(e.target.value)}} />
                <label  htmlFor="requirements" className='text-lg'>Requirements</label>
                <textarea className="inp" type="text" placeholder="Requirements" id="requirements" name="requirements" value={requirements} onChange={(e)=>{setrequirements(e.target.value)}} />
                <label  htmlFor="description" className='text-lg'>Description</label>
                <input className="inp" type="text" placeholder="Description" id="description" name="desc" value={desc} onChange={(e)=>{setdesc(e.target.value)}} />
                <label  htmlFor="startdate" className='text-lg'>Start Date</label>
                <input className="inp" type="date" placeholder="Start Date" id="startdate" name="startdate" value={startdate} onChange={(e)=>{setstartdate(e.target.value)}}/>
                <label  htmlFor="lastdate" className='text-lg'>Last Date To Apply</label>
                <input className="inp" type="date" placeholder="Last Date to Apply" id="lastdate" name="lastdate" value={lastdate}  onChange={(e)=>{setlastdate(e.target.value)}} />
                <label  htmlFor="stipend" className='text-lg'>Stipend</label>
                <input className="inp" type="text" placeholder="Stipend" id="stipend" name="stipend" value={stipend} onChange={(e)=>{setstipend(e.target.value)}}/>
                <label  htmlFor="location" className='text-lg'>Location</label>
                <input className="inp" type="text" placeholder="Location" id="location" name="location" value={location} onChange={(e)=>{setlocation(e.target.value)}} />
                <label  htmlFor="duration" className='text-lg'>Duration</label>
                <input className="inp" type="text" placeholder="Duration" id="duration" name="duration" value={duration} onChange={(e)=>{setduration(e.target.value)}} />
                <label  htmlFor="url" className='text-lg'>URL</label>
                <input className="inp" type="url" placeholder="Enter URL" id="url" name="url" value={url} onChange={(e)=>{seturl(e.target.value)}}/>
                <div className='flex justify-start'>
                <input className="w-5 mx-1" type="checkbox" id="live" name="live" value={live} onChange={(e)=>{setlive(e.target.checked)}}/>
                <label  htmlFor="live" className='text-lg pr-10'>Live</label>
                <input className="w-5 mx-1" type="checkbox" id="exclusive"   name="exclusive"  value={exclusive} onChange={(e)=>{setexclusive(e.target.checked)}}/>
                <label  htmlFor="exclusive" className='text-lg'>Exclusive</label>
                </div>
                
                <label  htmlFor="file" className='text-lg'>Image Upload</label>
                <input className="text-black" type="file" id="file" name="file" value={file} onChange={(e)=>{setfile(e.target.files[0])}}/>
                <button className="bg-[#2FCDFF] border-[#0f94bdc7] hover:text-black border border-solid rounded-xl px-4 py-1 font-Poppins mx-[30%]  active:scale-105" onClick={updated} >Post</button>
            </form>
    </div>
  )
}

export default Update
