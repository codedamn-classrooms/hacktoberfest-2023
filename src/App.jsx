import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				onClick={() => {
					setCount((count) => count + 1);

					alert(`Current Count is ${count}`);
				}}
			>
				Increment
			</button>
		</>
	);
}

export default App;
