import Checkbox from "./Checkbox/CheckBox";
import Debounce from "./Debounce/Debounce";
import Memo from "./Memo/Memo";
import UseCallBACK from "./UseCallback/UseCallBack";
import TextUseRef from "./UseRef/UseRef";

function App() {
	return (
		<div style={{ textAlign: "center" }}>
			<Checkbox />
			<Debounce />
			<TextUseRef />
			<Memo />
			<UseCallBACK />
		</div>
	);
}

export default App;
