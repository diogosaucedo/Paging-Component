import * as Styles from './styles';
import React from 'react';

const Container = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default Container;
