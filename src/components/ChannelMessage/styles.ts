import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display:flex;
  align-items:center;
  padding: 4px 16px;
  margin-right:4px;
  background-color:transparent;

  &.mentions{
    background-color:var(--mention-message);

    border-left: 4px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top:13px;
  }
`;

export const Avatar = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:var(--secondary);


`;

export const Message = styled.div`
  min-height:40px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  margin-left:17px;

`;

export const Header = styled.div`
  display:flex;
  align-items:center;
  > strong{
    color:var(--white);
    font-size:16px;

  }

  >span{
    margin-left:6px;
    color:var(--white);
    background-color:var(--discord);
    padding:4px 5px;
    border-radius:4px;

    text-transform:uppercase;
    font-size: 9px;
    font-weight:bold;
  }

  > time{
    margin-left:6px;
    color:var(--gray);

    font-size:13px;
  }
`;

export const Body = styled.div`
  font-size:16px;
  text-align:left;
  color:var(--white);
`;

export const Mention = styled.span`
  color:var(--link);
  cursor:pointer;

  &:Hover{
    text-decoration:underline;
  }
`;
