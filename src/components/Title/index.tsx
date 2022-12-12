import * as Styles from './styles';
import React from 'react';
import TitleType from './type';

const Title = ({ children }: TitleType) => {
  return <Styles.Title>{children}</Styles.Title>;
};

export default Title;
