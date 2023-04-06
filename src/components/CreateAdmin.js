import React, { useState } from 'react'

const CreateAdmin = ({show,onClose}) => {
 const [created,setCreated]=useState(false)
    const token=localStorage.getItem('token')
    const [creating,setcreating]=useState(false)
  async function create(e){   
       setcreating(true)
 e.preventDefault();
        console.log(document.getElementById('newAdminform'))
        let form=new FormData(document.getElementById('newAdminform'))
        let params = new URLSearchParams(form).toString();
        // console.log(form)
        // console.log(form.get('name'))
        try{

            const options={ 
              method: 'POST',

              headers: {
                'Content-Type':'application/x-www-form-urlencoded',
                        'Authorization':`Bearer ${token}`
            },
              body: params,
          }
        
          const response=await fetch('https://opportunity.run-ap-south1.goorm.site/admin/newadmin', options)
          const data=await response.json();
          console.log(data)
          setCreated(true)
          setcreating(false)
          setTimeout(() => {
            onClose()
            setCreated(false)
          }, 2000);
          // onClose()
          }catch(err){
            console.log(err.message)
            setcreating(false)
          }
    }

    if(!show){
        return null
    }
  return (
    <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-10'>
    <div className='bg-white px-3 lg:w-[500px] py-6'>
      {(created)?<h2 className='bg-green-300 px-7 py-2 my-2 font-mono capitalize flex justify-center text-black'>✅ Created New Admin</h2>:""}
        <div className=' flex justify-between items-center'>
            <h4 className='m-0 text-2xl font-semibold font-Poppins'>Create New Admin</h4>
            <button className='bg-red-100 p-2 text-sm' onClick={onClose}>❌</button>
        </div>
        <div>
            <form className='flex flex-col pb-2' id='newAdminform' method='POST'>
                <label htmlFor="name" className='text-lg'>Name</label>
                <input type="text" name='name' id='adminName' className='border-[2px] border-black border-solid p-2' placeholder='Enter Name'/>
                <label htmlFor="email" className='text-lg'>Email</label>
                <input type="email" name='email' id='admiNEmail' className='border-[2px] border-black border-solid p-2' placeholder='yourexample@gmail.com'/>
                <label htmlFor="password" className='text-lg'>Password</label>
                <input type="password" name='password' id='adminPassword' className='border-[2px] border-black border-solid p-2 mb-4' placeholder='******'/>
                <button className='bg-[#2FCDFF] border-black border border-solid rounded-xl px-2 py-1 font-Poppins hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2FCDFF] active:scale-105' onClick={create} disabled={creating}>Create Admin</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default CreateAdmin