import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: var(--dark-tone-ink);
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    font: 400 1rem "Roboto", sans-serif;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }

  h1{
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
  }

  h2{
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white);
  }

  span, p{
    font-size: 1rem;
    color: var(--white);
  }

  :root{
    --dark-tone-ink: #121212;
    --white: #ffffff;
  }
`