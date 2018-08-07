import { injectGlobal } from 'styled-components';

const boxSizing = injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default boxSizing;
