import React from "react";
import { connect } from "react-redux";
import { completeNote, deleteNote } from "../redux";

const DisplayNote = ({ note, completeNote, deleteNote }) => {
	return (
		<div
			className={"row py-3" + (note.isCompleted ? " text-success" : "")}
			key={note.id}
		>
			<div className="col-md-9 my-2">
				<li className="list-group-item">{note.content}</li>
			</div>
			<div className="col-md-1 my-2">
				<span className=" badge badge-primary rounded p-2">
					#{note.type}
				</span>
			</div>
			<div className="col-md-1 my-2">
				<button
					className="btn btn-block btn-success  rounded-0"
					onClick={() => completeNote(note.id)}
					disabled={note.isCompleted ? true : false}
				>
					<i className="fa fa-check fa-2x" aria-hidden="true"></i>
				</button>
			</div>
			<div className="col-md-1 my-2">
				<button
					className="btn btn-block btn-danger  rounded-0"
					onClick={() => deleteNote(note.id)}
				>
					<i className="fa fa-times fa-2x " aria-hidden="true"></i>
				</button>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		completeNote: (id) => dispatch(completeNote(id)),
		deleteNote: (id) => dispatch(deleteNote(id)),
	};
};
export default connect(null, mapDispatchToProps)(DisplayNote);
