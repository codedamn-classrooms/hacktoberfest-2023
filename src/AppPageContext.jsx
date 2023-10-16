// src/AppPageContext.js
import React, { useState, createContext } from "react";

export const AppPageContext = createContext();

export const AppPageProvider = (props) => {
	const [taskCount, setTaskCount] = useState(5); // Assuming initially there are 5 tasks

	return (
		<AppPageContext.Provider value={{ taskCount, setTaskCount }}>
			{props.children}
		</AppPageContext.Provider>
	);
};
