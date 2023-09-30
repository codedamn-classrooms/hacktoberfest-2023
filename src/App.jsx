import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 id="counter">{number}</h1>
				<button
					id="incrementButton"
					onClick={() => {
						setNumber(number + 1);
						setNumber(number + 1);
						setNumber(number + 1);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}
