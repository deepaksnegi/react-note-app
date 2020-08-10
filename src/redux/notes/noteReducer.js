import * as NoteActions from "./noteType";

const initialState = {
	notes: [],
	note: "",
	noteTypes: ["Work", "Personal", "Expense"],
	noteType: "Personal",
};

const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case NoteActions.ADD_NOTE:
			return {
				...state,
				note: state.note,
				notes: [...state.notes, action.payload],
			};

		case NoteActions.CHANGE_NOTE:
			return {
				...state,
				note: action.payload,
			};

		case NoteActions.CHANGE_NOTETYPE:
			return {
				...state,
				noteType: action.payload,
			};

		case NoteActions.COMPLETE_NOTE:
			let notes = [...state.notes];
			notes.find((n) => n.id === action.payload).isCompleted = true;

			return {
				...state,
				notes: notes,
			};

		case NoteActions.DELETE_NOTE:
			return {
				...state,
				notes: [...state.notes].filter((n) => n.id !== action.payload),
			};
		default:
			return state;
	}
};

export default noteReducer;
