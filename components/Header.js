import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #fff;
  height: 80px;
`;

const Item = styled.a`
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

const Header = ({ router }) => (
  <HeaderWrap>
    <LeftBody>
      <Logo>DING MAO</Logo>
    </LeftBody>
    <RightBody>
      <Link href="/">
        <Item isActive={router.pathname === '/'}>Home</Item>
      </Link>
      <Link href="/about">
        <Item isActive={router.pathname === '/about'}>About</Item>
      </Link>
      <Link href="/collection">
        <Item isActive={router.pathname === '/collection'}>Collection</Item>
      </Link>
      <Link href="/contact">
        <Item isActive={router.pathname === '/contact'}>Contact</Item>
      </Link>
    </RightBody>
  </HeaderWrap>
);

export default withRouter(Header);
