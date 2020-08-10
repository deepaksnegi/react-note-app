import React from "react";
import NoteType from "./noteType";
import { addNote, changeNote, changeNoteType } from "../redux";
import { connect } from "react-redux";
import uuid from "uuid";

const CreateNote = ({
	note,
	noteType,
	noteTypes,
	addNote,
	changeNote,
	changeNoteType,
}) => {
	//Handle adding a new note
	const handleAddNote = (e) => {
		e.preventDefault();
		if (note === "") return;

		const newNote = {
			id: uuid(),
			content: note,
			isCompleted: false,
			type: noteType,
		};

		addNote(newNote);
		changeNote("");
	};

	return (
		<div className=" card todo-card p-3  rounded-0">
			<form onSubmit={handleAddNote}>
				<div className="row mt-3">
					<div className="col-sm-9 ">
						<div className="form-group ">
							<input
								type="text"
								placeholder="Something in mind..."
								className="form-control  rounded-0"
								value={note}
								onChange={(e) => changeNote(e.target.value)}
							/>
						</div>
					</div>
					<div className="col-sm-3 mb-4">
						<NoteType
							noteTypes={noteTypes}
							handleNoteType={changeNoteType}
							noteType={noteType}
						></NoteType>
					</div>
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-block btn-success rounded-0"
						>
							<i className="fa fa-plus" aria-hidden="true"></i>{" "}
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		note: state.note,
		noteTypes: state.noteTypes,
		data: state,
		noteType: state.noteType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addNote: (note) => dispatch(addNote(note)),
		changeNote: (note) => dispatch(changeNote(note)),
		changeNoteType: (e) => dispatch(changeNoteType(e.target.value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
