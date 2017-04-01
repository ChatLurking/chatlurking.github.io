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
  width: 100%;
  overflow: hidden;
  margin-bottom: 300px;

  @media(min-width: 720px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;


const HireMeDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 480px) {
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

  @media(max-width: 720px) {
    margin-bottom: 30px;
  }


`;

const H1 = styled.h1`
  font-size: 3rem;
  margin: 10px 0;

  @media(max-width: 720px) {
    text-align: left;
  }
`;

const ButtonHire = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  width: 300px;
  height: 34px;
  border: solid;
  border-radius: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  background: #D9AA63;
  border-color: #D9AA63;
  color: #000;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  pointerEvents: none;
  userSelect: none;

  @media(max-width: 720px) {
    margin-top: 30px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper id="container">
        <HireMeDiv>
          <Image src={Brand} alt='' />
          <h2 style={{margin: '0'}}>PROGRAMMER</h2>
        </HireMeDiv>
        <CTAWrapper>
          <H1>ANNE GLINES</H1>
          <ButtonHire href="mailto:anneglines@gmail.com?subject=Let's work together"><span>Hire me</span></ButtonHire>
        </CTAWrapper>
      </Wrapper>
    );
  }
}

export default Header;
