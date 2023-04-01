import React , { useState }  from "react";
import '../App.css'

const Login = () => {
    const [name,setname]=useState('')
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const [show_name,setshow_name]=useState(false)
  

   

    return (
        <div className="auth-form-container">
            <h2 className="text-xl">{show_name?'Create new admin':'Log In'}</h2>
            <div className="login-form">
                
         {show_name &&<><label htmlFor="email">Name</label>
                <input className="inp" value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="your name" id='name' name="name" /> </>}

                <label htmlFor="email">Email</label>
                <input className="inp" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label  htmlFor="password">Password</label>
                <input className="inp" value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="*******" id="password" name="password" />
                <button className="btn">Log In</button>
            </div>
            <button className="link-btn" onClick={()=>{
                setshow_name(!show_name)
            }}>{show_name?'Have an account? Log in':`Create new admin`}</button>
        </div>
    )
}

export default Login;