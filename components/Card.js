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

const Header = delayUpdating(styled.h2`
  position: absolute;
  padding: 15px 0 0;
  top: 70px;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-100%);
  z-index: 10;
  transition-delay: 0.6s;
  transition: 0.3s;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 10px solid;
  }

  ${props => (props.isActive ? css`
      left: 0;
  ` : css `
      left: -40px;
  `)}
`);

const CardWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;

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
    animation-delay: ${`${props.inDelayTime}ms`};
  `}

  ${props => props.flipOut && css`
    animation: ${flipOut} 1s cubic-bezier(0.175, 0.885, 0.12, 1.175);
    animation-delay: ${`${props.outDelayTime}ms`};
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
  title,
  className,
  isFlipIn,
  isFlipOut,
  inDelayTime = 0,
  outDelayTime = 0,
  titleInDelayTime = 0,
  isActive,
}) => (
  <CardWrap
    className={className}
    isActive={isActive}
    img={img}
    flipIn={isFlipIn}
    flipOut={isFlipOut}
    inDelayTime={inDelayTime}
    outDelayTime={outDelayTime}
  >
    <Header isActive={isActive} inDelayTime={titleInDelayTime}>
      {title}
    </Header>
    {children}
  </CardWrap>
);

Card.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  isFlipIn: PropTypes.bool,
  isFlipOut: PropTypes.bool,
  inDelayTime: PropTypes.number,
  outDelayTime: PropTypes.number,
  titleInDelayTime: PropTypes.number,
  isActive: PropTypes.bool,
};

export default delayUpdating(styled(Card)``);
