import { useState, useEffect } from 'react';
import { getTestPairs } from '../utils';
import { Option } from '../types';
import { getCryptoPairs } from '../api';

export const useOptions = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const options = getTestPairs();
    setOptions(options.map((option) => ({ value: option, label: option })));
    getCryptoPairs().then((pairs) => {
      const options = pairs.map((pair) => ({
        value: pair,
        label: pair,
      }));
      setOptions(options);
    });
  }, []);

  return options;
};
