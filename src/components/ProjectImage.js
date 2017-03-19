import React from 'react';
import styled from 'styled-components';

// ${props => props.background}
const Image = styled.a`
  background: ${(props) => `url(${props.background})` };
  min-width: 360px;
  min-height: 50vh;
`;

const ProjectImage = (props) => {
  return (
    <Image background={props.background} href={props.url} >{props.name}</Image>
  );
}

export default ProjectImage;
