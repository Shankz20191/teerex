import { Filters } from '../components/Filters';
import { Search } from '../components/Search';
import { ProductList } from '../components/ProductList';
import { useProductsContext } from '../context/products_context';
import { Wrapper } from '../styles/HomePage';

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
