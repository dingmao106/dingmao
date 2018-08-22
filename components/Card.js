import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import delayUpdating from './HOCs/delayUpdating';

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100%;
  height: 100%;
  opacity: 0;

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
    backface-visibility: hidden;
    animation: ${flipIn} 1s cubic-bezier(0.175, 0.885, 0.12, 1.175);
    animation-delay: ${`${props.flipInDelayTime}ms`};
  `}

  ${props => props.flipOut && css`
    animation: ${flipOut} 1s cubic-bezier(0.175, 0.885, 0.12, 1.175);
    animation-delay: ${`${props.flipOutDelayTime}ms`};
  `}

  ${props => (props.isActive ? css`
      opacity: 1;
      transform: rotateY(0deg);
  ` : css `
      transform: rotateY(180deg);
  `)}
`;

const Card = ({
  children,
  img,
  className,
  isFlipIn,
  isFlipOut,
  flipInDelayTime = 0,
  flipOutDelayTime = 0,
  isActive,
}) => (
  <CardWrap
    className={className}
    isActive={isActive}
    img={img}
    flipIn={isFlipIn}
    flipOut={isFlipOut}
    flipInDelayTime={flipInDelayTime}
    flipOutDelayTime={flipOutDelayTime}
  >
    {children}
  </CardWrap>
);

Card.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  isFlipIn: PropTypes.bool,
  isFlipOut: PropTypes.bool,
  flipInDelayTime: PropTypes.number,
  flipOutDelayTime: PropTypes.number,
  isActive: PropTypes.bool,
};

export default delayUpdating(styled(Card)``);
