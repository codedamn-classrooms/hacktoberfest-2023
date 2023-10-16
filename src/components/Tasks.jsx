import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Tasks() {
	const { taskCount, setTaskCount } = useContext(AppContext);

	const markAsDone = () => {
		// Bug: Incorrectly updating the task count
		setTaskCount(taskCount - 2);
	};

	return (
		<div>
			{Array.from({ length: taskCount }, (_, index) => (
				<div key={index} className="bg-gray-200 p-2 m-2">
					<p>Task {index + 1}</p>
					<button
						onClick={markAsDone}
						className="bg-green-500 text-white p-1 rounded"
					>
						Mark as Done
					</button>
				</div>
			))}
		</div>
	);
}

export default Tasks;
