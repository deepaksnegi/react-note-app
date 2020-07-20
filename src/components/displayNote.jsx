import React from "react";

const DisplayNote = ({ note, handleCheck, handleDelete }) => {
	return (
		<div
			className={"row py-3" + (note.isCompleted ? " text-success" : "")}
			key={note.id}
		>
			<div className="col-md-10 my-2">
				<li className="list-group-item">{note.content}</li>
			</div>
			<div className="col-md-1 my-2">
				<button
					className="btn btn-block btn-success  rounded-0"
					onClick={handleCheck}
					disabled={note.isCompleted ? true : false}
				>
					<i className="fa fa-check fa-2x" aria-hidden="true"></i>
				</button>
			</div>
			<div className="col-md-1 my-2">
				<button
					className="btn btn-block btn-danger  rounded-0"
					onClick={handleDelete}
				>
					<i className="fa fa-times fa-2x " aria-hidden="true"></i>
				</button>
			</div>
		</div>
	);
};

export default DisplayNote;
