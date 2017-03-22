import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  color: #FFF;
  width: 100%;
  position: absolute;
  padding: 20px;
`;

const Wrapper = styled.div`
  background: ${(props) => props.background };
  width: 33.3%;
  padding-bottom: 50vh;
  float: left;
  opacity: .8;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 650px) {
    width: 50%;
    padding-bottom: 50vh;
  }

  @media (max-width: 420px) {
    width: 100%;
    padding-bottom: 100%;
  }
`;

const ProjectImage = (props) => {
  return (
    <Wrapper background={props.background}>
      <Text>
        {props.name}
      </Text>
    </Wrapper>
  );
}

export default ProjectImage;
