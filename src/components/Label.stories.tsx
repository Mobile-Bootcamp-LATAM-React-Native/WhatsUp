import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Label from './Label';
import {View} from 'react-native';

storiesOf('Label', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default', () => <Label>New Label</Label>)
  .add('h0', () => <Label type="h0">New Label</Label>)
  .add('h1', () => <Label type="h1">New Label</Label>)
  .add('h2', () => <Label type="h2">New Label</Label>)
  .add('h3', () => <Label type="h3">New Label</Label>)
  .add('h4', () => <Label type="h4">New Label</Label>)
  .add('p1', () => <Label type="p1">New Label</Label>)
  .add('p2', () => <Label type="p2">New Label</Label>);
