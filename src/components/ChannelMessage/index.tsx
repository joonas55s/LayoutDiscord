import React from 'react';
import { Container,Avatar,Message,Header,Mention,Body } from './styles';

export { Mention } from './styles';
export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}
const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => {

  return (
    <Container className={hasMention ? 'mentions':'' }>
      <Avatar className={isBot ? 'Bot':'' } />
      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
          <time>{date}</time>
        </Header>
        <Body>{content}</Body>
      </Message>

    </Container>
  );
};

export default ChannelMessage;