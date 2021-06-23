import React from 'react';
import { Container,Hashicon ,InvitIcon,SettingIcon} from './styles';

export interface Props{
    channelName:string;
    selected?:boolean;

}
const ChannelButton: React.FC<Props> =({channelName,selected})=>{

    return( 
        <Container>
            <div>
                <Hashicon />
                <span>{channelName}</span>
            </div>
            <div>
                <InvitIcon/>
                <SettingIcon/>
            </div>
        </Container>
    );
};

export default ChannelButton;