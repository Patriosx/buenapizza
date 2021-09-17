import React, { useState, useEffect } from "react";
import { ProductsContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from "./ProductsElements";
import axios from "axios";
import SingleProduct from "./SingleProduct";

const Products = ({ heading, data }) => {
	const [pizzaList, setPizzaList] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		getPizzas();
	}, []);

	const getPizzas = async () => {
		try {
			const response = await axios(process.env.REACT_APP_BASE_URL + "/pizzas");
			setPizzaList(response.data.pizzas);
			console.log("pizzas obtenidas");
			console.log(response.data.pizzas);
			// console.log(pizzaList);

			// .catch((e) => console.log("error", e));
		} catch (error) {
			console.log(error);
		}
		console.log("pizzaList", pizzaList);
	};
	const addProduct = (newProduct) => {
		setCart([...cart, newProduct]);
	};
	// console.log(cart);
	return (
		<ProductsContainer>
			<ProductHeading>{heading}</ProductHeading>
			<ProductWrapper>
				{pizzaList.map((product, index) => {
					return (
						// <ProductCard key={index}>
						// 	{/* <ProductImg src={product.img} alt={product.alt} /> */}
						// 	<ProductInfo>
						// 		<ProductTitle>{product.nombre}</ProductTitle>
						// 		<ProductDesc>{product.ingredientes}</ProductDesc>
						// 		<ProductPrice>{product.precio}</ProductPrice>
						// 		<ProductButton onClick={() => addProduct(product)}>Añadir</ProductButton>
						// 	</ProductInfo>
						// </ProductCard>
						<SingleProduct product={product} addProduct={addProduct} />
					);
				})}
			</ProductWrapper>
		</ProductsContainer>
	);
};

export default Products;
