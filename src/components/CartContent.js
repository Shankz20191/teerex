import { CartItem } from './CartItem';
import { useCartContext } from '../context/cart_context';
import { Wrapper } from '../styles/CartContent';

export const CartContent = () => {
  const { cart, total_amount } = useCartContext();

  if (!total_amount) {
    return (
      <Wrapper className="section section-center">
        <h1>Cart is Empty</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section section-center">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="total">
        <h4>Total: </h4> <em> {total_amount} Rs/-</em>
      </div>
    </Wrapper>
  );
};