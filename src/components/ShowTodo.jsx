import React from 'react';

const ShowTodo = (props) => {
	// Destructure todos from props
	const { todos } = props;

	console.log('destructured todos', todos);

	// Helper function to render Todo as li
	const renderTodo = todos.map((todo, idx) => (
		<li key={idx} className="list-group-item">
			<p className="float-start text-center">{todo}</p>
			<button
				onClick={() => console.log(idx)}
				className="btn btn-danger float-end"
				title="Remove Todo"
			>
				-
			</button>
		</li>
	));

	return (
		<div className="container-fluid pt-5">
			<ul className="list-group mb-2 px-5">{renderTodo}</ul>
		</div>
	);
};

export default ShowTodo;
