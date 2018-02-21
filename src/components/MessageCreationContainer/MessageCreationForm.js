
import React from 'react'

import { Form, Input, TextArea, Button, Image, Icon, Header } from 'semantic-ui-react'

import './message-creation-container.scss';

export default () => <Form>
    <Header as='h2'>
        Send A Message <Image circular
        floated={'right'}
        src='https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png' />
    </Header>

    <Form.Field>
        <Input
            label="Your username"
            icon={ <Icon name="user" /> }
            placeholder="username" type="text" />

    </Form.Field>

    <Form.Field>
        <TextArea />
    </Form.Field>

    <Button icon labelPosition='left'>Send
        <Icon name='send' />
    </Button>
</Form>