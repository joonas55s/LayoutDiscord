import React from 'react';
import { Box,Container,Profile,Avatar,UserData,Icons,MicIcon,HeadPhoneIcon,SettingsIcon } from './styles';

const UserInfo: React.FC =()=>{

    return( 
        <Container>
          <Profile>
            <Avatar />
            <UserData >
              <strong>Jonas</strong>
              <span>#1992</span>
            </UserData>
          </Profile>

          <Icons>
            <Box>
              <MicIcon/>
            </Box>
            <Box>
              <HeadPhoneIcon/>
            </Box>
            <Box>
              <SettingsIcon/>
            </Box>
          </Icons>

        </Container>
    );
};

export default UserInfo;