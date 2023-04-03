import React , { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";


const Login = ({set1}) => {
    const [load,setload]=useState(true)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [error,setError]=useState('')
  
  
 async function getadmin(){

    setload(true)
      try{
        const options={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:email, password: pass})
        }
        const response=await fetch('https://opportunity.run-ap-south1.goorm.site/admin/login', options)
        const data=await response.json();
       
        setError(data)
       if(typeof(data)==='object'){
        localStorage.setItem('token',data.token)
        console.log(data)
       }
        setload(false)
   
        
      }catch(err){
      }
  }
  console.log(error)
   setTimeout(() => {
    if(error==='email or password is wrong'){
    setEmail('')
    setPass('')
    setload(true)
    }
 
   }, 2000);

   useEffect(()=>{
      if (localStorage.getItem('token')!==null){
        set1(localStorage.getItem('token'))
        console.log(localStorage.getItem('token'))
      }
   },[])
    return (
        <>
    {(!load)?<h2 
    className='bg-white px-7 py-2 my-2 text-md font-mono capitalize flex text-black'>
    {(error!=='email or password is wrong')?'✅ Logged In Successfully':'❌ Incorrect Details'}
    </h2>:""
    }
        <div className="auth-form-container">
            <h2 className="text-xl">Log In</h2>
            <div className="login-form">
                <label htmlFor="email">Email</label>
                <input className="inp" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label  htmlFor="password">Password</label>
                <input className="inp" value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="*******" id="password" name="password" />
                <button className="btn " onClick={()=>{getadmin()}} >Log In</button>
            </div>
        </div>
        </>
    )
}

export default Login;