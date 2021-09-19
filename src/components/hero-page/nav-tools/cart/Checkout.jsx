import React from "react";
import Cookies from "universal-cookie";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export const Checkout = ({ totalPrice, cartItems }) => {
	const goToTop = () => window.scrollTo(0, 0);
	const cookies = new Cookies();

	cookies.set("cartItems", cartItems, { path: "/cart" });

	const [order, setOrder] = useState({
		id_usuario: cookies.get("userId"),
		id_pizzas: [],
		precio: totalPrice,
	});

	console.log(cartItems);
	console.log("order", order);
	const checkoutSubmit = async () => {
		cartItems.forEach((p) => {
			order.id_pizzas.push(p._id);
		});
		await axios
			.post(`${process.env.REACT_APP_BASE_URL}/pedidos`, order, {
				headers: {
					Authorization: "Bearer " + cookies.get("token"), // En los headers van 'Bearer ' + token recibido
				},
			})
			.then((response) => response.data)
			.then((data) => {
				console.log("Pedido creado");
				//comprobamos cookiesLog
				// setAccess(true);

				swal(`Pedido realizado con exito`);
				window.location.href = "./";
			})
			.catch((error) => {
				console.log(error.response.data);
				alert("Fallo al iniciar Sesión. Comprueba tus datos.");
			});
	};
	return (
		<>
			{cookies.get("email") ? (
				<button className="btns CheckoutBtn" onClick={checkoutSubmit}>
					Finalizar pedido
				</button>
			) : (
				<div className="mb-2">
					<div className="row">
						<div className="col text-center" onClick={goToTop}>
							<NavLink to="/login" exact activeClassName="active">
								<button className="btns ">Logearse</button>
							</NavLink>
						</div>
						<div className="col text-center" onClick={goToTop}>
							<NavLink to="/signup" exact activeClassName="active">
								<button className="btns">Registrarse</button>
							</NavLink>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
