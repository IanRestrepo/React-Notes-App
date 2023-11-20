import { useState } from 'react'
import { Button } from '../Form/Button/Button'
import { InputForm } from '../Form/InputForm/InputForm'
import { TextAreaForm } from '../Form/TextAreaForm/TextAreaForm'

export const NotesForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleAddNote = () => {
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };
  return (
    <div className='text-center'>
        <InputForm InputPlaceHolder='Note Title' InputType='text' />
          <br />
        <TextAreaForm  TextAreaCols={22} TextAreaRows={5} TextAreaName={"NoteBody"}/>
          <br />
        <Button ButtonTitle='Add Note' IsLarge={true}/>
      </div>
  )
}
