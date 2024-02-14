import React, { useEffect, useState } from "react";
import '../../App.css';
import { UseCart } from "../context/cartContext";

import {Link, NavLink, useNavigate} from "react-router-dom";
function Navbar(){
const[search,setSearch]=useState(false);


const {cartItems}=UseCart();

const navigate=useNavigate();


// const {cartItems }= UserCart();


// console.log(search.toLocaleLowerCase());
    return (
        <>
    <div className="navSection">

<div className="title">
    <Link to='/'><h2>E-com </h2></Link>


</div>


<div className="search">
<input type="text" placeholder="enter the product" className="input"  onChange={(e)=>{setSearch(!e.target.value)}} />
    
</div>

<div className="user">

<div className="user-detail">
   <p style={{cursor:"pointer"}}    onClick={()=>navigate('/user/login')}>Login</p>  <p  style={{cursor:"pointer"}}    onClick={()=>navigate('/user/register')}>Register</p> 
{search?<span>Sai</span>:null}
   

    
</div>

<Link to="/cart">
<div className="cart">

    Cart

    <span>
        {cartItems.length}
    </span>
</div>
</Link>
    
</div>
    </div>

    <div className="subMenu">
<ul>
<li><NavLink to="/mobiles">Mobile</NavLink></li>
<li><NavLink to="/computers">Computers</NavLink></li>
<li><NavLink to="/watches">Watches</NavLink></li>

<li><NavLink to="/mens">Mens</NavLink></li>
<li><NavLink to="/womens">Womens</NavLink></li>
</ul>

    </div>
  
  </>
    )
  }
  
  
  export default Navbar;
  