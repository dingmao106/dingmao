import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Container from '../components/Container';

const Main = ({ handleSwitchPage, children, currentPage }) => (
  <Container>
    <Header onSwitchPage={handleSwitchPage} currentPage={currentPage} />
    {children}
  </Container>
);

Main.propTypes = {
  handleSwitchPage: PropTypes.func,
  currentPage: PropTypes.string,
};


export default Main;
