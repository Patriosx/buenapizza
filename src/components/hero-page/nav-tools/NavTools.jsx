import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

const NavTools = () => {
	const cookies = new Cookies();

	return (
		<div>
			<div className="row nav-tools">
				{cookies.get("email") ? (
					<div className="col">
						<NavLink to="/user" exact activeClassName="active">
							<ion-icon name="person"></ion-icon>
						</NavLink>
					</div>
				) : (
					<>
						<div className="col">
							<NavLink to="/signup" exact activeClassName="active">
								<ion-icon name="person-add-outline"></ion-icon>
							</NavLink>
						</div>
						<div className="col">
							<NavLink to="/login" exact activeClassName="active">
								<ion-icon name="log-in-outline"></ion-icon>
							</NavLink>
						</div>
					</>
				)}

				<div className="col">
					<NavLink to="/cart" exact activeClassName="active">
						<ion-icon name="cart-outline"></ion-icon>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavTools;
