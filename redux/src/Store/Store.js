import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../Slice/Slice";

const store = configureStore({
    reducer:{
        newCount:countSlice.reducer
    }
})

export default store