import { useState, useEffect } from "react";
import { React, Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./views/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
	const [showPages, setPages] = useState({
		showMain: true,
		showLogin: false,
		showSignup: false
	});

	function showMain() {
		setPages({
			showMain: true,
			showLogin: false,
			showSignup: false
		});
	}

	function showLogin() {
		setPages({
			showMain: false,
			showLogin: true,
			showSignup: false
		});
	}

	function showSignup() {
		setPages({
			showMain: false,
			showLogin: false,
			showSignup: true
		});
	}

	return (
		<div className="flex flex-col">
			<Navbar
				showPages={showPages}
				showLogin={showLogin}
				showMain={showMain}
				showSignup={showSignup}
			/>
			<p className="App-intro"></p>
			{showPages.showMain && <Main />}
			{showPages.showLogin && <Login />}
			{showPages.showSignup && <Signup />}
			<Footer />
		</div>
	);
}

export default App;
