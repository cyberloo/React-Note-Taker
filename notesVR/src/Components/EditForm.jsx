import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

//LIBRARY IMPORTS
export const EditForm = ({editedNote, updateNote, closeEditMode}) => {
const [updatedNoteTitle, setUpdatedNoteTitle] = useState(editedNote.title)
const [updatedNoteContent, setUpdatedNoteContent] = useState(editedNote.content)

useEffect(()=> {
    const closeModalIfEscaped = (e) => {
        e.key == "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
        window.removeEventListener('keydown', closeModalIfEscaped)
      }


}, [closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateNote({...editedNote,
            title: updatedNoteTitle,
            content: updatedNoteContent})
            toast("note updated!")

            console.log({ updatedNoteTitle, updatedNoteContent})
    }

  return (
    <div role="dialog"
        aria-labelledby='editNote'
        onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
        <form className='todo'
        onSubmit={handleFormSubmit}
        >
            <div className='wrapper'>
                <label  htmlFor="title">
			view Title
			<input
                type="text"
				id="title"
				value={updatedNoteTitle}
				onInput={(e) => setUpdatedNoteTitle(e.target.value)}
				required
				autoFocus
				maxLength={30}
				placeholder="view note title. "
			/>
		</label>
		<label  htmlFor="note">
			view Note
			<textarea 
                name="note"
                id="note"
				value={updatedNoteContent}
				onInput={(e) => setUpdatedNoteContent(e.target.value)}
                cols="30"
                rows="10"
                placeholder="view note text. "
				 />
		</label>
            </div>
            <button
                className='btn'
                aria-label={`Confirmer mise a jour de la Tache : ${updatedNoteTitle}`}
                type="submit"
                >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

                </button>
        </form>
    </div>
  )
}
