import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import HeroPage from "./components/hero-page/HeroPage";
import Products from "./components/products";
function App() {
	const [cart, setCart] = useState([]);
	const [pizzaList, setPizzaList] = useState([]);

	/****************************************************** */
	const [cartItems, setCartItems] = useState([]);
	//CART
	const onAdd = (product) => {
		console.log(cartItems);
		//buscamos la pizza segun id
		const exist = cartItems.find((item) => item._id === product._id);
		if (exist) {
			setCartItems(cartItems.map((item) => (item._id === product._id ? { ...exist, cantidad: exist.cantidad + 1 } : item)));
		} else {
			setCartItems([...cartItems, { ...product, cantidad: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((item) => item._id === product._id);
		if (exist.cantidad === 1) {
			//si solo hay 1 pizza la elimina
			setCartItems(cartItems.filter((item) => item._id !== product._id));
		} else {
			setCartItems(cartItems.map((item) => (item._id === product._id ? { ...exist, cantidad: exist.cantidad - 1 } : item)));
		}
	};
	/****************************************************** */
	useEffect(() => {
		getPizzas();
	}, []);

	const getPizzas = async () => {
		try {
			const response = await axios(process.env.REACT_APP_BASE_URL + "/pizzas");
			setPizzaList(response.data.pizzas);
			// console.log("pizzas obtenidas", response.data.pizzas);
			// .catch((e) => console.log("error", e));
		} catch (error) {
			console.log(error);
		}
		console.log("pizzaList", pizzaList);
	};
	const addProduct = (newProduct) => {
		setCart([...cart, newProduct]);
	};
	return (
		<>
			<HeroPage cart={cart} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
			<Products heading="Elige tu pizza" cart={cart} addProduct={addProduct} getPizzas={getPizzas} pizzaList={pizzaList} onAdd={onAdd} cartItems={cartItems} />
		</>
	);
}

export default App;
