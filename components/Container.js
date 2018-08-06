import React from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.div`
  height: 100%;
  width: 1280px;
  padding: 0 3em;
  margin: 0 auto;
`;

const Container = ({ children }) => (
  <ContainerWrap>
    {children}
  </ContainerWrap>
);

export default Container;
