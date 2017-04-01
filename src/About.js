import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 770px;
  background: #222;
  padding: 20px 15px;
  box-shadow: 5px 5px 2px #444;
  margin-bottom: 50px;

  @media(max-width: 720px) {
    flex-direction: column;
    width: 300px;
  }
`;

const H3 = styled.h3`
  padding: 0;
  margin: 0;
  color: #FFF;
`;
const Separator = styled.div`
  margin: 0;
  margin: 0 0 20px;
  width: 50px;
  height: 1px;
  background: #9eb5cd;
`;

const P = styled.p`
  margin: 0 0 10px;
  line-height: 1;
`;

const About = () => {
  return (
    <Wrapper>
      <H3>Hi! I'm Anne!</H3>
      <Separator />
      <P>
        I've been developing solutions (mostly Java based) for about 3 years. Currently I develop solutions using React/Redux and React-Native combined with Android. In college I spent a lot of time studying UX and computer networking. I love learning and working with new languages!
      </P>
      <P>
        In my free time I enjoy writing and transposing music and doing chord analisys as I do it. I also enjoy dabbling in Android apps and mobile UX design.
      </P>
    </Wrapper>
  );
}

export default About;
