import React from 'react';
import { Image, List } from 'semantic-ui-react';
import classnames from 'classnames';
import moment from 'moment';

export default ({ avatar, username, text, timestamp, emphasized }) => <List.Item
    className={ classnames(
        "message-list-item", {
        "emphasized": emphasized
    }) }
>
    <Image avatar circular src={ avatar } />

    <List.Content>
        <List.Header as='h3'>{ username }</List.Header>
        <List.Header as='h6'>{ moment(timestamp).fromNow() }</List.Header>
        <List.Description>{ text }</List.Description>
    </List.Content>
</List.Item>