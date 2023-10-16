import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [taskCount, setTaskCount] = useState(5); // Assuming initially there are 5 tasks

	return (
		<AppContext.Provider value={{ taskCount, setTaskCount }}>
			{props.children}
		</AppContext.Provider>
	);
};
