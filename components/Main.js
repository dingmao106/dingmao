import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Header from '../components/Header';
import Container from '../components/Container';

class Main extends React.Component {
  getIsActive = (path = '') => {
    const { router } = this.props;
    return `/${path}` === router.pathname;
  }

  handleSwitchPage = (to) => {
    const { router } = this.props;
    router.replace(`${process.env.BACKEND_URL}/${to}`);
  }

  render() {
    return (
      <Container>
        <Header getIsActive={this.getIsActive} onSwitchPage={this.handleSwitchPage} />
        {this.props.children}
      </Container>
    );
  }
}

Main.propTypes = {
  router: PropTypes.shape({}),
};


export default withRouter(Main);
