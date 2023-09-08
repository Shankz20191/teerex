import { styled } from "styled-components";

export const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10vw 0rem 10vw;

  h1 {
    border-bottom: 2px solid #49a6e9;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -20px;
    right: -20px;
    background: rgb(73 166 233 / 80%);
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 12px;
  }

  ul {
    display: flex;

    a {
      text-decoration: none;
    }

    li {
      color: black;
      margin: 0 0.8rem;
      font-size: 1.3rem;
      position: relative;
      list-style: none;
      display: flex;
      align-items: center;
    }

    .active {
      li {
        border-bottom: 2px solid #49a6e9;
      }
    }
  }
`;
