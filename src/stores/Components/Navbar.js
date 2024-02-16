    import React, { useState } from "react";
    import '../../App.css';
    import { UseCart } from "../context/cartContext";

    import {Link, NavLink, useNavigate} from "react-router-dom";
    import { useEffect } from "react";
    function Navbar(){
    
    const { cartItems, setCartItems } = UseCart();

    // const {cartItems}=UseCart();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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

      useEffect(()=>{
        
        // {isLoggedIn? navigate('/user/login'):navigate('/')}


      });

      const handleToggle=()=>{
        
        // navigate(isLoggedIn ? '/' : '/user/login');
        
        // {isLoggedIn? navigate('/user/login'):navigate('/')}

        setIsLoggedIn(!isLoggedIn);
      }
    



console.log(isLoggedIn);

        return (
            <>
        <div className="navSection">

    <div className="title">
        <Link to='/'><h2>E-com </h2></Link>


    </div>


    <div className="search">
    <input type="text" placeholder="enter the product" className="input" />
        
    </div>

    <div className="user">

    <div className="user-detail">
    <p style={{cursor:"pointer"}} onClick={handleToggle} >{isLoggedIn?"Login":"Logout"}</p> 
    {isLoggedIn? navigate('/user/login'):navigate('/')}

    <p style={{ cursor: "pointer" }} onClick={() => navigate("/user/register")}>
            Register
          </p>

      
    

        
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
    

    