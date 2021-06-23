import React from 'react';
import { Container,Avatar,User,Role } from './styles';


export interface UserProps{
  nickName:string;
  isBot?:boolean;
  online?:boolean;
}



const UserRow:React.FC<UserProps> =({nickName,isBot})=>{
  return(
    <User>
      <Avatar className={isBot ? 'Bot':''}/>
      <strong>{nickName}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}





const UserList: React.FC =()=>{

    return( 
        <Container>
            <Role>Disponivel 1</Role>
            <UserRow nickName="Jonas" online/>
            <UserRow nickName="Karina" online/>

            <Role>Offiline</Role>
            <UserRow nickName="Ezequiel"/>
            <UserRow nickName="Lucas"/>
            <UserRow nickName="Neko" isBot/>

        </Container>
    );
};

export default UserList;