import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../configs/colors';

type Props = {
  active?: boolean;
};

export const Paging = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1px;
  font-size: 0.8rem;
`;

export const Item = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 3rem;
  height: 3rem;
  background-color: ${(props) =>
    props.active ? primaryColor : secondaryColor};
`;

export const Span = styled.span<Props>`
  color: ${(props) => (props.active ? secondaryColor : primaryColor)};
`;

export const Link = styled.a`
  color: ${primaryColor};
  cursor: pointer;
`;
