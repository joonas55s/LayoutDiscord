import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
      {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Karina"
            date="21/06/2020"
            content="bom dia"
          />
        ))}

        <ChannelMessage
          author="jonas"
          date="04/06/2021"
          content={
            <>
              <Mention>@Karina</Mention>,bom dia
            </>
          }
          hasMention
        />

      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em" />
        {/* <InputIcon /> */}
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;