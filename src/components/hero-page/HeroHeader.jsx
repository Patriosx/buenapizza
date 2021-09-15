import React from "react";
import Logo from "../resources/img/logo2.png";
import { NavLink } from "react-router-dom";

const HeroHeader = () => {
	return (
		<div className="HeroHeader">
			<header className="">
				<div className="left-text "></div>
				<div className="logo-header  ">
					<NavLink to="/" exact activeClassName="active">
						<img src={Logo} alt="" className="img-fluid" />
					</NavLink>
				</div>
				<div className="right-text "></div>
			</header>
		</div>
	);
};

export default HeroHeader;
