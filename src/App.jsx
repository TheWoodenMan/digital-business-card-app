import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Counter from "./components/Counter";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Counter />
		</div>
	);
}

export default App;
