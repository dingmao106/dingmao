import styled, { css } from 'styled-components';

const PageWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;

  ${props => props.isActive && css`
    z-index: 10;
    opacity: 1;
  `}
`;

export default PageWrap;
