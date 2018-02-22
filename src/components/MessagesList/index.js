import React from 'react';
import { connect } from 'react-redux';
import { Container, List, Header } from 'semantic-ui-react';

import './message-list.scss';

import MessageListItem from './MessageListItem';

const MessagesList = ({ messages = [], currentUsername }) => <Container>
    <div className="messages-list">
        <Header as="h3">Chat messages</Header>
        <List>{ 
            messages.map((message, idx) => <MessageListItem
                key={ idx }
                {...message}
                emphasized={ currentUsername === message.username } />)
        }</List>
    </div>
</Container>

export default connect(state => ({
    messages: state.chatMessages,
    currentUsername: state.currentUser.username
}))(MessagesList);