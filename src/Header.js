import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from './assets/brand.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  height: 450px;
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
  padding-right: 60px;
  border-right: thin solid #9eb5cd;

  @media(max-width: 480px) {
    margin: 0px;
    padding: 0px;
    padding-bottom: 40px;
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
  font-size: 1.25rem;
  width: 300px;
  height: 40px;
  border: solid;
  border-color: #FFF;
  border-radius: 20px;
  margin-right: 50px;
  text-align: center;
  vertical-align: middle;

  cursor: pointer;

  @media(max-width: 480) {
    margin: 0;
    margin-bottom: 30px;
    width: 200px;
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
    width: 220px;
  }

  &:hover {
    background: #FFF;
    color: #000;
  }
`;

const ButtonHire = styled(Button)`
background: #D9AA63;
border-color: #D9AA63;
color: #000;
`;


class Header extends Component {
  render() {
    return (
      <Wrapper>
        <HireMeDiv>
          <img src={Brand} alt='' style={{marginTop: '20px', width: '180px', height: '180px', pointerEvents: 'none', userSelect: 'none'}} />
          <h2 style={{margin: '0'}}>PROGRAMMER</h2>
        </HireMeDiv>
        <CTAWrapper>
          <h1 style={{fontSize: '3rem', margin: '10px 0', textAlign: 'left'}}>ANNE GLINES</h1>
          <ButtonHire>Hire me</ButtonHire>
          <ButtomLM>Learn More</ButtomLM>
        </CTAWrapper>
      </Wrapper>
    );
  }
}

export default Header;
