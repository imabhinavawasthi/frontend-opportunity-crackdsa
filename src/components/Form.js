import React from 'react'

const Form = () => {
  return (
    <div className='bg-slate-100 text-black min-h-screen p-5 flex flex-col items-center min-w-full'>
            <div className='flex flex-col lg:flex-row'><h2 className="text-3xl  font-semibold font-Poppins my-2">Post New Opportunity</h2>
            <button className='bg-green-500 lg:absolute right-0 mr-4'>Create New Admin</button></div>
            <div className="flex flex-col w-[90%]">
                <label htmlFor="title" className='text-lg'>Internship Title</label>
                <input className="inp"  type="text" placeholder="Internship Title" id="title" name="title" />
                <label  htmlFor="company" className='text-lg'>Company</label>
                <input className="inp" type="text" placeholder="Company Name" id="company" name="company" />
                <label  htmlFor="description" className='text-lg'>Description</label>
                <input className="inp" type="text" placeholder="Description" id="description" name="description" />
                <label  htmlFor="start" className='text-lg'>Start Date</label>
                <input className="inp" type="date" placeholder="Start Date" id="start" name="start" />
                <label  htmlFor="last" className='text-lg'>Last Date To Apply</label>
                <input className="inp" type="date" placeholder="Last Date to Apply" id="last" name="last" />
                <label  htmlFor="stipend" className='text-lg'>Stipend</label>
                <input className="inp" type="text" placeholder="Stipend" id="stipend" name="stipend" />
                <label  htmlFor="location" className='text-lg'>Location</label>
                <input className="inp" type="text" placeholder="Location" id="location" name="location" />
                <label  htmlFor="duration" className='text-lg'>Duration</label>
                <input className="inp" type="text" placeholder="Duration" id="duration" name="duraation" />
                <label  htmlFor="url" className='text-lg'>URL</label>
                <input className="inp" type="url" placeholder="Enter URL" id="url" name="url" />
                <label  htmlFor="tags" className='text-lg'>Category</label>
                <input className="inp" type="text" placeholder="Category" id="tags" name="tags" />
                <label  htmlFor="file" className='text-lg'>Image Upload</label>
                <input className="text-black" type="file" id="file" name="file" />
                <button className="bg-[#2FCDFF] border-black border border-solid rounded-xl px-4 py-1 font-Poppins mx-[30%]  active:scale-105" >Post</button>
            </div>
    </div>
  )
}

export default Form