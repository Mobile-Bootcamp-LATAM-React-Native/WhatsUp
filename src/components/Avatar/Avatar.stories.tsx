import React from 'react';
import Avatar from './Avatar';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

const defaultURL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

storiesOf('Avatars components', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default', () => <Avatar url="def" />)
  .add('XS Avatar', () => <Avatar url={defaultURL} size="xs" />)
  .add('SM Avatar', () => <Avatar url={defaultURL} size="sm" />)
  .add('MD Avatar', () => <Avatar url={defaultURL} size="md" />)
  .add('LG Avatar', () => <Avatar url={defaultURL} size="lg" />)
  .add('XL Avatar', () => <Avatar url={defaultURL} size="xl" />)
  .add('2XL Avatar', () => <Avatar url={defaultURL} size="2xl" />);
