import React from 'react'

export const TextAreaForm = ({TextAreaName, TextAreaCols, TextAreaRows}) => {
  return (
    <textarea name={TextAreaName} id="" cols={TextAreaCols} rows={TextAreaRows} className='py-2 px-3 bg-indigo-950 text-indigo-500 placeholder:text-indigo-500 border border-indigo-500 rounded-lg  focus:outline focus:outline-indigo-600 focus:-translate-y-3 focus:shadow-2xl focus:shadow-indigo-600 transition-all w-96 ' />
  )
}
