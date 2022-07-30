import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// http://universities.hipolabs.com/search?country=Egypt
// https://restcountries.com/v3.1/all


export const country = createAsyncThunk("country", async (_,thunkApi)=>{
    const respond = await axios.get(`https://restcountries.com/v3.1/all`) 
    
    return respond.data
})

export const countrySlice = createSlice({
    name:"country",
    initialState:{
countryArr:[],
success:false,
error:false,

    },
    extraReducers:{

    [country.pending]:(state,action)=>{
    console.log("pen")
    },
    [country.fulfilled]:(state,action)=>{
        state.countryArr=action.payload
        console.log(action.payload[34])
   
    },
    [country.rejected]:(state,action)=>{
    
    },
    }
})

export default countrySlice.reducer