import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset};

  :root {
    /* Typography */
    --main-font: 'Spartan', sans-serif;
    --second-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    /* Colors */
    --black: #0E0E10;
    --black-2: #404040;
    --black-3: #191919;
    --black-4: #2D2C2C;
    --white: #fff;
    --white-2: #F6F6F6;
    --white-3: #E8E8E8;
    --white-4: #808080;
    --orange: #D57522;
    --grey: #3E3E3E;
    --grey-2: #262626;
    --grey-3: #ececec;
    --grey-4: #363636;
    --grey-5: #D1D1D1;
    --grey-6: #ACACAC;
    --grey-7: #e5e5e5;

    /* Units */
    --gutter: .9375rem; // 15px
    --container-xl: 71.25rem; // 1140px
    --container-lg: 60rem; // 960px
    --container-md: 45rem; // 720px
    --container-sm: 33.75rem; // 540px
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: var(--black);
    font-family: var(--main-font);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    display: block;
  }
`;

export default GlobalStyles;
