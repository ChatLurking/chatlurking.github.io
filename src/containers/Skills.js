import React, { Component } from 'react';
import styled from 'styled-components';
import StyledHeaders from '../components/StyledHeaders';
import StyledH4 from '../components/StyledH4';

const Separator = styled.div`
  height: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background-color: #5692CD;
  justify-content: center;
  align-items: center;
`;

class Skills extends Component {
  render() {
    return (
      <Wrapper>
        <StyledHeaders
          color='black'
          text='Skills'
          />
        <Separator />
        <TextWrapper>
          <StyledH4
            color='black'
            text='Java'
          />
          <StyledH4
            color='black'
            text='Javascript (Nodejs)'
          />
          <StyledH4
            color='black'
            text='React/Redux'
          />
          <StyledH4
            color='black'
            text='C++'
          />
          <StyledH4
            color='black'
            text='NoSQL/SQL'
          />
          <StyledH4
            color='black'
            text='React-Native'
          />
          <StyledH4
            color='black'
            text='GoLang'
          />
          <StyledH4
            color='black'
            text='HTML/CSS'
          />
      </TextWrapper>
      </Wrapper>
    );
  }
}

export default Skills;
