import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './containers/Header';
import Gallery from './containers/Projects';
import About from './containers/About';
import Skills from './containers/Skills';
import Contact from './containers/Contacts';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Gallery />
        <About />
        <Skills />
        <Contact />
      </Wrapper>
    );
  }
}

export default App;
