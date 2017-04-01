import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Skill from './Skill';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


class App extends Component {

  constructor() {
    super();
    this.state = {
      w: 0,
    };
  }
  componentDidMount() {
    const width = document.getElementById('wrapper').clientWidth;
    this.setState({
      w: width,
    });
  }
  render() {
    return (
      <Wrapper>
        <Header id='wrapper' />
        <Skill />
        <Projects
          mobile={this.state.w}
          />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
