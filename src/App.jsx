import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1>{number}</h1>
				<button
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
