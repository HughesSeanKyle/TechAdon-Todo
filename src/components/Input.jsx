import React, { useState, useEffect } from 'react';
import ShowTodo from './ShowTodo';

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
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(todo);
		setTodos((todos) => [...todos, todo]);
		console.log('Your todo has been submitted');
	};

	// Apply useEffect to update the component once todoS state is updated
	// - - NOTE: useEffect will run on initial load as well
	// - - Use useEffect cleanup to reset todo state so input val can be "" again
	useEffect(() => {
		console.log('I run everytime my condition is changed');

		console.log(todos);

		return () => {
			setTodo('');
		};
	}, [todos]);

	return (
		<div className="container-fluid pt-5">
			<div className="mb-5">
				<h1>Todo List</h1>
			</div>
			<form className="input-group mb-3 px-5">
				<input
					type="text"
					className="form-control"
					placeholder="Add Todo"
					aria-label="Add Todo"
					aria-describedby="basic-addon1"
					name="todo"
					type="text"
					value={todo}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					className="btn btn-primary"
					title="Add Todo"
				>
					+
				</button>
			</form>
			<ShowTodo />
		</div>
	);
};

export default Input;
