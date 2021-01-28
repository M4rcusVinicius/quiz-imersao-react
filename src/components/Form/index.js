/* eslint-disable react/jsx-no-bind */
import { PlayFill } from '@styled-icons/bootstrap/PlayFill';
import React from 'react';
import * as S from './styled';

export default function Template() {
  const [name, setName] = React.useState('');
  console.log('UseState return', name);

  return (
    <S.Wrapper
      onSubmit={function (info) {
        info.preventDefault();
        console.log('Submit with react and next', info);
      }}
    >
      <S.NameInput
        onChange={function (info) {
          setName(info.target.value);
        }}
        placeholder="Digite seu nome"
      />
      <S.Button type="submit" disabled={name.length === 0}>
        <PlayFill size="38" title="Unlock account" />
      </S.Button>
    </S.Wrapper>
  );
}
