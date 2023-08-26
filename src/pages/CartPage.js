import styled from 'styled-components';
import { CartContent } from '../components/CartContent';

export const CartPage = () => {
  return (
    <main>
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section``;
