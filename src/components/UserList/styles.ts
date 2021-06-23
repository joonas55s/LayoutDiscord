import styled from 'styled-components';
import { UserProps } from '.';

export const Container = styled.div`
  grid-area:UL;
  display:flex;
  flex-direction:column;
  background-color:var(--secondary);
  justify-content:left;
  padding: 3px 6px 0 16px ;

  max-height:calc(100vh - 46px);

  overflow-y:scroll;

  ::-webkit-scrollbar{
    width:4px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:var(--tertiary);
    border-radius:4px;
  }
  ::-webkit-scrollbar-track{
    background-color:var(--secondary);
  }
`;

export const Avatar = styled.div`
  flex-shrink:0;
  width:32px;
  height:32px;
  border-radius:50%;
  background-color:var(--primary);
  position:relative;
  &.Bot{
    background-color:var(--mention-detail);
  }
  &::before{
    position:absolute;
    width:9px;
    height:9px;
    border-radius:6px;
    background-color:var(--primary);
    text-align:right;
    border-radius:50%;
    border: 4px solid var(--quaternary);
    right:-5px;
    top:calc(50% - 1px);
    content:'';

    
}
`;

export const User = styled.div`

display:flex;
margin-top:5px;
padding:5px;
align-items:center;
cursor:pointer-events;
border-radius:4px;
background:transparent;

transition: background 0.2s;

&:hover{
  background-color:rgb(255,255,255,0.1);
}

>Strong{
  color:var(--white);
  margin-left:13px;
  font-weight:500;
  font-size:16;

  opacity:0.7;

  //############### corta texto muito grande ex:jonas s...
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;

}

>span{
  margin-left:9px;
  color:var(--white);
  background-color:var(--discord);
  padding:4px 5px;
  border-radius:4px;

  text-transform:uppercase;
  font-size: 9px;
  font-weight:bold;
}


`;

export const Role = styled.span`
  margin-top:20px;
  color:var(--gray);
  font-size:12px;
  font-weight:500;
  text-transform:uppercase;
  
`; 