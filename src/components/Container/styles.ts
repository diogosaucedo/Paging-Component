import styled from 'styled-components';

type Props = {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
};

export const Container = styled.div<Props>`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  // Box Model
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  height: ${(props) => (props.height ? props.height : 'fit-content')};

  // Display
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '0.5rem'};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
`;
