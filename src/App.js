import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './containers/Header';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default App;
