import React from "react";
import "../style/css/footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<span className="footer-span">
				2022 Jakub Rezler || &copy; All rights reserved
			</span>
			<div className="icons-container-footer">
				<a href="https://soundcloud.com/jakub-rezler-883804903">
					<i className="fa-brands fa-soundcloud"></i>
				</a>
				<a href="https://www.youtube.com/user/Reziok3">
					<i className="fa-brands fa-youtube"></i>
				</a>
				<a href="https://www.linkedin.com/in/jakub-rezler-7b08211ab">
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a href="https://twitter.com/Jakub_Rezler">
					<i className="fa-brands fa-twitter"></i>
				</a>
				<a href="https://open.spotify.com/artist/7poqdc8Z8CksjZhleR5fbK?si=JUumspV_TGeaKHzgn6wLgg">
					<i className="fa-brands fa-spotify"></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
