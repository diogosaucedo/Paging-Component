import React from 'react';
import * as Styles from './styles';
import ContainerType from './type';

const Container = ({ children }: ContainerType) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default Container;
