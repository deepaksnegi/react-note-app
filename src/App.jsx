import React from "react";
import CreateNote from "./components/createNote";
import DisplayNotes from "./components/displayNotes";
import "./components/note.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
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

				<CreateNote />

				<DisplayNotes />
			</div>
		</Provider>
	);
}

export default App;
