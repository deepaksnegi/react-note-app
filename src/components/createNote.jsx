import React from "react";

const CreateNote = ({ note, handleNoteChange, handleAddNote }) => {
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
								onChange={handleNoteChange}
							/>
						</div>
					</div>
					<div className="col-sm-3 mb-4">
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

export default CreateNote;
