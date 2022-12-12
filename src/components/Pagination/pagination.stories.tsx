import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pagination from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

export const TwentyPages: Story = () => (
  <Pagination total={20} activePage={8} />
);
export const NinePages: Story = () => <Pagination total={9} activePage={5} />;
export const SixPages: Story = () => <Pagination total={6} activePage={3} />;
export const FivePages: Story = () => <Pagination total={5} activePage={3} />;
export const ThreePages: Story = () => <Pagination total={3} activePage={1} />;
