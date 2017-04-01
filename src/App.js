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
    this.updateWidth = this.updateWidth.bind(this);

    this.state = {
      w: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
    const width = window.innerWidth;
    this.setState({
      w: width,
    });
  }

  componentWillUnmoutn() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    this.setState({
      w: window.innerWidth,
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
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
