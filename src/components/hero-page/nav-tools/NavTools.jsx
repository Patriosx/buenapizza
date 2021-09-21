import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import ScrollToTop from "react-scroll-to-top";
const NavTools = ({ cartItems }) => {
	const cookies = new Cookies();

	const goToTop = () => window.scrollTo(0, 0);
	return (
		<div className=" ">
			<div className=" nav-tools d-flex bd-highlight" id="nav-tools">
				{cookies.get("email") ? (
					<>
						<div className="p-2 flex-fill bd-highlight">{cookies.get("nombre")}</div>
						<div className="p-2 flex-fill bd-highlight" onClick={goToTop}>
							<NavLink to="/user" exact activeClassName="active">
								<ion-icon name="person"></ion-icon>
							</NavLink>
						</div>
					</>
				) : (
					<>
						<div className="p-2" onClick={goToTop}>
							<NavLink to="/signup" exact activeClassName="active">
								<ion-icon name="person-add-outline"></ion-icon>
							</NavLink>
						</div>
						<div className="p-2" onClick={goToTop}>
							<NavLink to="/login" exact activeClassName="active">
								<ion-icon name="log-in-outline"></ion-icon>
							</NavLink>
						</div>
					</>
				)}

				<div className="p-2 flex-fill bd-highlight" onClick={goToTop}>
					<NavLink to="/cart" exact activeClassName="active">
						<ion-icon name="cart-outline"></ion-icon>
						<div className="cart-item">{cartItems.length}</div>
					</NavLink>
				</div>
			</div>
			<ScrollToTop smooth />
		</div>
	);
};

export default NavTools;
