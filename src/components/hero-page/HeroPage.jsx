import React from "react";
import CallActionBar from "./CallActionBar";
import HeroBody from "./HeroBody";
import HeroHeader from "./HeroHeader";
import "./heroStyles.css";
import { BrowserRouter as Router } from "react-router-dom";

const HeroPage = () => {
	return (
		<div className="">
			<Router>
				<div className="grid-container">
					<CallActionBar />
					<HeroHeader />
					<HeroBody />
				</div>
			</Router>
		</div>
	);
};

export default HeroPage;
