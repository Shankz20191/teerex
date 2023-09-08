import { useCartContext } from '../context/cart_context';
import { Wrapper } from '../styles/Product';

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
