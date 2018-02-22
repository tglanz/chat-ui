
import React from 'react'
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { Form, Image, Icon, Header, Message } from 'semantic-ui-react'

import withPersistentState from '../hoc/withPersistentState';
import withRandomAvatarProvider from '../hoc/withRandomAvatarProvider';

import * as currentUserActions from '../../redux/actions/currentUserActions';

import './message-creation-container.scss';
import submitMessageCreationForm from './submitMessageCreationForm';
import { bindActionCreators } from 'redux';

const MessageCreationForm = ({
    emitMessage,
    onSubmit,
    errorMessage, setErrorMessage,    
    username, setUsername, onUsernameChanged,
    text, setText,
    avatar, setAvatar
}) => <Form
    error={ errorMessage !== "" }
    onSubmit={ onSubmit }>

    <Header as='h2'>
        Send A Message
        <Image circular floated={'right'} src={ avatar } />
    </Header>

    <Form.Input
        name="username"
        label="Your username"
        icon={ <Icon name="user" /> }
        placeholder="Your username" type="text"
        value={username}
        onChange={ (e, { value }) => {
            setUsername(value);
            // onUsernameChanged(value); // DONT wanna put it here
        } }/>

    <Form.TextArea
        name="text"
        value={text}
        onChange={ (e, { value }) => setText(value) }/>

    <Message
      error
      header='Oops'
      content={ errorMessage }
    />

    <Form.Button icon labelPosition='left'>Send
        <Icon name='send' />
    </Form.Button>
</Form>

// Switch with redux connect any time :) no component state, just props
export default compose(
    withRandomAvatarProvider(),
    withPersistentState('username', 'setUsername', '', 'chat-ui/username'),
    withPersistentState('usersAvatars', 'setUsersAvatars', '', 'chat-ui/users-avatars'),
    withState('avatar', 'setAvatar', ''),
    withState('text', 'setText', ''),
    withState('errorMessage', 'setErrorMessage', ''),
    connect(
        state => {},
        dispatch => ({
            onUsernameChanged: bindActionCreators(currentUserActions.usernameChanged, dispatch)
        })
    ),
    withHandlers({
        onSubmit: props => event => {
            props.onUsernameChanged(props.username);
            submitMessageCreationForm(props)
        }
    })
)(MessageCreationForm);