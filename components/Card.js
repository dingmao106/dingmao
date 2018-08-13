import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const CardWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  ${props => (props.img ? css`
    background-image: url(${process.env.BACKEND_URL}/static/${props.img});
  ` : '')}
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  margin-top: 10px;

  &:last-child {
    margin-bottom: 10px;
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 10px;

  ${CardWrap} {
    height: 100%;
    margin: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Card = ({ children, img }) => (
  <CardWrap img={img}>
    {React.Children.map(children, child => (
      <CardContent>
        {child}
      </CardContent>
    ))}
  </CardWrap>
);

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
