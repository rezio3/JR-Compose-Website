import React from "react";
import "../style/css/footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<span className="footer-span">
				2022 Jakub Rezler || &copy; All rights reserved
			</span>
			<div className="icons-container-footer">
				<i className="fa-brands fa-soundcloud"></i>
				<i className="fa-brands fa-youtube"></i>
				<i className="fa-brands fa-linkedin"></i>
				<i className="fa-brands fa-twitter"></i>
				<i className="fa-brands fa-spotify"></i>
			</div>
		</div>
	);
};

export default Footer;
