import React, { useState } from 'react'
// import ecartlogo from '../Images/logo-white.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

const navigate=useNavigate()

// const handleLogin = async () => {
//   try {
//     const res = await axios.post('http:localhost:8000/login', { email, password });

//     console.log(res.data, "User Logged In Data");

//     if (res.data.msg === "Login Successful!") {
//       console.log("login success");

//       alert(res.data.msg);
//       localStorage.setItem("token", res.data.token);
//       setTimeout(() => {
//         navigate('/');
//       }, 1000);
//     } else if (res.data.msg === "Password Incorrect") {
//       alert("Password Incorrect");
//     } else if (res.data.msg === "You Haven't Registered Yet") {
//       alert("You haven't registered yet");
//       setTimeout(() => {
//         navigate('/user/register');
//       }, 3000);
//     }
//   } catch (err) {
//     console.log(err, "error in axios");
//     alert("An error occurred. Please try again.");
//   }
// };

const handleLogin = async () => {
  try {
    const res = await axios.post('https://ecartbackend-qtwf.onrender.com/api/register', { email, password });

    console.log(res.data, "User Logged In Data");

    if (res.data.msg === "Login Successful!") {
      console.log("login success");

      alert(res.data.msg);
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else if (res.data.msg === "Password Incorrect") {
      alert("Password Incorrect");
    } else if (res.data.msg === "You Haven't Registered Yet") {
      alert("You haven't registered yet");
      setTimeout(() => {
        navigate('/user/register');
      }, 3000);
    }
  } catch (err) {
    console.log(err, "error in axios");
    alert("An error occurred. Please try again.");
  }
};



  return (
    <div className='LoginWrapper'>
        <div className='LoginLeft'>
          <div style={{width:"100%",display:"flex",justifyContent:"center"}}><img src=" https://cdn.pixabay.com/photo/2016/11/22/22/54/desktop-1851043_1280.jpg"  alt='Not Found' className='ecartlogin'/></div>
          <h2 style={{textDecoration:"underLine"}}>LOGIN TO YOUR ACCOUNT</h2>

          <label><h3>Enter Email:</h3></label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <br/>
          <label><h3>Enter Password:</h3></label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <br/>

          <button onClick={handleLogin} className='LoginButton'>
            Log In
          </button>

          <div className='LoginReg'>
        <h3>New here👀</h3>
       <NavLink to='/user/register'>
        <button className='Registerbutton'>Signup!</button>
        </NavLink>
      </div>


        </div>

      <div className='LoginRight'>
        <h3>New here👀</h3>
        <h4 style={{color:"gray"}}>Click on the Sign Up button Below To Register⤵</h4>
       <NavLink to='/user/register'>
        <button className='Registerbutton'>Register</button>
        </NavLink>
      </div>

    </div>
  )
}

export default UserLogin;