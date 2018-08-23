import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import PageWrap from './PageWrap';
import AboutTopContent from './AboutTopContent';

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
      flipInDelayTime={0}
      flipOutDelayTime={0}
    >
      <AboutTopContent />
    </TopCard>
    <BottomCard
      img="fake_index_main.jpg"
      isActive={isActive}
      isFlipIn={flipIn}
      isFlipOut={flipOut}
      flipInDelayTime={200}
      flipOutDelayTime={150}
    >
      This is About. 2
    </BottomCard>
  </PageWrap>
);

About.propTypes = {
  flipIn: PropTypes.bool,
  flipOut: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default About;
