import { useState } from "react";
import { productData } from "../../../products/data";
const Cart = ({ cartItems }) => {
	// console.log("cartItems", cartItems);
	return (
		<div>
			<h1>Productos en la cesta</h1>
			{cartItems.map((product, index) => {
				// console.log("id pizza: ", product._id);
				return (
					<div className="card mb-3" style={{ maxWidth: "540px" }} key={index}>
						<div className="row g-0">
							<div
								className="col
							"
								style={{ maxWidth: "6rem" }}
							>
								<img src={product.img_url} className="img-fluid rounded-start" alt="..." />
							</div>
							<div
								className="col
							"
							>
								<div className="card-body">
									<h5 className="card-title">{product.nombre}</h5>
									<p className="card-text">{product.precio} €</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
