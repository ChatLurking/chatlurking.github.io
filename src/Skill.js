import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #222;
  padding: 20px 0;

  @media(max-width: 480px) {
    flex-direction: column;

  }
`;

const H3 = styled.h3`
  padding: 0;
  margin: 0;
  color: #FFF;
`;

const LanguageWrapper = styled.div`
  color: #FFF;
`;

const UL = styled.ul`
  list-style: none;
  padding: 20px 0px;

  @media(max-width: 480px) {
    text-align: left;
    padding: 0;
  }
`;

const Separator = styled.div`
  margin: 0;
  padding: 0 20px 0;
  width: 30px;
  height: 1px;
  background: #9eb5cd;
`;

const LeftUL = styled(UL)`
`;

const RightUL = styled(UL)`
  text-align: right;
  padding-left: 60px;
`;

const CenterUL = styled(UL)`
  text-align: center
`;

const Skill = (props) => {
  return (
    <Wrapper>
      <LanguageWrapper>
        <H3>Web Development</H3>
        <Separator />
        <LeftUL>
          <li>React</li>
          <li>Redux</li>
          <li>NodeJS</li>
          <li>Javascript</li>
          <li>HTML/CSS</li>
        </LeftUL>
      </LanguageWrapper>
      <LanguageWrapper>
        <H3>Mobile Development</H3>
        <Separator />
        <CenterUL>
          <li>Android</li>
          <li>React-Native</li>
        </CenterUL>
      </LanguageWrapper>
      <LanguageWrapper>
        <H3>Other Languages</H3>
        <Separator />
        <RightUL>
          <li>C#</li>
          <li>Java</li>
          <li>C/C++</li>
          <li>GoLang</li>
          <li>NoSQL/SQL</li>
        </RightUL>
      </LanguageWrapper>
    </Wrapper>
  );
}

export default Skill;
