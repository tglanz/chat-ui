import React from 'react';
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';

import logo from '../../assets/spotim-logo.jpg'

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;

export default () => <Container className={'spotim-header'}>
    <div className={'spotim-title'}>
        Welcome to the Spot.IM Chat app
</div>
    <div>
        <Logo>
            <Image size={'tiny'} src={logo} />
        </Logo>
    </div>
</Container>