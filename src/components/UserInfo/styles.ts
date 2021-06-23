import styled from 'styled-components';
import {Mic,MicOff,Headset,Settings} from 'styled-icons/material';

export const Container = styled.div`
  grid-area:UI;
  display:flex;
  background-color:var(--quaternary);
  justify-content:space-between;
  align-items:center;
  box-shadow:rgb(0,0,0,0.2) 0px 1px 0px 0px;
  z-index:2;
  padding:10px;
`;

export const Profile = styled.div`
  display:flex;
  align-items:center;


`;

export const Avatar = styled.div`
  height:32px;
  width:32px;
  border-radius:50%;
  background-color:var(--gray);
`;

export const UserData = styled.div`
  margin-left:8px;
  display:flex;
  flex-direction:column;

  >Strong {
    font-size:13px;
    color:var(--white);
    display:block;
  }

  >Span{
    font-size:13px;
    font-weight:400;
    color:var(--gray);
    
  }

`;

export const Icons = styled.div`
  display:flex;
  align-items:center;

  >svg:not(:first-child){
    margin-left:7px;
  }

  
  
`;

export const MicIcon = styled(Mic)`
  width:20px;
  height:20px;

  color:var(--white);
  opacity:0.7;
  cursor:pointer;

  transition: opacity 0.2s;
  &:hover{
    opacity:1;
  }

`;

export const HeadPhoneIcon = styled(Headset)`
  width:20px;
  height:20px;

  color:var(--white);
  opacity:0.7;
  cursor:pointer;

  transition: opacity 0.2s;
  &:hover{
    opacity:1;
  }
  
  `;

export const SettingsIcon = styled(Settings)`
   width:20px;
  height:20px;

  color:var(--white);
  opacity:0.7;
  cursor:pointer;

  transition: opacity 0.2s;
  &:hover{
    opacity:1;
  }
  `;

export const Box = styled.div`
display:flex;
width:30px;
height:30px;
border-radius:25%;
background-color:transparent;
align-items:center;
justify-content:center;

transition: background-color 0.5s;

&:hover{
  background-color:var(--secondary);
}


`;