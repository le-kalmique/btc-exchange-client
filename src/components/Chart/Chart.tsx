import React from 'react';
import CanvasJSReact from '@canvasjs/react-stockcharts';
import { useTheme } from 'styled-components';

import { ExchangeItem } from '../../types';

interface IProps {
  data: ExchangeItem[];
  selectedPair: string;
}

const CanvasJs = CanvasJSReact.CanvasJS;
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
export const Chart: React.FC<IProps> = ({ data, selectedPair }) => {
  const theme = useTheme();

  const dataPoints1 = data.map((item) => ({
    x: new Date(item.date),
    y: [item.open, item.high, item.low, item.close],
  }));
  const dataPoints2 = data.map((item) => ({
    x: new Date(item.date),
    y: item.volume,
  }));
  const dataPoints3 = data.map((item) => ({
    x: new Date(item.date),
    y: item.close,
  }));

  const addSymbols = (e: { value: number }) => {
    const suffixes = ['', 'K', 'M', 'B'];
    let order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0
    );
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    const suffix = suffixes[order];
    return CanvasJs.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const options = {
    theme: 'light2',
    exportEnabled: true,
    charts: [
      {
        height: 400,
        toolTip: {
          shared: true,
        },
        axisX: {
          lineThickness: 5,
          tickLength: 0,
          labelFormatter: () => '',
        },
        axisY: {
          prefix: '$',
        },
        legend: {
          verticalAlign: 'top',
        },
        data: [
          {
            showInLegend: true,
            name: 'Stock Price',
            yValueFormatString: '#,###.##',
            type: 'candlestick',
            dataPoints: dataPoints1,
          },
        ],
      },
      {
        height: 200,
        toolTip: {
          shared: true,
        },
        axisY: {
          prefix: '$',
          labelFormatter: addSymbols,
        },
        legend: {
          verticalAlign: 'top',
        },
        data: [
          {
            showInLegend: true,
            name: `Volume (${selectedPair})`,
            yValueFormatString: '#,###.##',
            dataPoints: dataPoints2,
          },
        ],
      },
    ],
    rangeSelector: {
      height: 50,
      selectedRangeButtonIndex: 1,
      buttonStyle: {
        labelFontSize: 16,
        borderColor: theme.secondary,
        backgroundColorOnHover: theme.secondary,
        backgroundColorOnSelect: theme.secondary,
        labelFontColorOnHover: theme.contrastText,
      },
      inputFields: {
        style: {
          fontSize: 16,
          borderColor: theme.secondary,
          borderColorOnFocus: theme.secondary,
        },
      },
    },
    navigator: {
      data: [
        {
          dataPoints: dataPoints3,
        },
      ],
      slider: {
        minimum: data[0]?.date,
        maximum: data[data.length - 1]?.date,
      },
    },
  };

  return (
    <CanvasJSStockChart
      options={options}
      containerProps={{ width: 'calc(100vw - 8rem)', height: '800px' }}
    />
  );
};
