import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  color: #FFF;
  position: absolute;
  padding: 20px;
`;

const Image = styled.img`
  position: absolute;
  max-width: 33.3%;
  max-height: 33.3%;
  z-index: -1;
`;

const Wrapper = styled.div`
  background: ${(props) => props.background };
  width: 33.3%;
  padding-bottom: 50vh;
  float: left;
  opacity: .8;

  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

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
    <Wrapper background={props.background} image={props.image}>
      <Text>
        {props.name}
      </Text>
    </Wrapper>
  );
}

export default ProjectImage;
