//This is your top level React component, you may change everything
import React from 'react'

import LandingHeader from './LandingHeader';
import MessageCreationContainer from './MessageCreationContainer';
import MessagesList from './MessagesList';

export default ({ chatServer }) => <div>
  <LandingHeader />
  <MessagesList />
  <MessageCreationContainer emitMessage={ chatServer.emitMessage } />  
</div>