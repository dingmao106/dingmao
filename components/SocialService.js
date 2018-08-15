import React from 'react';
import styled, { css } from 'styled-components';
import RawIcon from './Icon';

const SocialServiceWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 8px;
  color: #000;
  background-color: #fff;
  border-radius: 50%;
`;

const Icon = styled(RawIcon)`
  display: inline-block;
  width: 11px;

  ${props => props.w && css`
    width: ${p => p.w};
  `}
`;

const Link = styled.a`
  color: black;
`;

const socialServiceLinkMap = {
  Facebook: 'https://www.facebook.com/hogasaga',
  Flickr: 'https://www.facebook.com/hogasaga',
  Instagram: 'https://www.facebook.com/hogasaga',
};

const SocialService = () => (
  <SocialServiceWrap>
    <Link href={socialServiceLinkMap.Facebook}>
      <IconWrap>
        <Icon name="Facebook" w="7px" />
      </IconWrap>
    </Link>
    <Link href={socialServiceLinkMap.Flickr}>
      <IconWrap>
        <Icon name="Flickr" />
      </IconWrap>
    </Link>
    <Link href={socialServiceLinkMap.Instagram}>
      <IconWrap>
        <Icon name="Instagram" />
      </IconWrap>
    </Link>
  </SocialServiceWrap>
);

export default SocialService;
