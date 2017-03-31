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
`;

const Button = styled.a`
  background: transparent;
  border: none;
  color: #FFF;
  padding: 20px 0;
  cursor: pointer;
`;

const ButtonHM = styled.button`
  font-size: 1.25rem;
  width: 250px;
  height: 40px;
  border: solid;
  border-radius: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  background: #D9AA63;
  border-color: #D9AA63;
  color: #000;
`;

const Footer = () => {
  return (
      <Wrapper>
        <Button href="https://github.com/chatlurking">
          <FontAwesome
            name='github'
            size='4x'
            />
        </Button>
        <ButtonHM onClick={() => location.href='mailto:anneglines@gmail.com'}>Hire Me</ButtonHM>
      </Wrapper>
  );
}

export default Footer;
