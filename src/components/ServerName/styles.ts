import styled from 'styled-components';
import {ExpandMore} from 'styled-icons/material';

export const Container = styled.h1`
  display:flex;
  justify-content:space-between;
  background-color:var(--secondary);
  
  align-items:center;
  padding:0px 11px 0px 16px;

  box-shadow:rgb(0,0,0,0.2) 0px 1px 0px 0px;
  z-index:2;
`;

export const Title = styled.div`
  color:var(--white);
  font-weight:bold;
  font-size:16px;
`;

export const ExpandIcon = styled(ExpandMore)`
  width:28px;
  height:28px;
  color:var(--white);
  cursor:pointer;
`;