import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "./nav-tools/SignUp";
import LogIn from "./nav-tools/LogIn";
import User from "./nav-tools/User";

const HeroBody = () => {
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
						<div className="hero-content">
							<div className="hero-text">
								<h1>Las pizzas más cremas de Gran Canaria!</h1>
								<div>
									<button className="hero-btn">Haz tu pedido aquí!</button>
								</div>
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default HeroBody;
