import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: var(--white);
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    font: 400 1rem "Roboto", sans-serif;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  :root{
    --dark-tone-ink: #121212;
    --washed-black: #212529;
    --white: #ffffff;
    --lynx-white: #f7f7f7;
    --pompeii-ash: #6c757d;
  }
`