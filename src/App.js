import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/css/App.css";
import Navigation from "./layouts/navigation";
import Page from "./layouts/page";
import Footer from "./layouts/footer";
import ScrollToTop from "./layouts/scrollToTop";

class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<ScrollToTop>
					<div>
						<Navigation />
						<section className="main">
							<Page />
						</section>
						<footer>
							<Footer />
						</footer>
					</div>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
