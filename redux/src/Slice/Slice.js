import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:"Count",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state,action)=>{state.count+=action.payload},
        decrement:(state,action)=>{state.count-=action.payload}
    }
})

export const {increment,decrement} = countSlice.actions