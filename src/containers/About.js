import React, { Component } from 'react';
import styled from 'styled-components';
import StyledHeaders from '../components/StyledHeaders';
import StyledH4 from '../components/StyledH4';

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const P = styled.p`
  color: #FFF;
`;

const Separator = styled.div`
  height: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5692CD;
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: center;
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <StyledHeaders
          color='white'
          text='About Me'
          />
        <StyledH4
          color='white'
          text='Software Engineer'
          />
        <AboutWrapper>
          <TextWrapper>
            <P>In college I spent just as much time in the</P>
            <P>computer lab as I did with the Music and</P>
            <P>Theatre departments (didn't get much sleep, </P>
            <P>but totally worth it).</P>
            <Separator />
            <P>If I’m not coding I’m transposing music</P>
            <P>or writing riffs for the next time I pick up one</P>
            <P>of my saxophones.</P>
          </TextWrapper>
          <TextWrapper>
            <P>Some of my work can be seen being used on</P>
            <P>Twitch broadcasts such as Geoff and Slackaholicus. </P>
            <Separator />
            <P>I love learning new programming languages </P>
            <P>and making irc bots with the languages I learn.</P>
          </TextWrapper>
        </AboutWrapper>
      </Wrapper>
    );
  }
}

export default About;
