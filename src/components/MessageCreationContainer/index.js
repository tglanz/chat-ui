
import React from 'react'

import './message-creation-container.scss';

import MessageCreationForm from './MessageCreationForm';

export default ({ emitMessage }) => <div className={"message-creation-container"}>
    <MessageCreationForm emitMessage={ emitMessage } />
</div>