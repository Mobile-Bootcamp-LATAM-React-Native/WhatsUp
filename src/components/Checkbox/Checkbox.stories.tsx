import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Custom Checkbox',
  component: Checkbox,
  args: {
    text: 'Remember Me',
    value: false
  },
};

export const CheckboxNormal = (args: CheckboxProps) => <Checkbox {...args} />;