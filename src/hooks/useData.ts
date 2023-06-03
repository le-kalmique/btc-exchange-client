import { useState, useEffect } from 'react';
import { ExchangeItem } from '../types';
import { getCurrenciesRates } from '../api';

export const useData = (selectedPair: string) => {
  const [data, setData] = useState<ExchangeItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getCurrenciesRates(selectedPair?.replace('/', '-'));
      setData(data.currencies);
      setIsLoading(false);
    };

    if (selectedPair) {
      getData();
    }
  }, [selectedPair]);

  return {
    data,
    isLoading,
  };
};
