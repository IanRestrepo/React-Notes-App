import React from 'react'

export const InputForm = ({ InputPlaceHolder, InputType}) => {
  return (
    <input type={InputType} placeholder={InputPlaceHolder}  className='py-2 px-4 w-96 bg-indigo-950 text-indigo-500 placeholder:text-indigo-500 border border-indigo-500 rounded-lg  focus:outline focus:outline-indigo-600 focus:-translate-y-3 focus:shadow-2xl focus:shadow-indigo-600  transition-all my-5'/>
  )
}
