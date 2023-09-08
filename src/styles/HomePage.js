import { styled } from 'styled-components';

export const Wrapper = styled.main`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
