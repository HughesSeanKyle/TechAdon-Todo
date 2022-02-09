import React, { useState } from 'react';

const Input = () => {
	// State - (Pass this state to ShowTodos as props for mapping)
	// Set as empty string by default
	const [todo, setTodo] = useState('');
	// Set as empty array by default (State to hold all Todos - Will eventually be localStorage)
	const [todos, setTodos] = useState([]);

	// Helper function to update todo state
	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	// Set a helper function to handle submit
	// - - OnSubmit be sure to revert todo back to empty string

	// Apply useEffect to update the component once todos state is updated

	return (
		<div className="container-fluid pt-5">
			<div className="mb-5">
				<h1>Todo List</h1>
			</div>
			<div className="input-group mb-3 px-5">
				<input
					type="text"
					className="form-control"
					placeholder="Add Todo"
					aria-label="Add Todo"
					aria-describedby="basic-addon1"
					value={todo}
					onChange={handleChange}
				/>
				<button className="btn btn-primary" title="Add Todo">
					+
				</button>
			</div>
		</div>
	);
};

export default Input;
