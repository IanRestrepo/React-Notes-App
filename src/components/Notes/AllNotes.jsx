import { useState } from 'react'
import { NoteCard } from './NoteCard.jsx/NoteCard'

export const AllNotes = () => {

    const [notes, setNotes] = useState([]);
  return (
    <div className=' flex flex-wrap justify-center'>

        <NoteCard CardTitle={"Hello"} CardBody={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores quis fugit necessitatibus consequatur optio libero, error odio assumenda nam."} CardDate={Date() } />

    </div>
  )
}
