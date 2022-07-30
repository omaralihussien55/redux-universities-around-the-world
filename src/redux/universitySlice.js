import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// http://universities.hipolabs.com/search?country=Egypt
// https://restcountries.com/v3.1/all
export const university = createAsyncThunk("university", async (args,thunkApi)=>{
    const respond = await axios.get(`http://universities.hipolabs.com/search?country=${args}`) 
    
    return respond.data
})


export const universitySlice = createSlice({
    name:"university",
    initialState:{
dataarr:[],
success:false,
error:false,
cahngeCountry:"Egypt"
    },
    reducers:{
  searching:(state,action)=>{

    state.dataarr = state.dataarr.filter((i)=>{
        return  i.name.toLowerCase().trim().includes(`${action.payload.toLowerCase().trim()}`)
      })
    console.log(state.dataarr)
  },
  
  handleChangeCountry :(state,action)=>{
     state.cahngeCountry = action.payload
  }

    },
    extraReducers:{
[university.pending]:(state,action)=>{
console.log("pen")
},
[university.fulfilled]:(state,action)=>{
    state.dataarr=action.payload
// console.log(action.payload)
},
[university.rejected]:(state,action)=>{

},

    }
})
export const {searching,handleChangeCountry} = universitySlice.actions
export default universitySlice.reducer