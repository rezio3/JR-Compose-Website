import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/App.css";
import Navigation from "./layouts/navigation";
import Page from "./layouts/page";
import Footer from "./layouts/footer";

class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<section className="main">
						<Page />
					</section>
					<footer>
						<Footer />
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
