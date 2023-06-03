import axios from 'axios';
import { SETTINGS } from '../constants';
import { localStorage } from '../utils';
import { ExchangeItem } from '../types';

export const getCryptoPairs = async (): Promise<string[]> => {
  const token = localStorage.getWithExpiration('access_token');
  const res = await axios.get(`${SETTINGS.API_URL}/crypto-pair`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Origin:
        'https://big-data-crypto-frontend-app.s3.eu-central-1.amazonaws.com',
    },
  });
  return res.data;
};

export const getCurrenciesRates = async (
  currency: string
): Promise<{
  currencies: ExchangeItem[];
}> => {
  const token = localStorage.getWithExpiration('access_token');
  const res = await axios.get(`${SETTINGS.API_URL}/currency/${currency}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Origin:
        'https://big-data-crypto-frontend-app.s3.eu-central-1.amazonaws.com',
    },
  });
  return res.data;
};
