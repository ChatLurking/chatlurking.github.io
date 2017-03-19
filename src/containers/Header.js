import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderPicture from '../components/HeaderPicture';
import StyledHeaders from '../components/StyledHeaders';
import StyledH2 from '../components/StyledH2';
import Projects from './Projects';

const H4 = styled.h4`
  color: #000;
  font-size: 1em;
`;

const NavBar = styled.div`
  display: flex;
  position: absolute;
`;

const Separator = styled.div`
  height: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #5692CD;
`;

class Header extends Component {
  render() {
    return(
      <div>
        <Wrapper>
          <HeaderPicture />
          <TextWrapper>
            <StyledHeaders
              color='black'
              text="Hi! I'm Anne!"
              />
            <StyledH2
              color='black'
              text='I do programming things!'
              />
            <Separator />
            <span>
              <H4>Check out my resume or scroll down to</H4>
              <H4>learn about the projects I’ve worked on.</H4>
            </span>
          </TextWrapper>
        </Wrapper>
        <Projects />
      </div>
    );
  }
}

export default Header;
