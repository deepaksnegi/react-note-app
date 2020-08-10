import React from "react";
import DisplayNote from "./displayNote";
import { connect } from "react-redux";
import { addNote, changeNote } from "../redux";

const DisplayNotes = ({ notes, handleStatus }) => {
	return (
		<>
			<div className="  card todo-card p-3 mt-4 border-bottom-0 rounded-0">
				<h6>
					Todo List{" "}
					<span className="babdge badge-primary rounded-circle px-2">
						{notes?.length}
					</span>
				</h6>
			</div>

			<div className=" card todo-card rounded-0 ">
				<div className="col-sm">
					{notes.length > 0 ? (
						<ul className="list-group ">
							{notes.map((note, index) => (
								<DisplayNote key={index} note={note} />
							))}
							<hr />
						</ul>
					) : (
						<div className="p-4">Please add notes...</div>
					)}
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		notes: state.notes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleStatus: (e) => dispatch(addNote(e)),
		changeNote: (note) => dispatch(changeNote(note)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayNotes);
