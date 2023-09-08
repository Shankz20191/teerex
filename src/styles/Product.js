import { styled } from 'styled-components';

export const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: 5px 5px 5px 5px;
    border: solid #c8ccd0 1px;
    padding: 0.5rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    display: block;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
  }
`;
