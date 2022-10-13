import React from 'react';
import Button, {ButtonProps} from './Button';

export default {
  title: 'Custom Button',
  component: Button,
  args: {
    text: 'Hello world',
  },
};

export const ButtonBasic = (args: ButtonProps) => <Button {...args} />;
