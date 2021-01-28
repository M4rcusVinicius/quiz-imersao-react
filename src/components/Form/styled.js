import styled from 'styled-components';
import theme from '../../dataBase/theme.json';

export const Wrapper = styled.form`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const NameInput = styled.input`
  height: 2.8rem;
  padding: 0 0.8rem;
  margin: 0;
  font-size: 1.2rem;
  border-radius: ${theme.box.borderRadius} 0 0 ${theme.box.borderRadius};
  border: ${theme.box.border};
`;

export const Button = styled.button`
  height: 2.9rem;
  border-radius: 0 ${theme.box.borderRadius} ${theme.box.borderRadius} 0;
  border: ${theme.box.border};
  border-left: none;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  cursor: pointer;
  transition: 200ms;

  &:disabled {
    background-color: ${theme.colors.dark};
    cursor: default;
  }
`;
