import React from "react";
import Media from "react-media";
import NavigationDesktop from "./navigationDesktop";
import NavigationMobile from "./navigationMobile";

const Navigation = () => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? <NavigationDesktop /> : <NavigationMobile />;
				}}
			</Media>
		</>
	);
};

export default Navigation;
