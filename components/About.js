import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import PageWrap from './PageWrap';

const TopCard = styled(Card)`
  margin-top: 10px;
  height: calc(60% - 30px);
`;

const BottomCard = styled(Card)`
  margin-top: 10px;
  height: 40%;
`;

const About = ({ flipIn, flipOut, isActive }) => (
  <PageWrap isActive={isActive}>
    <TopCard img="fake_index_main.jpg" isFlipIn={flipIn} isFlipOut={flipOut}>
      This is About. 1
    </TopCard>
    <BottomCard img="fake_index_main.jpg" isFlipIn={flipIn} isFlipOut={flipOut}>
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