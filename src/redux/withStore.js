import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';

import * as chatMessagesActions from './actions/chatMessagesActions';

export default (Component, {
    chatServer
}) => props => {

    const store = createStore();

    chatServer.messagesStream.subscribe(message => {
        store.dispatch(chatMessagesActions.received(message));
    });
    
    return <Provider store={ store }>
        <Component
            {...props}
            chatServer={ chatServer }
        />
    </Provider>
}