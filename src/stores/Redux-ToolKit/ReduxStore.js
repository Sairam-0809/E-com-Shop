import { configureStore } from "@reduxjs/toolkit";

import ecomReducer from './Slice'

export const ReduxStore =configureStore({
    reducer:{
        ecom:ecomReducer,
    }
})