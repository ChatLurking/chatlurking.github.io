import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  color: ${props => props.color};
  font-size: 1.25rem;
`;

const StyledH2 = (props) => {
  return (
    <H2 color={props.color}>{props.text}</H2>
  );
}

export default StyledH2;
