import React from "react";
import CallActionBar from "./CallActionBar";
import HeroBody from "./HeroBody";
import "./heroStyles.css";
import { BrowserRouter as Router } from "react-router-dom";
const HeroPage = ({ cartItems, onAdd, onRemove, access, setAccess }) => {
	//cart lo recibe al final el componente Cart
	return (
		<div className="">
			<Router>
				<div className="grid-container">
					<CallActionBar cartItems={cartItems} />
					<HeroBody cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} access={access} setAccess={setAccess} />
				</div>
			</Router>
		</div>
	);
};

export default HeroPage;
