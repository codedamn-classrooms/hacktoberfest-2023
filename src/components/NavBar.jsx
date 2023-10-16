import React, { useContext } from "react";
import { AppPageContext } from "../AppPageContext";

function Navbar() {
	const { taskCount } = useContext(AppPageContext);

	return (
		<nav className="bg-blue-500 p-4 text-white">
			<h1 className="text-xl">To-Do App</h1>
			<p>Tasks remaining: {taskCount}</p>
		</nav>
	);
}

export default Navbar;
