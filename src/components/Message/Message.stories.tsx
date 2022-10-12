import React from 'react';
import Message from './Message';

export default {
  title: 'React Native Message',
  component: Message,
  args: {
    message: 'Hello',
    time: '10.00pm',
    type: 'sender',
  },
};

export const Basic = args => <Message {...args} />;
