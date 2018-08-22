import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import styled from 'styled-components';

const MiddleBarWrap = styled.div`
  display: block;
  width: 100%;
  padding: 20px 25px;
  background: rgba(255, 255, 255, 0.5);
  font: bold 1.0769230769em/1 Poppins, sans-serif;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: inherit;
  -webkit-transition: 0.3s;
  transition: 0.3s;
`;

const MiddleBar = ({ text, router, page }) => (
  <MiddleBarWrap onClick={() => router.replace(`${process.env.BACKEND_URL}/${page}`)}>
    {text}
  </MiddleBarWrap>
);

MiddleBar.propTypes = {
  text: PropTypes.string,
  page: PropTypes.string,
  router: PropTypes.shape({}),
};

export default withRouter(MiddleBar);
