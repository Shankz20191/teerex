import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Wrapper } from '../styles/AmountButton';

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
