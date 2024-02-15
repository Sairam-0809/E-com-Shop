    import React, { useState } from "react";
    import '../../App.css';
    import { UseCart } from "../context/cartContext";

    import {Link, NavLink, useNavigate} from "react-router-dom";
    import { useEffect } from "react";
    function Navbar(){
    const[search,setSearch]=useState(false);
    const { cartItems, setCartItems } = UseCart();

    // const {cartItems}=UseCart();

    const navigate=useNavigate();

    useEffect(() => {
        // Retrieve cart items from localStorage on component mount or user login
        const fetchCartItems = async () => {
          const storedItems = localStorage.getItem('cartItems');
          if (storedItems) {
            const parsedItems = JSON.parse(storedItems);
            setCartItems(parsedItems);
          }
        };
    
        fetchCartItems();
      }, [setCartItems]);
    

    const handleLogout = () => {
        // Implement your logout logic here
    
        // Set cart items to 0 on logout
        setCartItems([]);
    
        // After logout, you can redirect the user to the login page or any other desired page.
        // For now, let's just navigate to the login page
        navigate('/user/login');
      };


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
    <p style={{cursor:"pointer"}}    onClick={()=>navigate('/user/login')}>{search?"Login":"Logout"}</p> 
      <p  style={{cursor:"pointer"}}    onClick={()=>navigate('/user/register')}>Register</p> 
      
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
    