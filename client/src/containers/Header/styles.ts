import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1rem;
    color: var(--dark-tone-ink);
  }
`;

export const ActionContent = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: space-between;


  a {
    position: relative;
    text-decoration: none;
    color: var(--dark-tone-ink);

    &.active {
      font-weight: bold;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: var(--dark-tone-ink);
      transition: width 0.3s ease-in-out;
    }

    &:hover::before {
      width: 100%;
    }
  }

  button {
    border: none;
    padding: 2% 5%;
    border-radius: 20px;
    background-color: var(--dark-tone-ink);
    color: var(--white);
    font-weight: bold;
  }
`;
