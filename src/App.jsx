import React from "react";
import Navbar from "./components/NavBar";
import Tasks from "./components/Tasks";
import { AppPageProvider } from "./AppPageContext";

function App() {
	return (
		<AppPageProvider>
			<div className="container mx-auto p-4">
				<Navbar />
				<Tasks />
				<div className="task-count p-4">
					Tasks remaining in App: <TaskCounter />
				</div>
			</div>
		</AppPageProvider>
	);
}

const TaskCounter = () => {
	const { taskCount } = useContext(AppPageContext);
	return <span>{taskCount}</span>;
};

export default App;
