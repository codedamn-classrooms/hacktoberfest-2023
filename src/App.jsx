import { useState, useRef } from "react";

function App() {
	const [count, setCount] = useState(0);
	const dialogRef = useRef();

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				onClick={() => {
					setCount((count) => count + 1);

					dialogRef.current.showModal();
				}}
			>
				Increment
			</button>

			<dialog ref={dialogRef}>
				<button autofocus onClick={() => dialogRef.current.close()}>
					Close
				</button>
				<p>{count}</p>
			</dialog>
		</>
	);
}

export default App;
