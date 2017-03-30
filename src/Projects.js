import React from 'react';
import styled from 'styled-components';

import Cards from './Cards';
import Avalonstar from './assets/Avalonstar.png';
import Dak from './assets/dak.png';
import Geoff from './assets/Geoff.png';
import Impromptu from './assets/impromptu.png'
import Slack from './assets/slack.png';
import Website from './assets/website.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const project = [
  {
    id: 0,
    name: 'Crusader Christmas',
    // background: '#000',
    image: Avalonstar,
    desc: "Our start up was tasked with finding the best solution for people to stream to Avalonstar's Twitch channel without comprimising his stream key. The final solution was to set up ingest servers for people to stream to. These ingest servers used their twitch name as a stream key. From the ingest the feed was streamed to a server that then streamed to Twitch. During a lot of the planning I was busy helping admin a 24/7 10 day charity event (iKasperr's Quest For the Cause) so my main role was researching solutions, testing once the solutions were implemented, and transistioning streamers during the event. This event taught me that staying up for almost 20 days is not the best of ideas.",
  },
  {
    id: 1,
    name: 'Daktronics Scoreboard',
    // background: '#000',
    image: Dak,
    desc: "I was tasked with making a program that would intercept Daktronic scoreboard packets so that a custom scoreboard could be overlayed onto YouTube streams. The challenging part of this project was little information on how the packets were encrypted and how to tell what information was sent. I did enjoy finding out that my office was still in range of the wireless football scoreboard and being able to scare passing students with the airhorn.",
  },
  {
    id: 2,
    name: 'Geoff Overlay',
    // background: '#000',
    image: Geoff,
    desc: "My start up was asked to provide a solution that would add bits, subs, resubs, and tips and allocate them to predefined hashtags for voting. This application is limited to only being able to allow 2 or 4 items to be voted on. My role in this project was taking the React/Redux that I learned in the 2 weeks prior and seeing if I could implement it. Though not much of my code made it into the final project, being able to face a real-world problem using my new skills was good experience.",
  },
  {
    id: 3,
    name: 'Mobile Streaming Application',
    // background: '#000',
    image: Impromptu,
    desc: "After Twitch's announcement of the IRL catagory and seeing not many good mobile streaming options, my start up decided to make our own. In 3 weeks we made an iOS and Android app using react-native. The feature that I worked on the most was chat integration and efficiency. I currently am in charge of developing the Android app and adding new chat features."
  },
  {
    id: 4,
    name: 'Personal Website',
    // background: '#000',
    image: Website,
    desc: "This website is made in React using create-react-app. This is design number 37 (or so), and though I'm not completely happy with the design I decided that this was better than nothing.",
  },
  {
    id: 5,
    name: 'Slackaholicus Overlay',
    // background: '#000',
    image: Slack,
    desc: "(In progress) Similar to Geoff's in that it is an application for voting. This application adds a moveable Subscriber/Tip box. I used the base of Geoff's system and added the nessasary features.",
  },
];

const Projects = () => {
  let ProjectList = project.map((item) => {
    if(item.id % 2 === 0){
      return (
        <Cards
          id={item.id}
          side='left'
          src={item.image}
          title={item.name}
          text={item.desc}
        />
      );
    } else {
      return (
        <Cards
          id={item.id}
          side='right'
          src={item.image}
          title={item.name}
          text={item.desc}
        />
      );
    }
  });
  return (
      <Wrapper>
        {React.Children.toArray(ProjectList)}
      </Wrapper>
  );
}

export default Projects;
