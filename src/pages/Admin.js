import {useState} from 'react'
import Login from '../components/Login'
import Form from '../components/Form'
const Admin = () => {
  const [log,setlog]=useState(false)
  const [token,settoken]=useState('')
  function set1(token){
    setlog(true)
    settoken(token)
  }
  return (
    <div className='App'>
      {log?<Form/>:<Login set1={set1}/>}
    </div>
  )
}

export default Admin
