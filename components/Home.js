import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import MainDescription from './MainDescription';
import PageWrap from './PageWrap';

const TopCard = styled(Card)`
  margin-top: 10px;
  height: calc(61% - 30px);
`;

const LeftBottomCard = styled(Card)`
  margin-top: 10px;
  height: 39%;
`;

const RightBottomCard = styled(Card)`
  margin-top: 10px;
  height: 39%;
`;

const CardsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Home = ({ flipIn, flipOut, isActive }) => (
  <PageWrap isActive={isActive}>
    <TopCard
      img="fake_index_main.jpg"
      isActive={isActive}
      isFlipIn={flipIn}
      isFlipOut={flipOut}
      flipInDelayTime={0}
      flipOutDelayTime={0}
    >
      <MainDescription />
    </TopCard>
    <CardsWrap>
      <LeftBottomCard
        img="fake_index_main.jpg"
        isActive={isActive}
        isFlipIn={flipIn}
        isFlipOut={flipOut}
        flipInDelayTime={0}
        flipOutDelayTime={150}
      >
        <div>456</div>
      </LeftBottomCard>
      <RightBottomCard
        img="fake_index_main.jpg"
        isActive={isActive}
        isFlipIn={flipIn}
        isFlipOut={flipOut}
        flipInDelayTime={150}
        flipOutDelayTime={200}
      >
        <div>789</div>
      </RightBottomCard>
    </CardsWrap>
  </PageWrap>
);

Home.propTypes = {
  flipIn: PropTypes.bool,
  flipOut: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default Home;
