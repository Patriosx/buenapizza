import { useState } from "react";
import { productData } from "../../../products/data";
import Basket from "./Basket.jsx";
import Cart from "./Cart";
const Index = ({ cart, cartItems, onAdd, onRemove }) => {
	console.log("cart", cart);

	return (
		<div className="container card mt-5 ">
			<div className="CartIndex">
				<div className="col">
					<Cart cart={cart} cartItems={cartItems} />
				</div>
				<div className="col">
					<Basket cart={cart} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
				</div>
			</div>
		</div>
	);
};

export default Index;
