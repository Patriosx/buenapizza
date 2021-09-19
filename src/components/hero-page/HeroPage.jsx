import React from "react";
import CallActionBar from "./CallActionBar";
import HeroBody from "./HeroBody";
import "./heroStyles.css";
import { BrowserRouter as Router } from "react-router-dom";
const HeroPage = ({ cart, cartItems, onAdd, onRemove }) => {
	//cart lo recibe al final el componente Cart
	return (
		<div className="">
			<Router>
				<div className="grid-container">
					<CallActionBar cart={cart} cartItems={cartItems} />
					<HeroBody cart={cart} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
				</div>
			</Router>
		</div>
	);
};

export default HeroPage;
