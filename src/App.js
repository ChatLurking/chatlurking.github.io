import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Separator from './Separator';
import Projects from './Projects';


const Wrapper = styled.div`
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Separator />
        <Projects />
      </Wrapper>
    );
  }
}

export default App;
