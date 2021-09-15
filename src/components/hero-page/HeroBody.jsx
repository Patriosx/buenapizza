import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "./nav-tools/SignUp";
import LogIn from "./nav-tools/LogIn";
import User from "./nav-tools/User";
import Cookies from "universal-cookie";

const HeroBody = () => {
	const cookies = new Cookies();

	return (
		<div className="HeroBody">
			<div className="hero-body">
				<Switch>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/login">
						<LogIn />
					</Route>
					<Route exact path="/user">
						<User />
					</Route>
					<Route exact path="/cart">
						{/* <Cart /> */}
					</Route>
					<Route exact path="/">
						<div className="hero-text">
							<h1>
								Las pizzas más cremas
								<br /> de Gran Canaria!
							</h1>
							<a href="#" className="btn btn-warning">
								DOMICILIO
							</a>
							<a href="#" className="btn btn-outline-warning">
								RECOGER
							</a>
						</div>
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default HeroBody;
