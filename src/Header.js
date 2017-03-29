import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from './assets/brand.png';
import SVG from './assets/circuit-board.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  height: 250px;
  color: #FFF;
  margin: 0;
  padding: 30px;
  overflow: hidden;
  z-index: -10;

  @media(max-width: 480px) {
    height: 450px;
    flex-direction: column;
  }
`;

const HireMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  padding-right: 40px;
  border-right: thin solid #9eb5cd;

  @media(max-width: 480px) {
    margin: 0px;
    padding: 0px;
    padding-bottom: 30px;
    width: 75%;
    border-right: none;
    border-bottom: thin solid #9eb5cd;
    align-items: center;
  }
`;

const CTAWrapper = styled.div`
  margin-left: 60px;
  text-align: center;

  @media(max-width: 480px) {
    margin: 0px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #FFF;
  width: 100px;
  height: 40px;
  border: solid;
  border-color: #FFF;
  border-radius: 15px;
  margin-right: 30px;
  text-align:center;

  cursor: pointer;

  @media(max-width: 650px) {
    margin: 0;
    margin-bottom: 30px;
  }
`;

const ButtomLM = styled(Button)`
  &:after {
    opacity: 1;
  }

  &:before {
    content: '↓';
    position:absolute;
    opacity: 0;
  }

  &:hover&:before {
    opacity: 1;
    width: 130px;
  }

  &:hover {
    background: #FFF;
    color: #000;
  }
`;

const ButtonHire = styled(Button)`
&:after {
  opacity: 1;
}

&:before {
  position:absolute;
  opacity: 0;
}

&:hover&:before {
  opacity: 1;
  width: 130px;
}

&:hover {
  background: #FFF;
  color: #000;
}
`;

const SVGImage = styled.img`
  position: absolute;
  opacity: .35;
  right: 0px;
  width: 600px;
  z-index: 0;
  pointer-events: none;
  user-select: none;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <HireMeDiv>
          <img src={Brand} alt='' style={{width: '180px', height: '180px', pointerEvents: 'none', userSelect: 'none'}} />
          <h2 style={{margin: '0'}}>PROGRAMMER</h2>
        </HireMeDiv>
        <CTAWrapper>
          <h3>I make things and stuff.</h3>
          <ButtonHire>Hire me</ButtonHire>
          <ButtomLM>Learn More</ButtomLM>
        </CTAWrapper>
        <SVGImage src={SVG} alt='' />
      </Wrapper>
    );
  }
}

export default Header;
