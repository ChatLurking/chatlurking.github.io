import React from 'react';
import styled from 'styled-components';
import SVG from './assets/circuit-board.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #DDD;
  margin: 10px;

  @media(max-width: 720px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  user-select: none;
  pointer-events: none;
  box-shadow: 5px 5px 2px #444;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  max-height: 275px;
  background-image: url(${SVG});
  background-color: #222;
  word-break: normal;
  box-shadow: 5px 5px 2px #444;

  @media(max-width: 720px) {
    width: 275px;
    max-height: 500px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 10px;
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
  if (props.side === 'right' || props.mobile < 720){
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
  } else {
    return (
      <Wrapper>
        <TextDiv>
          <TextWrapper>
            <Title>{props.title}</Title>
            <Separator />
            <Text>{props.text}</Text>
          </TextWrapper>
        </TextDiv>
        <Image src={props.src} alt='' />
      </Wrapper>
    );
  }
}

export default Cards;
