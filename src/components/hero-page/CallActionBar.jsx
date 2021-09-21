import React from "react";
import Logo2 from "../resources/img/minipizza.jpg";
import NavTools from "../hero-page/nav-tools/NavTools";
import { NavLink } from "react-router-dom";
const CallActionBar = ({ cartItems }) => {
	// Registro de nuevos usuarios

	return (
		//justify-content-between
		<div className="CallActionBar d-flex justify-content-between align-items-center">
			<div className="row logo-action">
				<div className="logo" onClick={() => window.scrollTo(0, 0)}>
					<NavLink to="/" exact activeClassName="active">
						<img src={Logo2} className="" />
					</NavLink>
				</div>
			</div>
			<NavTools cartItems={cartItems} />
		</div>
	);
};
export default CallActionBar;
