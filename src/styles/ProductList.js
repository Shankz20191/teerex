import { styled } from 'styled-components';

export const Wrapper = styled.div`
  img {
    height: 176px;
  }

  .product-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .product-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .product-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
