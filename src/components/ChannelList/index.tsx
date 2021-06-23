import React from 'react';
import { Container,AddCategoryIcon,Category } from './styles';
import ChannelButton from '../ChannelBotton';
const ChannelList: React.FC =()=>{

    return( 
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="Dark Souls"/>
            <ChannelButton channelName="GTA"/>
            <ChannelButton channelName="CS GO"/>
            <ChannelButton channelName="Rocket league"/>
        </Container>
        
    );
};

export default ChannelList;