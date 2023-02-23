import { useState } from 'react';

import { Form } from './Components/Form';
import { NoteContainer } from './Components/NoteContainer';
import { EditForm } from './Components/EditForm';
import { useLocalStorage } from './Hooks/uselocalStorage';
import { ThemeSwitcher } from './Components/ThemeSwitcher';

function App() {
  const [notes, setNotes] = useLocalStorage('todoVR.notes', [])
  const [previousFocusEl, setPreviousFocusEl] = useState(null)
  const [editedNote, setEditedNote] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addNote = (note) => {
    
    setNotes(prevState => [...prevState,note])
  }

  const deleteNote = (id) => {
    setNotes(prevState => prevState.filter((note) => note.id !== id))
  }

  const updateNote = (note) => {
    setNotes(prevState => prevState.map(n => (
      n.id === editedNote.id
        ? { ...n, title: note.title, content: note.content }
        : n
    )))
    closeEditMode();
  }
    const closeEditMode = () => {
      setIsEditing(false);
      previousFocusEl.focus();
    }
  
  
    const enterEditMode = (note) => {
      setEditedNote(note);
      setIsEditing(true);
      setPreviousFocusEl(document.activeElement);
    }
  
  return (
    <div className='app-container'>
    <div className="form-container">
      		<header>
			      <h1>Note Taker</h1>
        		<h3>Add a New Note:</h3>
			      <ThemeSwitcher />
		      </header>
          {isEditing && (
        <EditForm 
                editedNote={editedNote}
                updateNote={updateNote}
                closeEditMode={closeEditMode}
              />
            )
      }
		    <Form 
        addNote={addNote}
         />
          
    </div><div className='note-container'>
              {notes && (
              <NoteContainer
                notes={notes}
                deleteNote={deleteNote}
                
                enterEditMode={enterEditMode}
              />)}
            </div>
    </div>
  )
}

export default App
