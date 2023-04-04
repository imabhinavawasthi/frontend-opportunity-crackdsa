import React from 'react'

const CreateAdmin = ({show,onClose}) => {

    const token=localStorage.getItem('token')
    async function create(e){
        e.preventDefault();
        let form=new FormData(document.getElementById('form2'))
        try{
            const options={
              method: 'POST',
              headers: {
                        'Authorization':`Bearer ${token}`
            },
              body: form,
          }
        
          const response=await fetch('https://opportunity.run-ap-south1.goorm.site/admin/newadmin', options)
          const data=await response.json();
          console.log(data)
          onClose()
          }catch(err){
            console.log(err.message)
          }
    }

    if(!show){
        return null
    }
  return (
    <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-10'>
    <div className='bg-white px-3 lg:w-[500px] py-6'>
        <div className=' flex justify-between items-center'>
            <h4 className='m-0 text-2xl font-semibold font-Poppins'>Create New Admin</h4>
            <button className='bg-red-100 p-2 text-sm' onClick={onClose}>❌</button>
        </div>
        <div>
            <form className='flex flex-col pb-2' id='form2' method='POST' encType="multipart/form-data">
                <label htmlFor="name" className='text-lg'>Name</label>
                <input type="text" name='name' id='name' className='border-[2px] border-black border-solid p-2' placeholder='Enter Name'/>
                <label htmlFor="email" className='text-lg'>Email</label>
                <input type="email" name='email' id='email' className='border-[2px] border-black border-solid p-2' placeholder='yourexample@gmail.com'/>
                <label htmlFor="password" className='text-lg'>Password</label>
                <input type="password" name='password' id='password' className='border-[2px] border-black border-solid p-2 mb-4' placeholder='******'/>
                <button className='bg-[#2FCDFF] border-black border border-solid rounded-xl px-2 py-1 font-Poppins hover:bg-blue-400' onClick={create}>Create Admin</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default CreateAdmin