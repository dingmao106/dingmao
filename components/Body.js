import React from 'react';
import styled from 'styled-components';

const BodyWarp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
  justify-content: space-around;
`;

const Body = ({ children }) => (
  <BodyWarp>
    {children}
  </BodyWarp>
);

export default Body;
