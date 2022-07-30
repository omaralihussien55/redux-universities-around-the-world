import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { university } from '../redux/universitySlice'
import { searching,handleChangeCountry } from '../redux/universitySlice'
const Forms = () => {
    const {countryArr} = useSelector((state)=> state.dataCoutry)
    const {dataarr,cahngeCountry} = useSelector((state)=> state.dataUniver)
    const dispatch= useDispatch()


const HandleStateSearch = (e)=>{
  if(e.target.value == ""){
    dispatch(university(cahngeCountry))
  }else{
   
    dispatch(searching(e.target.value))

  }

   
}


const CHANDECOUNTRY = (e)=>{
    dispatch(handleChangeCountry(e.target.value))
}


  return (
    <div className='' >
 <div className='row mt-4 col-11 mx-auto justify-content-around '>
      <div className='col-md-3 col-6 mb-3 p-2'>
      <Form.Select  onChange={CHANDECOUNTRY}>
      <option value="Egypt">select country</option>
      {countryArr.length > 1 && 
          countryArr.map((i,idx)=>{
              return(
                  <React.Fragment key={idx}>
                  <option style={{width:"100px"}} value={i.name.common}>{i.name.common}</option>
                  </React.Fragment>
              )
          })
       }
    </Form.Select>
      </div>
   
        <div className='col-10 col-md-6'>
             <div className='w-100 parent-input'>
               <div className='warp-input'>
               <input type='text' 
                placeholder='Search within the country'
                className='input-serach w-100 border-0'
               onChange={HandleStateSearch}
               />
               </div>
                <button  className='border-0 rounded-0  btn btn-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-info" viewBox="0 0 16 16">
                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </button>
             </div>
             </div>

   
        </div>

        <div className='text-center p-2 text-danger'>
           
        </div>
    </div>
  )
}

export default Forms