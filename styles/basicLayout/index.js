import { injectGlobal } from 'styled-components';

const stickyVerticalLayout = injectGlobal`
  html {
    overflow: hidden;
  }

  html,
  body,
  #__next {
    font-size: 16px;
    height: 100%;
    width: 100%;
    background-image: url(${process.env.BACKEND_URL}/static/main-background.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export default stickyVerticalLayout;
