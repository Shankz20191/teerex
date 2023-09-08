import { Product } from './Product';
import { useProductsContext } from '../context/products_context';
import { Wrapper } from '../styles/ProductList';

export const ProductList = () => {
  const { filtered_products } = useProductsContext();

  if (filtered_products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, No products matched your search...
      </h5>
    );
  }

  return (
    <Wrapper>
      <div className="product-container">
        {filtered_products &&
          filtered_products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
      </div>
    </Wrapper>
  );
};
