import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import ScrollToTop from "react-scroll-to-top";
const NavTools = () => {
	const cookies = new Cookies();

	const goToTop = () => window.scrollTo(0, 0);
	return (
		<div>
			<div className="row nav-tools" id="nav-tools">
				{cookies.get("email") ? (
					<>
						<div className="col">
							<h5>{cookies.get("nombre")}</h5>
						</div>
						<div className="col" onClick={goToTop}>
							<NavLink to="/user" exact activeClassName="active">
								<ion-icon name="person"></ion-icon>
							</NavLink>
						</div>
					</>
				) : (
					<>
						<div className="col" onClick={goToTop}>
							<NavLink to="/signup" exact activeClassName="active">
								<ion-icon name="person-add-outline"></ion-icon>
							</NavLink>
						</div>
						<div className="col" onClick={goToTop}>
							<NavLink to="/login" exact activeClassName="active">
								<ion-icon name="log-in-outline"></ion-icon>
							</NavLink>
						</div>
					</>
				)}

				<div className="col" onClick={goToTop}>
					<NavLink to="/cart" exact activeClassName="active">
						<ion-icon name="cart-outline"></ion-icon>
					</NavLink>
				</div>
			</div>
			<ScrollToTop smooth />
		</div>
	);
};

export default NavTools;
