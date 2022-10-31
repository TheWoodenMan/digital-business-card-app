import { useState } from "react";
import Counter from "./components/Counter";
import Intro from "./components/Intro";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Theme />
			<Intro />
			<Button />
			<Navbar />
			<Counter />
		</div>
	);
}

export default App;
