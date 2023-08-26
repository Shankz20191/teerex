import styled from 'styled-components';
import { Filters } from '../components/Filters';
import { Search } from '../components/Search';
import { ProductList } from '../components/ProductList';
import { useProductsContext } from '../context/products_context';

export const HomePage = () => {
  const { products_loading, products_error } = useProductsContext();
  return (
    <Wrapper className="page">
      <section className="section-center products">
        <Filters />
        <article>
          <Search />
          {products_loading && <div className="loading"></div>}
          {products_error ? <h5>Error Loading Products</h5> : <ProductList />}
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
