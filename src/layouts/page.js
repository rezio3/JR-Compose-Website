import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Music from "../pages/music";
import Credits from "../pages/credits";
import Offer from "../pages/offer";
import Contact from "../pages/contact";
import "../style/page.css";

class Page extends Component {
	state = {};
	render() {
		return (
			<div className="page-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/music" element={<Music />} />
					<Route path="/credits" element={<Credits />} />
					<Route path="/offer" element={<Offer />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		);
	}
}

export default Page;
