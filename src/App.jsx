import React, { useState } from "react";
import CreateNote from "./components/createNote";
import DisplayNotes from "./components/displayNotes";
import uuid from "uuid";
import "./components/note.css";

function App() {
	const [notes, setNotes] = useState([]);
	const [note, setNote] = useState("");

	//Handle adding a new note
	const handleAddNote = (e) => {
		e.preventDefault();
		if (note === "") return;
		const newNotes = [
			...notes,
			{ id: uuid(), content: note, isCompleted: false },
		];
		setNotes(newNotes);
		setNote("");
	};

	// Handle a note change in input box
	const handleNoteChange = (e) => {
		setNote(e.target.value);
	};

	//Handle note status i.e check or delete note
	const handleStatus = (status) => {
		if (status.isCompleted) {
			let newNotes = [...notes];
			newNotes.find((n) => n.id === status.id).isCompleted = true;
			setNotes(newNotes);
		} else {
			setNotes([...notes].filter((n) => n.id !== status.id));
		}
	};
	return (
		<div className="container mt-3 p-4 ">
			<h5>
				Add Todo{" "}
				<small className="text-muted">
					To add a todo, just fill the form below and click in add
					todo.
				</small>
			</h5>
			<div className=" card todo-card p-3 mt-5 border-bottom-0 rounded-0">
				<h6>Create a new todo</h6>
			</div>

			<CreateNote
				note={note}
				handleNoteChange={handleNoteChange}
				handleAddNote={handleAddNote}
			/>

			<DisplayNotes
				notes={[...notes].reverse()}
				handleStatus={handleStatus}
			></DisplayNotes>
		</div>
	);
}

export default App;
