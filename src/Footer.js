import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #222;
  width: 100%;
  padding: 20px 0;
`;

const Button = styled.a`
  background: transparent;
  border: none;
  color: #FFF;
  cursor: pointer;
`;

const ButtonHM = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  width: 300px;
  height: 34px;
  border: solid;
  border-radius: 20px;
  cursor: pointer;
  background: #D9AA63;
  border-color: #D9AA63;
  color: #000;

  @media(max-width: 480px) {
    width: 250px;
  }
`;

const Footer = () => {
  return (
      <Wrapper>
        <Button href="https://github.com/chatlurking">
          <FontAwesome
            name='github'
            size='3x'
            />
        </Button>
        <ButtonHM href="mailto:anneglines@gmail.com?subject=Let's work together"><span>Hire me</span></ButtonHM>
      </Wrapper>
  );
}

export default Footer;
