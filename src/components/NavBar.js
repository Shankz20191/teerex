import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Wrapper } from '../styles/NavBar';

export const NavBar = () => {
  const { total_quantity } = useCartContext();
  return (
    <Wrapper>
      <div>
        <h1>TeeRex Store</h1>
      </div>
      <ul>
        <NavLink to="/">
          <li>Products</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            Cart
            <span className="cart-container">
              <FaShoppingCart />
              {total_quantity === 0 ? (
                ''
              ) : (
                <span className="cart-value">{total_quantity}</span>
              )}
            </span>
          </li>
        </NavLink>
      </ul>
    </Wrapper>
  );
};