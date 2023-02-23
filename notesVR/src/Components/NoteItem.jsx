
//STYLES
import styles from './NoteItem.module.css'

//LIBRARY IMPORTS
import { CheckIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

export const NoteItem = ({note, deleteNote, toggleNote, enterEditMode}) => {
    const{ title, content } = note;

return (
    <li className={styles.note}>
    
        <div className="note-group">
                <h4 className={styles.title} >{title}</h4>
                <p className={styles.content} >{content}</p>
        </div>

        <div className={styles.btnContainer} >
                    <button
                        className={`btn`}
                        aria-label={`Update ${note.title} note`}
                        onClick={() => enterEditMode(note)}
                        >
                            <PencilIcon width={24} height={24}/>

                        </button>
                        <button
                        className={`btn ${styles.delete}`}
                        aria-label={`Delete ${note.title} note`}
                        onClick={() => deleteNote(note.id)}
                        >
                            <TrashIcon width={24} height={24}/>

                        </button>
                </div>
    </li>
  )
}
