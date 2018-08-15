import React from 'react';
import styled, { css } from 'styled-components';
import SocialService from './SocialService';

const MainDescriptionWrap = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font: bold 6.1538461538em/1 "Poppins", "sans-serif";
  color: #fff;
`;

const SubTitle = styled.div`
  margin-bottom: 30px;
  font-family: "Space Mono", "monospace";
  font-weight: bold;
  font-size: 1.2307692308em;
  color: #fff;
`;

const MainDescription = () => (
  <MainDescriptionWrap>
    <Title>Ding Mao</Title>
    <SubTitle>Graphic Designer & Model</SubTitle>
    <SocialService />
  </MainDescriptionWrap>
);

export default MainDescription;
