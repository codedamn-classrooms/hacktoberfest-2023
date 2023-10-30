import { useState, useEffect } from "react";
import "./App.css";

export const useTheme = () => {
	const [theme, setTheme] = useState({ name: "light" });

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme({ name: storedTheme });
		}
	});

	if (theme.name === "light") {
		var toggleTheme = () => {
			theme.name = "dark";
			setTheme(theme);
		};
	} else {
		var toggleTheme = () => {
			theme.name = "light";
			setTheme(theme);
		};
	}

	return { theme: theme.name, toggleTheme };
};

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			id="container"
			style={{
				backgroundColor: theme === "light" ? "white" : "black",
			}}
		>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default App;
