import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';
import { useState } from 'react';

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    width: 60vw;
  }

  input {
    display: inline-block;
    padding: 0.7rem;
    font-size: 1.1rem;
    border-radius: 5px 0px 0px 5px;
    border: solid #c8ccd0 1px;
    width: 7rem;
  }

  input:focus {
    outline: none;
  }

  button {
    display: inline-block;
    border-radius: 0px 5px 5px 0px;
    border: solid #c8ccd0 1px;
    border-left: 0;
    height: 2.82rem;
    width: 5rem;
  }

  @media (min-width: 992px) {
    input {
      width: 30rem;
    }
  }
`;

// display: inline-block;
// padding: 10px 15px;
// font-size: 20px;
// border-radius: 0;
// -webkit-appearance: none;
// border: 1px solid transparent;
