// import { createContext, useContext, useState } from "react";

// const CartContext= createContext();

// export const CartProvider=({children})=>{
//     const[cartItems,setCartItems]=useState([]);

// const IncreseCart=(item)=>{
//     const updatedCartItems = cartItems.map((cartItem) =>
//     cartItem === item
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
//   );

//   setCartItems(updatedCartItems);

    
// }


//     const addToCart=(item)=>{
        
// setCartItems([...cartItems,item]);

//     }

//     const removeFromCart=(item)=>{

//         setCartItems(cartItems.filter((cart)=>cart!==item))

//     }


//     return(

// <CartContext.Provider value={{cartItems,addToCart,removeFromCart,IncreseCart}}>


//     {children}
// </CartContext.Provider>

//     )
// }

// export  const UseCart=()=>{


//     return useContext(CartContext);
// }



import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const IncreaseCart = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem === item
        ? { ...cartItem, quantity: parseInt(cartItem.quantity) + 1 }
        : cartItem
    );

    setCartItems(updatedCartItems);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cart) => cart !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, IncreaseCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  return useContext(CartContext);
};
