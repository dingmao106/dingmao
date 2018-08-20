import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const flipOut = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
`;

const flipIn = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  animation-fill-mode: both;
  transform-style: 3d;

  &:last-child {
    margin-right: 0;
  }

  ${props => props.img && css`
    background-image: url(${process.env.BACKEND_URL}/static/${props.img});
  `}

  ${props => props.flipIn && css`
    transform: rotateY(0deg);
    backface-visibility: hidden;
    animation: ${flipIn} 1s cubic-bezier(0.175, 0.885, 0.12, 1.175);
  `}

  ${props => props.flipOut && css`
    transform: rotateY(180deg);
    animation: ${flipOut} 1s cubic-bezier(0.175, 0.885, 0.12, 1.175);
  `}
`;


const Card = ({ children, img, className, isFlipIn, isFlipOut }) => (
  <CardWrap className={className} img={img} flipIn={isFlipIn} flipOut={isFlipOut}>
    {children}
  </CardWrap>
);

Card.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  isFlipIn: PropTypes.bool,
  isFlipOut: PropTypes.bool,
};

export default styled(Card)``;
