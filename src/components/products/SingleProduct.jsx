import React from "react";
import swal from "sweetalert";
import { ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from "./ProductsElements";
const SingleProduct = ({ product, onAdd }) => {
	return (
		<ProductCard key={product.id}>
			<ProductImg src={product.img_url} alt={product.alt} />
			<ProductInfo>
				<ProductTitle>{product.nombre}</ProductTitle>
				<ProductDesc>{product.ingredientes}</ProductDesc>
				<ProductPrice>{product.precio}€</ProductPrice>
				<ProductButton
					onClick={() => {
						onAdd(product);
						swal(product.nombre, "Se ha añadido a la cesta");
					}}
				>
					Añadir
				</ProductButton>
			</ProductInfo>
		</ProductCard>
	);
};

export default SingleProduct;
