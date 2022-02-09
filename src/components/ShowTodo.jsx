import React from 'react';

const ShowTodo = () => {
	return (
		<div className="container-fluid pt-5">
			<ul className="list-group mb-2 px-5">
				<li className="list-group-item">
					<p className="float-start text-center">A Todo Item</p>
					<button className="btn btn-danger float-end" title="Remove Todo">
						-
					</button>
				</li>
				<li className="list-group-item">
					<p className="float-start text-center">A Todo Item</p>
					<button className="btn btn-danger float-end" title="Remove Todo">
						-
					</button>
				</li>
				<li className="list-group-item">
					<p className="float-start text-center">A Todo Item</p>
					<button className="btn btn-danger float-end" title="Remove Todo">
						-
					</button>
				</li>
				<li className="list-group-item">
					<p className="float-start text-center">A Todo Item</p>
					<button className="btn btn-danger float-end" title="Remove Todo">
						-
					</button>
				</li>
				<li className="list-group-item">
					<p className="float-start text-center">A Todo Item</p>
					<button className="btn btn-danger float-end" title="Remove Todo">
						-
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ShowTodo;
