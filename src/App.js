import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './containers/Header';
import Gallery from './containers/Projects';
import About from './containers/About';
import Skills from './containers/Skills';
import Contact from './containers/Contacts';
import { SectionsContainer, Section } from 'react-fullpage';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

class App extends Component {

  render() {
    const options = {
      sectionClassName:     'section',
      anchors:              ['Header', 'Projects', 'About'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      arrowNavigation:      true,
    };
    return (
      <Wrapper>
        <SectionsContainer {...options}>
          <Section><Header /></Section>
          <Section><Gallery /></Section>
          <Section>
            <About />
            <Skills />
            <Contact />
          </Section>
        </SectionsContainer>
      </Wrapper>
    );
  }
}

export default App;
