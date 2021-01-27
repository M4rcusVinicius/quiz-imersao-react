import React from 'react';
import info from '../../dataBase/info.json';
import * as S from './styled';

export default function Template() {
  return (
    <S.Wrapper>
      <S.Title>{info.name}</S.Title>
      <S.Description>{info.description}</S.Description>
    </S.Wrapper>
  );
}
