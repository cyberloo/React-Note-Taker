import { useState } from "react";
import { toast } from 'react-toastify';

export const Form = ({addNote}) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
		console.log({title, content})

        addNote({
            title: title,
			content: content,
            id: Date.now()
        })
        setTitle("");
		setContent("");
		toast("note entered!")
    }

  return (
    <form onSubmit={handleFormSubmit}
	>
        <label  htmlFor="title">
			Title
			<input
                type="text"
				id="title"
				value={title}
				onInput={(e) => setTitle(e.target.value)
				}
				required
				autoFocus
				maxLength={30}
				placeholder="Enter a note title. "
			/>
		</label>
		<label  htmlFor="note">
			Note
			<textarea 
                name="note"
                id="note"
				value={content}
				onInput={(e) => setContent(e.target.value)}
                cols="30"
                rows="10"
                placeholder="Enter note text. "
				 />
		</label>

		<input 
			    type="submit"
			    aria-label='Ajouter Note'
				 />
    </form>
  )
}
