import React from 'react';
import { Auth } from '../Auth';
import * as S from './Header.styled';

interface IProps {}

export const Header: React.FC<IProps> = (props) => {
  return (
    <S.Wrapper>
      <S.Title>Big Data Crypto</S.Title>
      <Auth />
    </S.Wrapper>
  );
};
