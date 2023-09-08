import { AmountButton } from './AmountButton';
import { useCartContext } from '../context/cart_context';
import { Wrapper } from '../styles/CartItem';

export const CartItem = ({
  imageURL,
  name,
  price,
  quantity,
  id,
  max_quantity,
}) => {
  const { deleteProduct } = useCartContext();
  const handleDelete = () => {
    deleteProduct(id);
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={imageURL} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>{price} Rs/-</p>
        </div>
      </div>
      <AmountButton quantity={quantity} id={id} max_quantity={max_quantity} />
      <button className="btn btn-delete" onClick={handleDelete}>
        Delete
      </button>
    </Wrapper>
  );
};
