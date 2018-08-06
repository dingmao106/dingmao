import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #fff;
  height: 4.5em;
`;

const Item = styled.a`
  position: relative;
  display: inline-block;
  line-height: 4.5em;
  padding: 0 1em;
  margin: 0 1em;
  color: black;
  cursor: pointer;
  z-index: 2;

  &:hover {
      background-color: black;
      color: white;
  }
`;

const Logo = styled.h1`
  font-family: 'Permanent Marker', cursive;
  margin-left: 1em;
`;

const LeftBody = styled.div`
`;
const RightBody = styled.div`
`;

const Header = () => (
  <HeaderWrap>
    <LeftBody>
      <Logo>DING MAO</Logo>
    </LeftBody>
    <RightBody>
      <Link href="/">
        <Item>Home</Item>
      </Link>
      <Link href="/about">
        <Item>About</Item>
      </Link>
      <Link href="/collection">
        <Item>Collection</Item>
      </Link>
      <Link href="/contact">
        <Item>Contact</Item>
      </Link>
    </RightBody>
  </HeaderWrap>
);

export default Header;
