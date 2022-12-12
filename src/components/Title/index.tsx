import * as Styles from './styles';
import React from 'react';
import TitleType from './type';

const Title = ({ children, color }: TitleType) => {
  return <Styles.Title color={color}>{children}</Styles.Title>;
};

export default Title;
