import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pagination from './index';
import PaginationType from './type';

export default {
  title: 'Components / Pagination',
  component: Pagination,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<PaginationType> = (args) => <Pagination {...args} />;

export const custom = Template.bind({});

custom.args = {
  total: 20,
  activePage: 10,
};
