/** @format */

import React from "react";
import NavBar from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
	return (
		<div className="container">
			<NavBar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
