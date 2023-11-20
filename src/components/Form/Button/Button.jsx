import React from 'react'

export const Button = ({ButtonTitle, IsLarge, IsGreen}) => {
  return (
    <button className={!IsGreen ? "bg-indigo-950  w-96  py-2 border border-indigo-500 rounded-lg my-5 text-indigo-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-600 transition-all" : "bg-emerald-950 w-64 py-2 border border-emerald-500 rounded-lg my-5 text-emerald-500 hover:shadow-2xl hover:shadow-emerald-600 transition-all"}>
        {ButtonTitle}
    </button>
  )
}
