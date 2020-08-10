import * as NoteActions from "./noteType";

export const addNote = (note) => {
	return {
		type: NoteActions.ADD_NOTE,
		payload: note,
	};
};

export const changeNote = (note) => {
	return {
		type: NoteActions.CHANGE_NOTE,
		payload: note,
	};
};

export const changeNoteType = (noteType) => {
	return {
		type: NoteActions.CHANGE_NOTETYPE,
		payload: noteType,
	};
};

export const completeNote = (id) => {
	return {
		type: NoteActions.COMPLETE_NOTE,
		payload: id,
	};
};

export const deleteNote = (id) => {
	return {
		type: NoteActions.DELETE_NOTE,
		payload: id,
	};
};
