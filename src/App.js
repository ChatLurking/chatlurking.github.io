import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Skill from './Skill';

const Wrapper = styled.div`
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Skill />
        <Projects />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
