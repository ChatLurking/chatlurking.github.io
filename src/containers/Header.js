import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderPicture from '../components/HeaderPicture';
import StyledHeaders from '../components/StyledHeaders';
import StyledH2 from '../components/StyledH2';
import 'font-awesome/css/font-awesome.min.css';
import Scroll from 'react-scroll';

// const Button = styled.button`
//   background: transparent;
//   border-color: transparent;
//   cursor: pointer;
// `;

const H4 = styled.h4`
  color: #FFF;
  font-size: 1.2rem;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5692CD;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

const Separator = styled.div`
  height: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 481px) {
    flex-direction: column;
  }
`;
const scroll = Scroll.animateScroll;
class Header extends Component {

  constructor() {
    super();
    this.state = {
      h: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('wheel', this.handleScroll);
    const height = document.getElementById('container').clientHeight;
    this.setState({
      h: height
    });
  }

  handleScroll() {
    document.removeEventListener('wheel', this.handleScroll);
    scroll.scrollTo(this.state.h, {
      duration: 500,
      smooth: true,
    });
  }

  render() {
    return(
      <MainWrapper id="container">
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
