import React, { useState } from "react";
import { ProductsContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from "./ProductsElements";

const Products = ({ heading, data }) => {
	const [pizzaList, setPizzaList] = useState([]);
	return (
		<ProductsContainer>
			<ProductHeading>{heading}</ProductHeading>
			<ProductWrapper>
				{data.map((product, index) => {
					return (
						<ProductCard key={index}>
							<ProductImg src={product.img} alt={product.alt} />
							<ProductInfo>
								<ProductTitle>{product.name}</ProductTitle>
								<ProductDesc>{product.desc}</ProductDesc>
								<ProductPrice>{product.price}</ProductPrice>
								<ProductButton>Añadir</ProductButton>
							</ProductInfo>
						</ProductCard>
					);
				})}
			</ProductWrapper>
		</ProductsContainer>
	);
};

export default Products;
