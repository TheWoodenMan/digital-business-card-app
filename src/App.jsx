import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./views/Main";

import "./App.css";

function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
