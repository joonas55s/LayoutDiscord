import React from 'react';


import { Button } from './styles';

export interface Props {
    selective?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton:React.FC<Props>=({selective,isHome,hasNotifications,mentions}) =>{

    return(
        <Button 
        isHome={isHome}
        selective={selective}
        hasNotifications={hasNotifications}
        mentions={mentions}
        >
            {isHome }
        </Button>
    );
}

export default ServerButton;