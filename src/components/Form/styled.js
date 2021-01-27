import styled from 'styled-components';
import theme from '../../dataBase/theme.json';

export const Wrapper = styled.form`
  width: 100%;
  height: 2.5rem;
`;

export const NameInput = styled.input`
  height: 100%;
  padding: 0 1.2rem;
  font-size: 1.2rem;
  border-radius: ${theme.box.borderRadius} 0 0 ${theme.box.borderRadius};
  border: ${theme.box.border};
`;

export const Button = styled.button`
  height: 100%; 
`;
