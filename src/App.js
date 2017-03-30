import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Separator from './Separator';
import Cards from './Cards';

import Card from './assets/brand.png';

const Wrapper = styled.div`
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Separator />
        <Cards
          src={Card}
          title='Slackaholicus Overlay'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </Wrapper>
    );
  }
}

export default App;
