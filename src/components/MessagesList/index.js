import React from 'react';
import { connect } from 'react-redux';
import { Container, List, Header } from 'semantic-ui-react';

import { createSelector } from 'reselect';

import './message-list.scss';

import MessageListItem from './MessageListItem';

const MessagesList = ({ messages }) => <Container>
    <div className="messages-list">
        <Header as="h3">Chat messages</Header>
        <List>{ 
            messages.map((message, idx) => <MessageListItem {...message} />)
        }</List>
    </div>
</Container>

const getChatMessages = state => state.chatMessages;
const getCurrentUsername = state => state.currentUser.username;
const messagesSelector = createSelector(
    [getChatMessages, getCurrentUsername],
    (messages, username) => messages.map((message, idx) => ({
        ...message,
        key: idx,
        emphasized: username === message.username
    }))
);

export default connect(state => ({
    messages: messagesSelector(state)
}))(MessagesList);