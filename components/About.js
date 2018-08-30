import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Card from './Card';
import PageWrap from './PageWrap';
import AboutTopContent from './AboutTopContent';
import SlideShow from './Slideshow';
import RawIcon from './Icon';

const Icon = styled(RawIcon)`
  display: inline-block;
  width: 11px;
  margin: 0 0 15px;
  color: #3767C7;

  ${props => props.w && css`
    width: ${p => p.w};
  `}
`;

const SlideShowWrap = styled.div`
  margin: 10px 0;
  padding: 70px 70px 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
`;

const items = [{
  img: <Icon name="Camera" w="30px" />,
  title: 'AAA',
  desc: 'AAA',
}, {
  img: <Icon name="Camera" w="30px" />,
  title: 'BBB',
  desc: 'BBB',
}, {
  img: <Icon name="Camera" w="30px" />,
  title: 'CCC',
  desc: 'CCC',
}];

const TopCard = styled(Card)`
  margin-top: 10px;
  height: calc(61% - 30px);
`;

const BottomCard = styled(Card)`
  margin-top: 10px;
  height: 39%;
`;

const About = ({ flipIn, flipOut, isActive }) => (
  <PageWrap isActive={isActive}>
    <TopCard
      title="About Ding Mao"
      titleInDelayTime={500}
      isActive={isActive}
      isFlipIn={flipIn}
      isFlipOut={flipOut}
      inDelayTime={0}
      outDelayTime={0}
    >
      <AboutTopContent />
    </TopCard>
    <BottomCard
      title="Service"
      isActive={isActive}
      isFlipIn={flipIn}
      isFlipOut={flipOut}
      inDelayTime={200}
      outDelayTime={150}
    >
      <SlideShowWrap>
        <SlideShow items={items} />
      </SlideShowWrap>
    </BottomCard>
  </PageWrap>
);

About.propTypes = {
  flipIn: PropTypes.bool,
  flipOut: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default About;
