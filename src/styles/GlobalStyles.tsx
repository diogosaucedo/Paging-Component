import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-size: 62.5%; // 1rem = 10px
    font-weight: 400;
    height: 100vh;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;
