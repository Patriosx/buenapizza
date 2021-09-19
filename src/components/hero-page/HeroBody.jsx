import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "./nav-tools/SignUp";
import LogIn from "./nav-tools/LogIn";
import User from "./nav-tools/User";
import CartIndex from "./nav-tools/cart/CartIndex";

const HeroBody = ({ cartItems, onAdd, onRemove, access, setAccess }) => {
	return (
		<div className="HeroBody">
			<div className="hero-body">
				<Switch>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/login">
						<LogIn access={access} setAccess={setAccess} />
					</Route>
					<Route exact path="/user">
						<User />
					</Route>
					<Route exact path="/cart">
						<CartIndex cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
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
