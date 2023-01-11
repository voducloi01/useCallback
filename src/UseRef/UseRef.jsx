import { useState, useEffect, useRef } from "react";
function TextUseRef() {
	const [inputValue, setInputValue] = useState("");
	const previousInputValue = useRef("");
	const domeHtml = useRef();

	useEffect(() => {
		previousInputValue.current = inputValue;
	}, [inputValue]);

	useEffect(() => {
		domeHtml.current.style.color = "blue";
	});

	return (
		<>
			<h1> Demo useRef</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h2 ref={domeHtml}>Current Value: {inputValue}</h2>
			<h2>Previous Value: {previousInputValue.current}</h2>
		</>
	);
}

export default TextUseRef;
