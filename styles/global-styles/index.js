import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import boxSizing from '../box-sizing';
import basicLayout from '../basicLayout';

const globalStyles = () => injectGlobal`
  ${styledNormalize}
  ${boxSizing}
  ${basicLayout}
`;

export default globalStyles;
