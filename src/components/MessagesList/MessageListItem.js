import React from 'react';
import { Image, List } from 'semantic-ui-react';
import classnames from 'classnames';

// TBD - Think of adding a timestamp
export default ({ avatar, username, text }) => <List.Item
    className={ classnames(
        "message-list-item", {
        "sent-by-me": username.indexOf("psyduc") !== -1
    }) }
>
    <Image avatar circular src={ avatar } />

    <List.Content>
        <List.Header as='h3'>{ username }</List.Header>
        <List.Description>{ text }</List.Description>
    </List.Content>
</List.Item>

/*

import { Grid, Image, Header } from 'semantic-ui-react';

export default ({ avatar, username, text }) => <div className={ classNames('messages-list-item') }>
    <Grid columns={2}>
            <Grid.Row>
                <Grid.Col width={1}>
                    <Image src={ avatar } />
                </Grid.Col>
                <Grid.Col width={5}>
                    <Header as="h3">{ username }</Header>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col>
                    <p>{ text }</p>
                </Grid.Col>
            </Grid.Row>
    </Grid>
</div>
*/

