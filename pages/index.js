import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Card from '../components/Card';

const Home = () => (
  <Container>
    <Header />
    <Body>
      <Card img="fake_index_main.jpg">
        <div>123</div>
      </Card>
      <Card>
        <Card img="fake_index_main.jpg">
          <div>456</div>
        </Card>
        <Card img="fake_index_main.jpg">
          <div>789</div>
        </Card>
      </Card>
    </Body>
  </Container>
);

export default Home;
