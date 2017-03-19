import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 250px;
  width: 200px;
  background: url('https://placekitten.com/200/250');
  margin: 35px;
`;

const HeaderPicture = () => {
  return (
    <Image />
  );
}

export default HeaderPicture;
