function Contact({ incre }) {
	console.log("render");
	return (
		<>
			<button onClick={incre}> Click Me</button>
		</>
	);
}

export default Contact;
