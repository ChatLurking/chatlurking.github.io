import React from 'react';
import styled from 'styled-components';

const H4 = styled.h4`
  color: ${props => props.color};
  font-size: 1em;
  margin: 5px;
`;

const StyledH4 = (props) => {
  return (
    <H4 color={props.color}>{props.text}</H4>
  );
}

export default StyledH4;
