import React from 'react';
import { List, Header } from 'semantic-ui-react';

import './message-list.scss';

import MessageListItem from './MessageListItem';

const createMessageListItem = message => <MessageListItem {...message} />

export default ({ messages }) => <div className="messages-list">
    <Header as="h3">Chat messages</Header>
    <List>{ messages.map(createMessageListItem) }</List>
</div>