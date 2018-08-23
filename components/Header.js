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

const Bg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: black;
  transition: 0.3s;
  ${({ isActive }) => isActive && css`
    height: 100%;
  `}
`;

const ItemStyle = styled.a`
  position: relative;
  padding: 0 1em;
  display: inline-block;
  line-height: 80px;
  font: bold 1.0769230769em/80px Poppins, sans-serif;
  color: black;
  cursor: pointer;

  > span {
    position: relative;
    z-index: 2;
  }

  ${({ isActive }) => (isActive ?
    css`
      color: #fff;
    ` :
    css`
      &:hover {
        color: #7777f7;
      }
    `)}
`;

const Item = ({ onSwitchPage, isActive, children }) => (
  <ItemStyle
    onClick={onSwitchPage}
    isActive={isActive}
  >
    <span>{children}</span>
    <Bg isActive={isActive} />
  </ItemStyle>
);

Item.propTypes = {
  isActive: PropTypes.bool,
  onSwitchPage: PropTypes.func,
}

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

const Header = ({ onSwitchPage, currentPage }) => (
  <HeaderWrap>
    <LeftBody>
      <Logo>DING MAO</Logo>
    </LeftBody>
    <RightBody>
      <Item onSwitchPage={() => onSwitchPage('home')} isActive={currentPage === 'home'}>Home</Item>
      <Item onSwitchPage={() => onSwitchPage('about')} isActive={currentPage === 'about'} name="about">About</Item>
      <Item onSwitchPage={() => onSwitchPage('collection')} isActive={currentPage === 'collection'} name="collection">Collection</Item>
      <Item onSwitchPage={() => onSwitchPage('contact')} isActive={currentPage === 'contact'} name="contact">Contact</Item>
    </RightBody>
  </HeaderWrap>
);

Header.propTypes = {
  onSwitchPage: PropTypes.func,
  currentPage: PropTypes.string,
};

export default Header;
