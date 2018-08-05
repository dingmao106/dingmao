import React from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.div`
  height: 100%;
  width: 100%;
`;

const Container = ({ children }) => (
  <ContainerWrap>
    {children}
  </ContainerWrap>
);

export default Container;
