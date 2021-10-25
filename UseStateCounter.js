import { useState, useCallback, useEffect } from "react";

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const incrementCounter = useCallback(() => {
		setValue(value + 1);
	}, [value]);

	const decrementCounter = useCallback(() => {
		setValue(value - 1);
	}, [value]);

	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={decrementCounter}>
					decrease
				</button>

				<button className="btn" onClick={incrementCounter}>
					increase
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
