import React from "react";
import Logo2 from "../resources/img/minipizza.jpg";
import NavTools from "../hero-page/nav-tools/NavTools";
import { NavLink } from "react-router-dom";
const CallActionBar = () => {
	// Registro de nuevos usuarios

	return (
		<div className="CallActionBar d-flex justify-content-between align-items-center">
			<div className="row logo-action">
				<div className="logo col-2">
					<NavLink to="/" exact activeClassName="active">
						<img src={Logo2} className="" />
					</NavLink>
				</div>
				<div className="col-9 phone">
					<h5 className="text-muted">+34 828 546 987</h5>
				</div>
			</div>
			<NavTools />
		</div>
	);
};
export default CallActionBar;
