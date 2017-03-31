import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from './assets/brand.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  height: 450px;
  color: #FFF;
  margin: 0;
  padding: 30px;
  overflow: hidden;

  @media(min-width: 720px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;


const HireMeDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 480px) {
    margin: 0px;
    padding: 0px;
    padding-bottom: 40px;
    width: 75%;
    border-right: none;
    border-bottom: thin solid #9eb5cd;
    align-items: center;
  }

  @media(max-width: 600px) {
    margin: 0px;
    padding: 0px;
    padding-bottom: 40px;
    width: 75%;
    border-right: none;
    border-bottom: thin solid #9eb5cd;
    align-items: center;
  }

  @media(min-width: 720px) {
    padding-left: 150px;
    border-left: thin solid #9eb5cd;
  }
`;

const CTAWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(min-width: 720px) {

  }


`;

const H1 = styled.h1`
  font-size: 3rem;
  margin: 10px 0;

  @media(max-width: 720px) {
    text-align: left;
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
  text-align: center;
  vertical-align: middle;
  margin-bottom: 15px;
  cursor: pointer;
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
    width: 230px;
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
          <img src={Brand} alt='' style={{width: '180px', height: '180px', pointerEvents: 'none', userSelect: 'none'}} />
          <h2 style={{margin: '0'}}>PROGRAMMER</h2>
        </HireMeDiv>
        <CTAWrapper>
          <H1>ANNE GLINES</H1>
          <ButtonHire>Hire me</ButtonHire>
          <ButtomLM>Learn More</ButtomLM>
        </CTAWrapper>
      </Wrapper>
    );
  }
}

export default Header;
