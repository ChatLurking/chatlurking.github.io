import React from 'react';
import styled from 'styled-components';
import Brand from '../assets/Brand.png';

const Image = styled.img`
  height: 250px;
  width: 250px;
  margin: 35px;
`;

const HeaderPicture = () => {
  return (
    <Image src={Brand} />
  );
}

export default HeaderPicture;
