import styled from 'styled-components';
import { AmountButton } from './AmountButton';
import { useCartContext } from '../context/cart_context';

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

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
`;
