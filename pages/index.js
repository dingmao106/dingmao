import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Main from '../components/Main';
import Home from '../components/Home';
import Body from '../components/Body';
import About from '../components/About';
import Collection from '../components/Collection';
import Contact from '../components/Contact';

class Index extends React.Component {
  constructor(props) {
    super();
    const { router } = props;
    const { query: { page = 'home' } } = router;
    this.state = {
      currentPage: page,
      from: '',
      to: '',
    };
  }

  getHandleProps = (name) => {
    const { currentPage, from, to } = this.state;
    return ({
      isActive: currentPage === name,
      flipIn: to === name,
      flipOut: from === name,
    });
  }

  handleSwitchPage = (to) => {
    const { currentPage } = this.state;
    if (currentPage === to) return;
    this.setState(() => ({
      from: currentPage,
      to,
    }));

    setTimeout(() => {
      this.setState(lastState => ({
        currentPage: lastState.to,
      }));
      window.history.pushState(null, null, `${process.env.BACKEND_URL}/${to}`);
    }, 100);
  }

  render() {
    const { currentPage } = this.state;
    return (
      <Main handleSwitchPage={this.handleSwitchPage} currentPage={currentPage} >
        <Body>
          <Home {...this.getHandleProps('home')} />
          <About {...this.getHandleProps('about')} />
          <Collection {...this.getHandleProps('collection')} />
          <Contact {...this.getHandleProps('contact')} />
        </Body>
      </Main>
    );
  }
}

Index.propTypes = {
  router: PropTypes.shape({}),
};


export default withRouter(Index);
