import { useState } from "react";
import Content from "./Content";
function Memo() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1> Demo memo</h1>
			<Content />
			<h4>{count}</h4>
			<button onClick={() => setCount(count + 1)}>Count</button>
		</div>
	);
}

export default Memo;
