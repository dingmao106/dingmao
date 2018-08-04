import styled from 'styled-components';
import Link from 'next/link'

const Item = styled.a`
  color: red;
  margin: 1em;
`;

const Header = () => (
  <div>
      <Link href="/">
        <Item>Home</Item>
      </Link>
      <Link href="/about">
        <Item>About</Item>
      </Link>
      <Link href="/collection">
        <Item>About</Item>
      </Link>
      <Link href="/contact">
        <Item>About</Item>
      </Link>
  </div>
)

export default Header;