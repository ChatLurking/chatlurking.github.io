import React, { Component } from 'react';
import styled from 'styled-components';
import StyledHeaders from '../components/StyledHeaders';
import ProjectImage from '../components/ProjectImage';
import ProjectImageText from '../components/ProjectImageText';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #301436;
  width: 100%;
  height: 100vh;
  flex: flex-grow;
  flex-wrap: wrap;
`;

const defaultProps = {
  1: {
    name: 'Avalonstar',
    background: 'https://placekitten.com/480/361',
    url: 'localhost:3000',
  },
  2: {
    name: 'Daktronics Scoreboard',
    background: 'https://placekitten.com/480/361',
    url: 'localhost:3000',
  },
  3: {
    name: 'Geoff',
    background: 'http://placekitten.com/480/361',
    url: 'localhost:3000',
  },
  4: {
    name: 'Mobile Streaming App',
    background: 'http://placekitten.com/480/361',
    url: 'localhost:3000',
  },
  5: {
    name: 'Personal Website',
    background: 'http://placekitten.com/480/361',
    url: 'localhost:3000',
  },
  6: {
    name: 'Slackaholicus',
    background: 'http://placekitten.com/480/361',
    url: 'localhost:3000',
  },
};

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: null,
    };
  }

  render() {
    return(
      <Wrapper>
        <ProjectImage name={defaultProps[1].name} background={defaultProps[1].background} url={defaultProps[1].url} />
        <ProjectImage name={defaultProps[2].name} background={defaultProps[2].background} url={defaultProps[2].url} />
        <ProjectImage name={defaultProps[3].name} background={defaultProps[3].background} url={defaultProps[3].url} />
        <ProjectImage name={defaultProps[4].name} background={defaultProps[4].background} url={defaultProps[4].url} />
        <ProjectImage name={defaultProps[5].name} background={defaultProps[5].background} url={defaultProps[5].url} />
        <ProjectImage name={defaultProps[6].name} background={defaultProps[6].background} url={defaultProps[6].url} />
      </Wrapper>
    );
  }
}

export default Projects;
