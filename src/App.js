import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Containers from './components/Container'
import { university} from './redux/universitySlice'
import { country } from './redux/countrySlice'

const App = () => {
  const {cahngeCountry} = useSelector((state)=> state.dataUniver)
  const dispatch = useDispatch()

  useEffect(()=>{
 dispatch(university(cahngeCountry))

  },[cahngeCountry])
  useEffect(()=>{
 
    dispatch(country())
     },[])
  return (
    <div>
    <Containers/>
    <div className='p-5 text-center bg-dark text-white mt-4'>
    created by Omar Ali  
    </div>
    </div>
  )
}

export default App