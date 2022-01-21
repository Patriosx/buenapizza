import {
  ProductsContainer,
  ProductHeading,
  ProductWrapper,
} from "./ProductsElements";
import SingleProduct from "./SingleProduct";

const Products = ({ heading, pizzaList, onAdd }) => {
  console.log("pizzaList", pizzaList);
  return (
    <section>
      <ProductsContainer>
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
          {pizzaList.map((product, index) => {
            return (
              <SingleProduct product={product} key={index} onAdd={onAdd} />
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </section>
  );
};

export default Products;
