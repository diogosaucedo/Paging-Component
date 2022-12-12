import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from './index';
import ContainerType from './type';

export default {
  title: 'Components / Container',
  component: Container,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<ContainerType> = (args) => <Container {...args} />;

export const custom = Template.bind({});

custom.args = {
  children: '',
  width: '480px',
  height: '320px',
  backgroundColor: 'white',
  borderRadius: '4px',
};
