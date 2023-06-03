import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { CryptoPairSelect } from '../CryptoPairSelect';
import { Header } from '../Header';
import { Chart } from '../Chart';
import * as S from './App.styled';

import { useAuth, useData } from '../../hooks';

interface IProps {}

export const App: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const isAuthorized = useAuth();
  const [selectedPair, setSelectedPair] = useState('');
  const { data, isLoading } = useData(selectedPair);

  return (
    <S.Wrapper>
      <Header />
      {isAuthorized ? (
        <S.Main>
          <CryptoPairSelect onChange={setSelectedPair} />
          {data.length > 0 && <Chart data={data} selectedPair={selectedPair} />}
        </S.Main>
      ) : (
        <S.Text> Please, authorize to use this app. </S.Text>
      )}

      <S.Loader loading={isLoading}>
        <RingLoader color={theme.accent} loading={isLoading} size={124} />
      </S.Loader>
    </S.Wrapper>
  );
};
