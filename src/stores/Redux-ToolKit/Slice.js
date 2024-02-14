

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Slice=createSlice({
    name:'ecom',
initialState:{products:[],cart:[]},
reducers:{
    addItemToCart:(state,action)=>{
        try{
        // axios.get('http://localhost:5132/api/store')
        axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
        .then(res=>{
            const addItem=res.data.find(item=>item.id===action.payload)
            if(addItem){
                return(
                    state.cart=[...state.cart,addItem]
                // state.cart.push(addItem)
                // console.log("payload",action.payload);
            
                )
// return{                    ...state,
//                     cart:[...state.cart,addItem]
// }


            }
        })
    }
    catch(err){
console.log(err);
    }

    }
}
})

export const {addItemToCart}=Slice.actions;
export default Slice.reducer