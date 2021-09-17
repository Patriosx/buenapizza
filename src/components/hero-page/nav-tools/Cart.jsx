import React from "react";
import { cart } from "../../products/index";
const Cart = () => {
	console.log(cart);
	return (
		<>
			<div className="container">
				{cart.map((product) => {
					return (
						<div>
							<p>{product.name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Cart;
