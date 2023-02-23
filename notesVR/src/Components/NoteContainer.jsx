import { NoteItem } from './NoteItem'

//STYLES
import styles from './NoteContainer.module.css'

export const NoteContainer = ({notes, deleteNote, toggleNote, enterEditMode}) => {
  return (
    <ul className={styles.note}>
    {notes.sort((a, b) => b.id - a.id).map(note => (
        <NoteItem
            key={note.id}
            note={note}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            toggleNote={toggleNote}
            enterEditMode={enterEditMode}
            />
    ))
    }
    </ul>
  )
}