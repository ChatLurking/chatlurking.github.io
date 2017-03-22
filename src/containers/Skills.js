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
          color='white'
          text='Skills'
          />
        <Separator />
        <TextWrapper>
          <StyledH4
            color='white'
            text='Java'
          />
          <StyledH4
            color='white'
            text='Javascript (Nodejs)'
          />
          <StyledH4
            color='white'
            text='React/Redux'
          />
          <StyledH4
            color='white'
            text='C++'
          />
          <StyledH4
            color='white'
            text='NoSQL/SQL'
          />
          <StyledH4
            color='white'
            text='React-Native'
          />
          <StyledH4
            color='white'
            text='GoLang'
          />
          <StyledH4
            color='white'
            text='HTML'
          />
      </TextWrapper>
      </Wrapper>
    );
  }
}

export default Skills;
