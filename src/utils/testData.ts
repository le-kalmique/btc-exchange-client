import { faker } from '@faker-js/faker';

export const getTestBtcData = (length: number) => {
  const createElement = (date: Date) => {
    const settings = {
      min: 200,
      max: 1000,
    };
    const main = {
      date: date.toISOString(),
      open: faker.number.int(settings),
      close: faker.number.int(settings),
    };
    return {
      ...main,
      high: faker.number.int({
        min: main.open > main.close ? main.open + 1 : main.close + 1,
        max: 1002,
      }),
      low: faker.number.int({
        max: main.open > main.close ? main.close - 1 : main.open - 1,
        min: 198,
      }),
      volume: faker.number.int({
        min: 1000,
        max: 10000,
      }),
    };
  };

  const data = [];
  for (let i = length; i > 0; i--) {
    // Date is i days ago
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push(createElement(date));
  }
  return data;
};

export const getTestPairs = () => {
  const pairs = ['BTC/ETH', 'LTC/BTC', 'BTC/USDT', 'ETH/USD', 'BTC/GBP'];

  return pairs;
};
