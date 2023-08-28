import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* CSS Reset by Mirkov Sasa https://github.com/mirkovsasa/CSS-Reset/blob/main/Reset.css */

/* Resetting defaults */
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}

/* Setting border box model for easier sizing of elements */
*, *::before, *::after {
  box-sizing: border-box;
}
  :root {
    --blue: #0B30DE;
    --mint: #DAF7DC;
    --black: #000;
    --white: #FAF9F6;
    --bg: #1F0318;
    --red: #EB5E55;
    --green: #00916E;
    --lightgray: #ebebeb;
  }
  html {
    background-color: var(--white);
    font-size: 10px;
  }

  html, body {
    min-height: 100dvh;
    max-width: 100%;
  }
  body {
    position: relative;
  }
  button {
    display: flex;
    padding: 2rem;
    justify-content: center;
    color: white;
    border: 0;
    cursor: pointer;
    box-shadow:
      1.2px 1.2px 1.9px rgba(0, 0, 0, 0.031),
      2.7px 2.7px 4.3px rgba(0, 0, 0, 0.045),
      4.8px 4.8px 7.7px rgba(0, 0, 0, 0.055),
      8px 8px 12.8px rgba(0, 0, 0, 0.065),
      13.2px 13.2px 21.2px rgba(0, 0, 0, 0.075),
      23.1px 23.1px 37px rgba(0, 0, 0, 0.089),
      50px 50px 80px rgba(0, 0, 0, 0.12)
    ;  
    transition: all 0.05s;
    a {
      text-decoration: none;
      color: white;
      font-size: 2.25rem;
    }
    &:hover {
      background: transparent;
      border: .125rem solid tomato;
      color: tomato;
      box-shadow: none;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } 

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--lightgray) #fff;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--mint) ;
    border-radius: 6px;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export default GlobalStyles
