import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';

export const Product = ({ id, name, price, imageURL, quantity }) => {
  const { addToCart } = useCartContext();

  const handleClick = () => {
    addToCart(id, name, price, imageURL, quantity);
  };

  return (
    <Wrapper>
      <div className="container">
        <img src={imageURL} alt={name} />
        <footer>
          <div>
            <h4>{name}</h4>
            <p>Rs {price}/-</p>
          </div>
          <button onClick={handleClick} className="btn btn-add">
            Add to Cart
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: 5px 5px 5px 5px;
    border: solid #c8ccd0 1px;
    padding: 0.5rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    display: block;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
  }
`;
