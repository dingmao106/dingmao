import React from 'react';
import Body from './Body';
import Card from './Card';
import MainDescription from './MainDescription';

const Home = () => (
  <Body>
    <Card img="fake_index_main.jpg">
      <MainDescription />
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
);

export default Home;
