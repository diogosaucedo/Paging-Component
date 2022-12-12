import * as Styles from './styles';
import React from 'react';

const Title = ({ children }: { children: string }) => {
  return <Styles.Title>{children}</Styles.Title>;
};

export default Title;
