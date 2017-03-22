import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderPicture from '../components/HeaderPicture';
import StyledHeaders from '../components/StyledHeaders';
import StyledH2 from '../components/StyledH2';

const H4 = styled.h4`
  color: #FFF;
  font-size: 1em;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5692CD;
  height: 100vh;
  width: 100%;
  align-items: flex-end;
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
  height: 100vh;
  width: 100%;
`;

class Header extends Component {
  render() {
    return(
      <MainWrapper>
        <Wrapper>
          <HeaderPicture />
          <TextWrapper>
            <StyledHeaders
              color='white'
              text="Hi! I'm Anne!"
              />
            <StyledH2
              color='white'
              text='I do programming things!'
              />
            <Separator />
            <span>
              <H4>Scroll down to learn about some of</H4>
              <H4>the projects I’ve worked on.</H4>
            </span>
          </TextWrapper>
        </Wrapper>
      </MainWrapper>
    );
  }
}

export default Header;
