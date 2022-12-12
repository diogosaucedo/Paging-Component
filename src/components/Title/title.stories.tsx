import React from 'react';
import { Meta, Story } from '@storybook/react';
import Title from './index';
import TitleType from './type';

export default {
  title: 'Components / Title',
  component: Title,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<TitleType> = (args) => <Title {...args} />;

export const custom = Template.bind({});

custom.args = {
  children: 'Text',
  color: 'black',
};
