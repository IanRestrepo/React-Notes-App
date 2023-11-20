import React from 'react'
import { Button } from '../../Form/Button/Button'

export const NoteCard = ({CardTitle, CardDate, CardBody}) => {
  return (
    <div className='bg-gradient-to-r from-emerald-950 max-w-md border border-emerald-600 px-5 py-3 text-emerald-600 rounded my-3 mx-3'>
        <h3 className='text-2xl font-bold'>{ CardTitle }</h3>
        <small className=''>{ CardDate }</small>
        <p className='py-5'>{ CardBody }</p>
        <Button ButtonTitle={"Done"} IsGreen={true}/>
    </div>
  )
}
