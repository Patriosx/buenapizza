import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import HeroPage from "./components/hero-page/HeroPage";
import Products from "./components/products";
function App() {
	const [pizzaList, setPizzaList] = useState([]);
	const [access, setAccess] = useState(false);
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
	};
	return (
		<>
			<HeroPage cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} access={access} setAccess={setAccess} />
			<Products heading="Elige tu pizza" getPizzas={getPizzas} pizzaList={pizzaList} onAdd={onAdd} cartItems={cartItems} />
		</>
	);
}

export default App;
