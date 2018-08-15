import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #fff;
  height: 80px;
  width: 100%;
`;

const ItemStyle = styled.a`
  display: inline-block;
  line-height: 80px;
  padding: 0 .8em;
  margin: 0 1em;
  font-weight: 700;
  color: black;
  cursor: pointer;

  ${({ isActive }) => (isActive ?
    css`
      background-color: black;
      color: #fff;
    ` :
    css`
      &:hover {
        color: #7777f7;
      }
    `)}
`;

const Item = ({ onSwitchPage, name = '', isActive, children }) => (
  <ItemStyle
    onClick={() => onSwitchPage(name)}
    isActive={isActive}
  >
    {children}
  </ItemStyle>
);

const Logo = styled.h1`
  font-family: 'Permanent Marker', cursive;
  margin: 0;
  margin-left: 1em;
  line-height: 80px;
`;

const LeftBody = styled.div`
`;
const RightBody = styled.div`
`;

const Header = ({ getIsActive, onSwitchPage }) => (
  <HeaderWrap>
    <LeftBody>
      <Logo>DING MAO</Logo>
    </LeftBody>
    <RightBody>
      <Item onSwitchPage={onSwitchPage} isActive={getIsActive()} >Home</Item>
      <Item onSwitchPage={onSwitchPage} name="about" isActive={getIsActive('about')} >About</Item>
      <Item onSwitchPage={onSwitchPage} name="collection" isActive={getIsActive('collection')}>Collection</Item>
      <Item onSwitchPage={onSwitchPage} name="contact" isActive={getIsActive('contact')} >Contact</Item>
    </RightBody>
  </HeaderWrap>
);

Header.propTypes = {
  getIsActive: PropTypes.func,
  onSwitchPage: PropTypes.func,
};

export default Header;
