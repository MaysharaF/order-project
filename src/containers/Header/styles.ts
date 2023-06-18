import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1rem;
    color: var(--white);
    span {
      color: #8257e5;
    }
  }
`;

export const ActionContent = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--white);

    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0px;
      left: 0px;
      background-color: var(--white);
      transform-origin: right bottom;
      transition: transform 0.25s ease-out 0s;
    }
  }

  button {
    border: none;
    padding: 2% 5%;
    border-radius: 20px;
    background-color: var(--white);
    color: var(--dark-tone-ink);
    font-weight: bold;
  }
`;
