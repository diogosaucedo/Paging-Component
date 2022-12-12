import React from 'react';
import * as Styles from './styles';
import ContainerType from './type';

const Container = ({
  children,
  width,
  height,
  backgroundColor,
  borderRadius,
}: ContainerType) => {
  return (
    <Styles.Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      {children}
    </Styles.Container>
  );
};

export default Container;
