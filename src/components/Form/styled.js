import styled, { keyframes } from 'styled-components';
import theme from '../../dataBase/theme.json';

export const Wrapper = styled.form`
  width: 100%;
  height: 3.2rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  position: relative;
`;

export const NameInput = styled.input`
  height: 3.2rem;
  padding: 0 0.8rem;
  margin: 0;
  font-size: 1.2rem;
  border-radius: ${theme.box.borderRadius};
  border: ${theme.box.border};
  margin-right: 1.2rem;
`;

const rotate = keyframes`
  from {
    transform: translate(0px);
  }
  to {
    transform: translate(5px);
  }
`;

export const Info = styled.span`
  font-size: 1rem;
  top: 4rem;
  left: 0rem;
  position: absolute;
  background-color: ${theme.colors.erro};
  padding: 0.4rem;
  width: 12rem;
  border: solid 1px #e0e0e0; 
  border-radius: ${theme.box.borderRadius};
  transition: 200ms;
  display: none;

  &:after {
    content:"";
    position: absolute;
    right: 11rem;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent ${theme.colors.erro} transparent; 
  }
`;

export const Button = styled.button`
  height: 3.3rem;
  border-radius: ${theme.box.borderRadius};
  border: ${theme.box.border};
  border-left: none;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  cursor: pointer;
  transition: 200ms;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 9rem;

  &:disabled {
    cursor: not-allowed;
    &:hover ~ ${Info} {
      display: inline;
    }

    &:hover {
      animation: ${rotate} 100ms alternate 4;
    }
  }
`;

export const ButtonText = styled.span`
  font-size: 1.4rem;
`;
