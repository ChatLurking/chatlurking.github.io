import React from 'react';
import styled from 'styled-components';
import SVG from './assets/circuit-board.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #DDD;

  @media(max-width: 720px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  user-select: none;
  pointer-events: none;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 250px;
  background-image: url(${SVG});
  background-color: #222;
  word-break: normal;

  @media(max-width: 720px) {
    width: 250px;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  margin-left: 10px;
  height: 400px;
  padding: 0 10px 0px;
`;

const Title = styled.h3`
  line-height: 1;
  margin: 0;
  font-size: 133%;
  padding: 20px 0px 0;
  font-weight: bold;
  text-transform: uppercase;
  display: table;
`;

const Text = styled.p`
  padding: 20px 5px 15px 0px;
  line-height: 1.25;
`;

const Separator = styled.div`
  margin: 0;
  padding: 0 20px 0;
  width: 100px;
  height: 1px;
  background: #9eb5cd;
`;

const Cards = (props) => {
  return (
    <Wrapper>
      <Image src={props.src} alt='' />
      <TextDiv>
        <TextWrapper>
          <Title>{props.title}</Title>
          <Separator />
          <Text>{props.text}</Text>
        </TextWrapper>
      </TextDiv>
    </Wrapper>
  );
}

export default Cards;
