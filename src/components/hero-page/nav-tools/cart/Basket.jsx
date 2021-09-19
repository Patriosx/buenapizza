import React from "react";
import { Checkout } from "./Checkout";

const Basket = ({ cartItems, onAdd, onRemove }) => {
	//
	const productsPrice = cartItems.reduce((previousValue, currentValue) => previousValue + currentValue.precio * currentValue.cantidad, 0);
	const discount = 0.7;
	const totalPrice = productsPrice * discount;
	return (
		<div>
			<div>{cartItems.length === 0 && <div>El carrito esta vacío</div>}</div>
			{cartItems.map((product) => {
				return (
					<div key={product._id} className="row basket">
						<div className="col">{product.nombre}</div>
						<div className="col text-center">
							<ion-icon name="remove-circle" id="remove" onClick={() => onRemove(product)}></ion-icon>

							<ion-icon name="add-circle" id="add" onClick={() => onAdd(product)}></ion-icon>
						</div>
						<div className="col text-end">
							{product.cantidad} x {(product.cantidad * product.precio).toFixed(2)}€
						</div>
					</div>
				);
			})}

			{cartItems.length !== 0 && (
				<>
					<hr />

					<div className="row">
						<div className="col">
							<p>
								Precio total: {productsPrice.toFixed(2)}€
								<br />
								Descuento: {discount * 10}%
								<br />
								<strong>Total a pagar: {totalPrice.toFixed(2)}€</strong>
							</p>
						</div>
					</div>
					<div>
						<Checkout totalPrice={totalPrice} cartItems={cartItems} />
					</div>
				</>
			)}
		</div>
	);
};

export default Basket;
