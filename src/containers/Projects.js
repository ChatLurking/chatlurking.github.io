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
import Avalonstar from '../assets/Avalonstar.png';
import Geoff from '../assets/Geoff.png';
import Slack from '../assets/Slack.png';
import Website from '../assets/Website.png';
import Code from '../assets/Code.png';

const Wrapper = styled.div`
  background-color: #301436;
  height: 100vh;
`;

const ModalWrapper = styled.div`
  position: absolute;
  margin: 30px;
  background: #FFF;
  width: 75vw;
  border-radius: 4px;
  box-shadow: 5px 5px 5px black;
`;

const ModalInside = styled.div`
  padding: 20px;
`;

const ImageText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  margin-left: -13px;
  margin-top: -15px;
  background-color: transparent;
  border-color: transparent;
  color: #DDD;

  &:hover {
    color: #FF0000;
  }
`;

const defaultProps = [
  {
    id: 0,
    name: 'Avalonstar',
    background: '#000',
    image: Avalonstar,
    desc: "For Christmas Avalonstar left his stream to some trusted community members for 24/7 9 days. Our start up was tasked with finding the best solution for people to stream to Avalonstar's Twitch channel without comprimising his stream key. The final solution was to set up ingest servers for people to stream to. These ingest servers used their twitch name as a stream key, this made it easy for us to switch streamers. From the ingest the feed was streamed to a server that then streamed to Twitch. During a lot of the planning I was busy helping admin a 24/7 10 day charity event (iKasperr's Quest For the Cause) so my main role was researching solutions, testing once the solutions were implemented, and transistioning streamers during the event. This event taught me that staying up for almost 20 days is not the best of ideas.",
  },
  {
    id: 1,
    name: 'Daktronics Scoreboard',
    background: '#000',
    image: Code,
    desc: "I was tasked with making a program that would intercept Daktronic scoreboard packets so that a custom scoreboard could be overlayed onto YouTube streams. The challenging part of this project was little information on how the packets were encrypted and how to tell what information was sent. I did enjoy finding out that my office was still in range of the wireless football scoreboard and being able to scare passing students with the airhorn.",
  },
  {
    id: 2,
    name: 'Geoff',
    background: '#000',
    image: Geoff,
    desc: "My start up was asked to provide a solution that would add bits, subs, resubs, and tips and allocate them to predefined hashtags for voting. This application is limited to only being able to allow 2 or 4 items to be voted on. My role in this project was taking the React/Redux that I learned in the 2 weeks prior and seeing if I could implement it. Though not much of my code made it into the final project, being able to face a real-world problem using my new skills was good experience.",
  },
  {
    id: 3,
    name: 'Mobile Streaming App',
    background: '#000',
    image: Code,
    desc: "After Twitch's announcement of the IRL catagory and seeing not many good mobile streaming options, my start up decided to make our own. In 3 weeks we made an iOS and Android app using react-native. The feature that I worked on the most was chat integration and efficiency. I currently am in charge of developing the Android app and adding new chat features."
  },
  {
    id: 4,
    name: 'Personal Website',
    background: '#000',
    image: Website,
    desc: "This website is made in React using create-react-app. This is design number 37 (or so), and though I'm not completely happy with the design I decided that this was better than nothing. The repo for this will remain private until I'm done removing all the remnants of its predecessors.",
  },
  {
    id: 5,
    name: 'Slackaholicus',
    background: '#000',
    image: Slack,
    desc: "(In progress) Similar to Geoff's in that it is an application for voting. This application adds a moveable Subscriber/Tip box. I used the base of Geoff's system and added the nessasary features.",
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
              id={key}
              name={item.name}
              background={item.background}
              image={item.image}
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
      <Button onClick={back}>
        <FontAwesome
          name='close'
          size='2x'
          />
      </Button>
      <ModalInside>
        <h1>{project.name}</h1>
        <ImageText>
          <img src={project.image} style={{'maxWidth': '300px', 'maxHeight': '400px', 'marginRight': '40px'}}/>
          <div>{project.desc}</div>
        </ImageText>
      </ModalInside>
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
      image={project.image}
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
