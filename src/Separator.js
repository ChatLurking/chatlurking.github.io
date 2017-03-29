import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #DDD;
  height: 50px;
`;

const Line = styled.div`
  height: 1px;
  background: #000;
  margin: 10px 40px;
`;


class Separator extends Component {
  render() {
    return (
      <Wrapper>
        <Line />
        <Line />
      </Wrapper>
    );
  }
}

export default Separator;
