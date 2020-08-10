import React from "react";

const NoteType = ({ noteTypes, handleNoteType, noteType }) => {
	return (
		<select
			className="form-control"
			value={noteType}
			onChange={handleNoteType}
		>
			{noteTypes &&
				noteTypes.map((type, index) => (
					<option value={type} key={index}>
						{type}
					</option>
				))}
		</select>
	);
};

export default NoteType;
