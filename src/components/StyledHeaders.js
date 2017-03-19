import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: 1.5em;
`;

const StyledHeaders = (props) => {
  return (
    <H1 color={props.color}>{props.text}</H1>
  );
}

export default StyledHeaders;
