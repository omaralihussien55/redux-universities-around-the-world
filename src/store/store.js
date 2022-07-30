import { configureStore } from "@reduxjs/toolkit";
import universitySlice from "../redux/universitySlice";
import countrySlice from "../redux/countrySlice";
const store = configureStore({
    reducer:{
        dataUniver:universitySlice,
       dataCoutry: countrySlice
    }
})

export default store