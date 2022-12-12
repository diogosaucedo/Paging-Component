import styled from 'styled-components';

type Props = {
  children: string;
  color?: string;
};

export const Title = styled.h1<Props>`
  // Display
  color: ${(props) => (props.color ? props.color : null)};
`;
