import styled from 'styled-components';
import ContainerType from './type';

export const Container = styled.div<ContainerType>`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  // Box Model
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || 'fit-content'};

  // Display
  border-radius: ${(props) => props.borderRadius || '0.5rem'};
  background: ${(props) => props.backgroundColor};
`;
