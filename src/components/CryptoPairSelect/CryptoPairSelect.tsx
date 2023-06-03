import React from 'react';
import Select from 'react-select';
import { useTheme } from 'styled-components';
import { transparentize } from 'polished';

import * as S from './CryptoPairSelect.styled';
import { useOptions } from '../../hooks';

interface IProps {
  onChange: (currency: string) => void;
}

export const CryptoPairSelect: React.FC<IProps> = ({ onChange }) => {
  const theme = useTheme();
  const options = useOptions();

  return (
    <S.Wrapper>
      <S.Label>Select Crypto Pair</S.Label>
      <Select
        isSearchable
        options={options}
        onChange={(option) => onChange(option?.value || '')}
        theme={(selectTheme) => ({
          ...selectTheme,
          colors: {
            ...selectTheme.colors,
            primary: theme.secondary,
            primary25: transparentize(0.75, theme.secondary),
            primary50: transparentize(0.5, theme.secondary),
            primary75: transparentize(0.25, theme.secondary),
          },
        })}
      />
    </S.Wrapper>
  );
};
