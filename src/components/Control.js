import React, { useState } from "react";

export default function Control() {
	const [cart, setCart] = useState([]);
	const addProduct = (newProduct) => {
		setCart([...cart, newProduct]);
		console.log(cart);
	};

	return <div></div>;
}
