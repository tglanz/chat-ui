
//This is your top level React component, you may change everything

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';

import MessageCreationContainer from './MessageCreationContainer';
import MessagesList from './MessagesList';

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;

const getDummyMessages = () => {
  const avatars = [
    'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png'
  ];

  const justAText = 'this is what pikachu wrote...';

  const a = avatars.map(avatar => ({
    avatar,
    username: avatar.split('/00')[1],
    text: avatar.indexOf("pikachu") == -1 ? avatar : justAText
  }));

  return a;
}

export default () => <div>
  <Container className={'spotim-header'}>
      <div className={'spotim-title'}>
        Welcome to the Spot.IM Chat app
      </div>
      <div>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>
      </div>
  </Container>

  <MessagesList messages={ getDummyMessages().map(x => ({ ...x, key: x.username })) }/>

  <MessageCreationContainer />  
</div>