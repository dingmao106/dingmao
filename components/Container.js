import React from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  height: 100%;
  max-width: 1200px;
  padding: 0 5%;
  margin: 0 auto;
`;

const Container = ({ children }) => (
  <ContainerWrap>
    {children}
  </ContainerWrap>
);

export default Container;
