import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../configs/colors';
import PaginationType from './type';

export const Paging = styled.ul`
  // Layout
  display: flex;
  gap: 1px;

  // Box Model
  padding: 0;
  margin: 0;

  // Display
  list-style: none;
  font-size: 0.8rem;
`;

export const Item = styled.li<PaginationType>`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box Model
  width: 3rem;
  height: 3rem;
  padding: 0;

  // Display
  background-color: ${(props) =>
    props.active ? primaryColor : secondaryColor};
`;

export const Span = styled.span<PaginationType>`
  color: ${(props) => (props.active ? secondaryColor : primaryColor)};
`;

export const Link = styled.a`
  color: ${primaryColor};
  cursor: pointer;
`;
