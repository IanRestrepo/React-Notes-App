// Import from React & Libraries


// Import Components
import { NotesForm } from './components/Notes/NotesForm';
import { AllNotes } from './components/Notes/AllNotes';

function App() {

  return (
    <div className='min-h-screen  dark:bg-zinc-950'>

      <div className='py-5'>
        <NotesForm />
      </div>

        <hr className='w-1/2 mx-auto border-indigo-600'/>

      <div className='py-5'>
        <AllNotes />
      </div>
        
    </div>
  )
}

export default App
