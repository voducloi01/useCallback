import { useState, useCallback } from "react";
import Contact from "./Contact";
function UseCallBACK() {
	const [count, setCount] = useState(0);
	const handlecount = useCallback(() => {
		setCount((e) => e + 1);
	}, []);
	return (
		<div>
			<h2> Demo useCALLBACK</h2>
			<h3> {count}</h3>
			<Contact incre={handlecount} />
		</div>
	);
}

export default UseCallBACK;
