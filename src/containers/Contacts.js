import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';
import StyledH4 from '../components/StyledH4';

const Wrapper = styled.div`
  background: #CCC;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 0px 20px;
`;

const Contacts = () => {
  return (
    <Wrapper>
      <Link href="https://www.github.com/ChatLurking" target="_blank">
      <FontAwesome
        name='github'
        size='3x'
        />
    </Link>
    <StyledH4
      color='black'
      text='anneglines@gmail.com'
      />
    </Wrapper>
  );
}

export default Contacts;
