import React from 'react';
import Input, {InputProps} from '.';

export default {
  title: 'Custom Input',
  component: Input,
  args: {
    isInvalid: true,
    placeholder: 'Phone Number',
  },
};

export const InputError = (args: InputProps) => <Input {...args} />;
export const InputNormal = () => <Input isInvalid={false} />;
