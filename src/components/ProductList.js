import styled from 'styled-components';
import { Product } from './Product';
import { useProductsContext } from '../context/products_context';

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

const Wrapper = styled.div`
  img {
    height: 176px;
  }

  .product-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .product-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .product-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
