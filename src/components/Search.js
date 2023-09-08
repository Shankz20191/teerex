import { FaSearch } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';
import { useState } from 'react';
import { Wrapper } from '../styles/Search';

export const Search = () => {
  const [search, setSearch] = useState('');
  const { searchProducts } = useProductsContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(search);
    setSearch('');
  };

  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
