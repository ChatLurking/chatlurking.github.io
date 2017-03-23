import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectImage from '../components/ProjectImage';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #301436;
  height: 100vh;
`;

const ModalWrapper = styled.div`
  position: absolute;
  margin: 20px;
  background: #EEE;
  width: 50vw;
  padding: 30px;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  background-color: transparent;
  border-color: #000;
`;

const defaultProps = [
  {
    id: 0,
    name: 'Avalonstar',
    background: '#123456',
    desc: "For Christmas Avalonstar left his stream to some trusted community members for 9 days. Our start up was tasked with finding the best solution for people to stream to Avalonstar's Twitch channel without comprimising his stream key. The final solution was to set up ingest servers for people to stream to. These ingest servers used their twitch name as a stream key, this made it easy for us to switch streamers. From the ingest the feed was streamed to a server that then streamed to Twitch. During a lot of the planning I was busy helping admin a 24/7 10 day charity event (iKasperr's Quest For the Cause) my main role was research solutions, testing once the solutions were implemented, and transistioning streamers.",
  },
  {
    id: 1,
    name: 'Daktronics Scoreboard',
    background: 'rgb(0, 90, 45)',
    desc: "I was tasked with making a program that would intercept Daktronic scoreboard packets so that a custom scoreboard could be overlayed onto YouTube streams. The challenging part of this project was little information on how the packets were encrypted and how to tell what information was sent. I did enjoy finding out that my office was still in range of the wireless football scoreboard and being able to scare passing students with the airhorn.",
  },
  {
    id: 2,
    name: 'Geoff',
    background: '#CCCCCC',
    desc: "My start up was asked to provide a solution that would add bits, subs, resubs, and tips and allocate them to predefined hashtags for voting. This application is limited to only being able to allow 2 or 4 items to be voted on. My role in this project was taking the React/Redux that I learned in the 2 weeks prior and seeing if I could implement it. Though not much of my code made it into the final project, being able to face a real-world problem was good experience.",
  },
  {
    id: 3,
    name: 'Mobile Streaming App',
    background: 'blue',
    desc: "After Twitch's announcement of the IRL catagory and seeing not many good mobile streaming options, my start up decided to make our own. The app is iOS and Android. The feature that I worked on was chat integration and efficiency. I currently am in charge of developing the Android part of the app."
  },
  {
    id: 4,
    name: 'Personal Website',
    background: '#6666FF',
    desc: "This website is made in React. This is design number 37 (or so), and though I'm not completely happy with the design I decided simple was the better option than trying to design something complex that I liked.",
  },
  {
    id: 5,
    name: 'Slackaholicus',
    background: 'grey',
    desc: "(In progress) Similar to Geoff's in that it is an application for voting. This application adds a moveable Subscriber/Tip box. I used the base of Geoff's system but added the nessasary features. I redesigned it so that 2-4 items can be voted on at a time.",
  },
];

const ProjectList = () => {
    return(
    <div>
      {defaultProps.map((item, key) => {
          return (<Link
            key={key}
            to={{
              pathname: `/project/${item.id}`,
              state: { modal: true }
            }}
            >
            <ProjectImage
              key={key}
              name={item.name}
              background={item.background}
            />
        </Link>
      )
    })}
    </div>
  );
}

const Modal = ({ match, history }) => {
  const project = defaultProps[parseInt(match.params.id, 10)];
  if (!project) {
    return null;
  }
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  }
  return (
    <ModalWrapper onClick={back}>
  <div className='modal'>
    <h1>{project.name}</h1>
    <div color={project.background} />
    <div>{project.desc}</div>
  </div>
  <Button onClick={back}>
    <FontAwesome
      name='close'
      size='3x'
    />
  </Button>
</ModalWrapper>

  );
}

const ProjectMatch = ({match}) => {
  const project = defaultProps[parseInt(match.params.id, 10)];

  if (!project) {
    return <div>Project not found</div>
  }
  return (
    <ProjectImage
      background={project.background}
      name={project.name}
      key={project.id}
      />
  );
}

class Projects extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
     location.state &&
     location.state.modal &&
     this.previousLocation !== location // not initial render
   );

    return (
      <Wrapper>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path='/' component={ProjectList} />
          <Route path='/project/:id' component={ProjectMatch}/>
        </Switch>
        {isModal ? <Route path='/project/:id' component={Modal} /> : null}
      </Wrapper>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Projects} />
      </BrowserRouter>
    );
  }
}

export default Gallery;
