// // import React from "react";
// // import { UseCart } from "./context/cartContext";

// // function UserCart(){

// //     const{cartItems,addToCart,removeFromCart,IncreseCart}=UseCart();

// //     return(
// // <>

// // {cartItems.map((item)=>{
// //     return(

// //         <div className="cart-section">

// //             <div className="cart-img">

// //                 <img src={item.image} alt="Not Found" />
// //             </div>
// //             <div className="cart-details">

// //                 <h3>{ item.model}</h3>
// //                 <h4>{item.category}</h4>
// //                 <p>{item.product}</p>
// //                 <h2> <button className="cartitems-quantity"  onClick={()=>IncreseCart(item)}>-</button>{item.price}<button  className=" cartitems-quantity" onClick={()=>IncreseCart(item)}>+</button></h2>
                
               
// //                 <p></p>
                    
                
// //             </div>

// //             <button onClick={()=>removeFromCart(item)}  className="remove-item">Remove</button>


// //         </div>
// //     )
// // })}



// // </>


// //     )
// // }

// // export default UserCart;

// import React from "react";
// import { UseCart } from "./context/cartContext";
// import { Link, useNavigate } from "react-router-dom";

// function UserCart() {
//   const { cartItems, addToCart, removeFromCart, IncreaseCart } = UseCart();
//   const navigate = useNavigate();

//   return (
//     <>
//       {cartItems.map((item) => (
//         <div className="cart-section" key={item.id}>
//           <div className="cart-img">
//             <img src={item.image} alt="Not Found" />
//           </div>
//           <div className="cart-details">
//             <h3>{item.model}</h3>
//             <h4>{item.category}</h4>
//             <p>{item.product}</p>
//             <h2>
//               <button
//                 className="cartitems-quantity"
//                 onClick={() => IncreaseCart(item)}
//               >
//                 -
//               </button>
//               {item.price}
//               <button
//                 className="cartitems-quantity"
//                 onClick={() => IncreaseCart(item)}
//               >
//                 +
//               </button>
//               {/* <p>Quantity:{item.quantity}</p> */}
//             </h2>
//             <p></p>
//           </div>
//           <button
//             onClick={() => removeFromCart(item)}
//             className="remove-item"
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       {cartItems.length > 0 && (
//         <div className="checkout-button-container">
//           <button
//             className="checkout-button"
//             onClick={() => navigate("/")}
//           >
//             Checkout
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default UserCart;

// import React from "react";
// import { UseCart } from "./context/cartContext";
// import { useNavigate } from "react-router-dom";

// function UserCart() {
//   const { cartItems, removeFromCart, IncreaseCart } = UseCart();
//   const navigate = useNavigate();

//   // Calculate total price
//   const totalPrice = cartItems.reduce((total, item) => total +parseInt( item.price), 0);

//   return (
//     <>
  

//           {cartItems.map((item) => (
//         <div className="cart-section" key={item.id}>
//           <div className="cart-img">
//             <img src={item.image} alt="Not Found" />
//           </div>
//           <div className="cart-details">
//             <h3>{item.model}</h3>
//             <h4>{item.category}</h4>
//             <p>{item.product}</p>
//             <h2>
//               <button
//                 className="cartitems-quantity"
//                 onClick={() => IncreaseCart(item)}
//               >
//                 -
//               </button>
//               {item.price}
//               <button
//                 className="cartitems-quantity"
//                 onClick={() => IncreaseCart(item)}
//               >
//                 +
//               </button>
//               {/* <p>Quantity:{item.quantity}</p> */}
//             </h2>
//             <p></p>
//           </div>
//           <button
//             onClick={() => removeFromCart(item)}
//             className="remove-item"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
      
    

//       {/* Display total price */}
//       <div className="total-price-container">
//         <p>Total Price: ${totalPrice}</p>
//       </div>

//       {cartItems.length > 0 && (
//         <div className="checkout-button-container">
//           <button className="checkout-button" onClick={() => navigate("/success")}>
//             Checkout
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default UserCart;


import React, { useState } from "react";
import { UseCart } from "./context/cartContext"; // Assuming `UseCart` is a custom hook or context for managing cart state
import { useNavigate } from "react-router-dom";

function UserCart() {
  const { cartItems, removeFromCart,IncreaseCart,removeAll} = UseCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + parseInt(item.price), 0);

  const handleCheckout = () => {
    // Implement your backend checkout logic here
    // Assuming this involves sending cart items to a server.
    // Replace with your actual checkout implementation.
    console.log("Checkout clicked, sending cart items to backend:", cartItems);
removeAll();
    // Clear cart items from the local state after checkout

    // Redirect to a success page or other relevant page
    navigate("/success"); // Assuming "/success" is your desired checkout success page
  };

  return (
    <>
      {cartItems.map((item) => (
        <div className="cart-section" key={item.id}>
          <div className="cart-img">
            <img src={item.image} alt="Not Found" />
          </div>
          <div className="cart-details">
            <h3>{item.model}</h3>
            <h4>{item.category}</h4>
            <p>{item.product}</p>
            <h2>
              <button
                className="cartitems-quantity"
                onClick={() => IncreaseCart(item)}
              >
                -
              </button>
              {item.price}
              <button
                className="cartitems-quantity"
                onClick={() => IncreaseCart(item)}
              >
                +
              </button>
              {/* <p>Quantity:{item.quantity}</p> */}
            </h2>
            <p></p>
          </div>
          <button
            onClick={() => removeFromCart(item)}
            className="remove-item"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Display total price */}
      <div className="total-price-container">
        <p>Total Price: ${totalPrice}</p>
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-button-container">
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>

      )}
    </>
  );
}

export default UserCart;
