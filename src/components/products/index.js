import { ProductsContainer, ProductHeading, ProductWrapper } from "./ProductsElements";
import SingleProduct from "./SingleProduct";

const Products = ({ heading, addProduct, pizzaList, onAdd }) => {
	return (
		<ProductsContainer>
			<ProductHeading>{heading}</ProductHeading>
			<ProductWrapper>
				{pizzaList.map((product, index) => {
					return <SingleProduct product={product} addProduct={addProduct} key={index} onAdd={onAdd} />;
				})}
			</ProductWrapper>
		</ProductsContainer>
	);
};

export default Products;
