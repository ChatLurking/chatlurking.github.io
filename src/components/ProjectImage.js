import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  color: #CCC;
  position: absolute;
  padding: 20px;
`;

const Wrapper = styled.div`
  background: ${(props) => props.background };
  width: 33.1%;
  padding-bottom: 50vh;
  float: left;
  border-color: #EEE;
  border-style: solid;
  border-width: .5px;

  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

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
