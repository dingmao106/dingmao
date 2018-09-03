import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dragger = styled.div`
  position: absolute;
  width: 100%;
  min-height: 30px;
  display: block;
  height: 232px;
  max-height: 283px;
  top: 0px;
  background-color: rgba(44, 82, 159, 0.75);
`;

const ScrollbarWrap = styled.div`
  position: absolute;
  width: 8px;
  height: auto;
  left: auto;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: .75;
  transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
`;

const Scrollbar = ({ className }) => (
  <ScrollbarWrap>
    <Dragger className={className} />
  </ScrollbarWrap>
);

Scrollbar.propTypes = {
  className: PropTypes.string,
};

export default Scrollbar;
