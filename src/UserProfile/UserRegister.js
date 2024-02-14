import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserRegister = () => {
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
     
    const navigate=useNavigate()

   const handleRegister=()=>{
    try{
      const res=axios.post('https://ecartbackend-qtwf.onrender.com/api/register',{email,password,firstname,lastname})
        .then((res)=>{
            console.log(res.data,"User Registered Data")
            if(res.data.msg==="Email Already Exist"){
               alert(res.data.msg)
            }
            else{
                localStorage.setItem("token",res.data.token)
                setTimeout(async() => {
                  alert("user Registered successfully")
                  await  navigate('/user/login')
                }, 2000);
            }
        })
        console.log((res.data,"response data"));
    }
    catch(err){
        console.log(err,"Registration failed");
    }
   }

  return (
    <div className='RegisterWrapper'>
        <h2 className='createAcc'>Create Your Account</h2>

        <div className='RegisterDetails'>
            <div className='flnames'>
            <div>
            <label><h4>First Name:</h4></label>
            <input type='text' value={firstname} onChange={(e)=>setFirstName(e.target.value)} required/>
            </div>

            <div>
            <label><h4>Last Name:</h4></label>
            <input type='text' value={lastname} onChange={(e)=>setLastName(e.target.value)} required/>
            </div>


          </div> 
          <label><h4>Email :</h4></label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <br/>
          <label><h4>Password :</h4></label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <br/><br/>
          <button className='Registerbutton' onClick={handleRegister}>Register</button>

        </div>

    </div>
  )
}

export default UserRegister