
import React from 'react';
import { Container,HashTagIcon,Title,Separetor,Description } from './styles';

const ChannelInfo: React.FC =()=>{

    return( 
        <Container>
            <HashTagIcon/>
            <Title>Chate livre</Title>
            <Separetor></Separetor>
            <Description>Canal aberto para conversas</Description>
        </Container>
    );
};

export default ChannelInfo;