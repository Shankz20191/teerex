import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

export const AmountButton = ({ quantity, id, max_quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useCartContext();

  const handleDec = () => {
    decreaseQuantity(id);
  };
  const handleInc = () => {
    increaseQuantity(id, max_quantity);
  };
  return (
    <Wrapper>
      <button type="button" className="amount-btn">
        <FaMinus onClick={handleDec} />
      </button>
      <h2 className="amount">{quantity}</h2>
      <button type="button" className="amount-btn">
        <FaPlus onClick={handleInc} />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;
