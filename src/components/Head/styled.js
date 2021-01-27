import styled from 'styled-components';
import theme from '../../dataBase/theme.json';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: ${theme.colors.primary};
  font-weight: 900;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  margin: 1rem 0;
`;
