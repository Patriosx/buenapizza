import React from "react";
import { ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from "./ProductsElements";
const SingleProduct = ({ product, addProduct, onAdd }) => {
	return (
		<ProductCard key={product.id}>
			{/* <ProductImg src={product.img} alt={product.alt} /> */}
			<ProductInfo>
				<ProductTitle>{product.nombre}</ProductTitle>
				<ProductDesc>{product.ingredientes}</ProductDesc>
				<ProductPrice>{product.precio}</ProductPrice>
				{/* <ProductButton onClick={() => addProduct(product)}>Añadir</ProductButton> */}
				<ProductButton onClick={() => onAdd(product)}>Añadir</ProductButton>
			</ProductInfo>
		</ProductCard>
	);
};

export default SingleProduct;
