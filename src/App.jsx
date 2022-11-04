import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./views/Main";
import Footer from "./components/Footer"

import "./App.css";

function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Main />
			<Footer/>
		</div>
	);
}

export default App;
