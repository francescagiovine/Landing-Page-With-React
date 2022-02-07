import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cardgroup.jsx";
import { Footer } from "./footer.jsx";

//create your first component
export const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
