import styled from 'styled-components';
import TitleType from './type';

export const Title = styled.h1<TitleType>`
  color: ${(props) => props.color};
`;
