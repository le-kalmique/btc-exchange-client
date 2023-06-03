import React, { useEffect, useState } from 'react';
import { localStorage } from '../../utils';
import { SETTINGS } from '../../constants';
import * as S from './Auth.styled';

interface IProps {}

export const Auth: React.FC<IProps> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getWithExpiration('access_token');
      if (!token) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };

    const params = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = params.get('access_token');
    const idToken = params.get('id_token');
    const expires_in = params.get('expires_in');
    const token_type = params.get('token_type');

    if (accessToken && idToken && token_type) {
      // Store the JWT token in local storage
      localStorage.setWithExpiration(
        'access_token',
        accessToken,
        Number(expires_in) * 1000
      );
      localStorage.setWithExpiration(
        'id_token',
        idToken,
        Number(expires_in) * 1000
      );
      localStorage.setWithExpiration(
        'token_type',
        token_type,
        Number(expires_in) * 1000
      );
      window.location.replace('/index.html');
    } else {
      checkToken();
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Greeting>Hello!</S.Greeting>
      {isLoggedIn ? (
        <S.LinkButton
          href={SETTINGS.LOGOUT_URL}
          onClick={() => {
            localStorage.clear();
          }}
        >
          Logout
        </S.LinkButton>
      ) : (
        <S.LinkButton href={SETTINGS.AUTH_URL}>Login</S.LinkButton>
      )}
    </S.Wrapper>
  );
};
