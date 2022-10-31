import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Counter from "./components/Counter";
import Intro from "./components/Intro";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Intro />
			<Button />
			<Navbar />
			<Counter />
		</div>
	);
}

export default App;
