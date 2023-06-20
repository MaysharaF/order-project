import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 25rem;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    
`;


export const ImageProduct = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: var(--lynx-white);
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  margin-top: 1%;
  padding: 1%;

  .info-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .observation {
    font-size: 0.7rem;
    color: var(--pompeii-ash);
    margin-top: 2%;
  }

  button {
    border-radius: 20px;
    border: none;
    padding: 3%;
    background-color: var(--dark-tone-ink);
    color: var(--white);
    margin-top: 5%;

    &:hover {
      transition: 0.2s;
      background-color: var(--washed-black);
    }
  }
`;