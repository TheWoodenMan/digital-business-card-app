import { useState, useEffect } from "react";
import { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./views/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	const [state, setState] = useState({ apiResponse: "test" });

	let callAPI = async () => {
		try {
			await fetch("http://localhost:3000/testAPI")
				.then((res) => {
					console.log(res);
					res.text();
				})
				.then(setState({ apiResponse: res }));
		} catch (error) {
			return error;
		}
	};

	useEffect(() => {
		callAPI();
	});

	return (
		<div className="flex flex-col">
			<Navbar />
			<p className="App-intro">{state.apiResponse}</p>
			<Main />
			<Footer />
		</div>
	);
}

export default App;
